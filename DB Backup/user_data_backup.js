// One By One Data Insert Script

// npm install pg

const { Pool } = require('pg');
const fs = require('fs').promises;
const path = require('path');

// Database connection configuration
const pool = new Pool({
  connectionString: 'YOUR_NEON_DATABASE_CONNECTION_STRING_HERE',
  ssl: {
    rejectUnauthorized: false
  }
});

// Function to insert data from JSON file to database
async function insertJsonDataToDatabase() {
  let client;
  
  try {
    // Read the JSON file
    const jsonFilePath = path.join(__dirname, 'file.json');
    const jsonData = await fs.readFile(jsonFilePath, 'utf8');
    const userData = JSON.parse(jsonData);
    
    console.log(`Found ${userData.length} records to insert`);
    
    // Get a client from the pool
    client = await pool.connect();
    
    // Begin transaction
    await client.query('BEGIN');
    
    // SQL query to insert data into users table
    const insertQuery = `
      INSERT INTO users (
        user_id, 
        name, 
        gender, 
        weight, 
        date_of_birth, 
        about, 
        location, 
        phone_no, 
        whatsapp_no, 
        joining_date
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (user_id) DO UPDATE SET
        name = EXCLUDED.name,
        gender = EXCLUDED.gender,
        weight = EXCLUDED.weight,
        date_of_birth = EXCLUDED.date_of_birth,
        about = EXCLUDED.about,
        location = EXCLUDED.location,
        phone_no = EXCLUDED.phone_no,
        whatsapp_no = EXCLUDED.whatsapp_no,
        joining_date = EXCLUDED.joining_date
    `;
    
    let successCount = 0;
    let errorCount = 0;
    
    // Insert each record
    for (const user of userData) {
      try {
        await client.query(insertQuery, [
          user.user_id,
          user.name,
          user.gender,
          parseInt(user.weight), // Convert weight to integer
          user.date_of_birth,
          user.about || '', // Handle empty about field
          user.location,
          user.phone_no,
          user.whatsapp_no,
          user.joining_date
        ]);
        
        successCount++;
        console.log(`✓ Inserted user: ${user.name} (${user.user_id})`);
        
      } catch (insertError) {
        errorCount++;
        console.error(`✗ Failed to insert user ${user.user_id}:`, insertError.message);
      }
    }
    
    // Commit transaction
    await client.query('COMMIT');
    
    console.log('\n=== INSERTION SUMMARY ===');
    console.log(`Total records processed: ${userData.length}`);
    console.log(`Successfully inserted: ${successCount}`);
    console.log(`Failed insertions: ${errorCount}`);
    
  } catch (error) {
    // Rollback transaction on error
    if (client) {
      await client.query('ROLLBACK');
    }
    console.error('Error during data insertion:', error);
    
    if (error.code === 'ENOENT') {
      console.error('Make sure the file.json exists in the same directory as this script');
    }
    
  } finally {
    // Release the client back to the pool
    if (client) {
      client.release();
    }
  }
}

// Function to create table if it doesn't exist
async function createTableIfNotExists() {
  let client;
  
  try {
    client = await pool.connect();
    
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(50) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        gender VARCHAR(10),
        weight INTEGER,
        date_of_birth DATE,
        about TEXT,
        location TEXT,
        phone_no VARCHAR(15),
        whatsapp_no VARCHAR(15),
        joining_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    await client.query(createTableQuery);
    console.log('✓ Table "users" is ready');
    
  } catch (error) {
    console.error('Error creating table:', error);
    throw error;
    
  } finally {
    if (client) {
      client.release();
    }
  }
}

// Main execution function
async function main() {
  try {
    console.log('Starting data insertion process...\n');
    
    // Test database connection
    const testClient = await pool.connect();
    await testClient.query('SELECT NOW()');
    testClient.release();
    console.log('✓ Database connection successful');
    
    // Create table if it doesn't exist
    await createTableIfNotExists();
    
    // Insert data from JSON file
    await insertJsonDataToDatabase();
    
    console.log('\n✓ Data insertion process completed!');
    
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
    
  } finally {
    // Close the database pool
    await pool.end();
    console.log('Database connection closed.');
  }
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  insertJsonDataToDatabase,
  createTableIfNotExists
};
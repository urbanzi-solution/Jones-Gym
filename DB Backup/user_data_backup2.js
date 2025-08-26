// Bulk Insert Script

// prerequirest to make changes in the table

// npm install pg

// ALTER TABLE user_data ADD CONSTRAINT users_user_id_unique UNIQUE (user_id);
// \d user_data
// "users_user_id_unique" UNIQUE CONSTRAINT, btree (user_id)

const { Pool } = require('pg');
const fs = require('fs').promises;
const path = require('path');

// Database connection configuration
const pool = new Pool({
  connectionString: 'postgresql://gym_database_owner:npg_XPru61RaycEv@ep-dawn-bar-a84ey2yt-pooler.eastus2.azure.neon.tech/gym_database?sslmode=require&channel_binding=require',
  ssl: {
    rejectUnauthorized: false
  }
});

// Function to insert data from JSON file to database
async function insertJsonDataToDatabase(batchSize = 1000) {
  let client;
  
  try {
    // Read the JSON file
    const jsonFilePath = path.join(__dirname, 'user_data.json');
    const jsonData = await fs.readFile(jsonFilePath, 'utf8');
    const userData = JSON.parse(jsonData);

    console.log(`Found ${userData.length} records in JSON file`);

    // Deduplicate by user_id (keep the last occurrence)
    const uniqueData = Object.values(
      userData.reduce((acc, user) => {
        acc[user.user_id] = user;
        return acc;
      }, {})
    );

    console.log(`After deduplication: ${uniqueData.length} unique records to insert`);

    if (uniqueData.length === 0) {
      console.log("No valid data found in JSON file.");
      return;
    }

    // Get a client from the pool
    client = await pool.connect();
    await client.query('BEGIN');
    
    let successCount = 0;

    // Process in batches to avoid hitting PostgreSQL parameter limit
    for (let i = 0; i < uniqueData.length; i += batchSize) {
      const batch = uniqueData.slice(i, i + batchSize);

      const insertQuery = `
        INSERT INTO user_data (
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
        ) VALUES ${batch.map(
          (_, idx) => `(
            $${idx * 10 + 1}, 
            $${idx * 10 + 2}, 
            $${idx * 10 + 3}, 
            $${idx * 10 + 4}, 
            $${idx * 10 + 5}, 
            $${idx * 10 + 6}, 
            $${idx * 10 + 7}, 
            $${idx * 10 + 8}, 
            $${idx * 10 + 9}, 
            $${idx * 10 + 10}
          )`
        ).join(",")}
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

      const values = batch.flatMap(user => [
        user.user_id,
        user.name,
        user.gender,
        parseInt(user.weight),
        user.date_of_birth,
        user.about || '',
        user.location,
        user.phone_no,
        user.whatsapp_no,
        user.joining_date
      ]);

      await client.query(insertQuery, values);
      successCount += batch.length;
      console.log(`✓ Inserted batch ${i / batchSize + 1}: ${batch.length} records`);
    }

    await client.query('COMMIT');
    
    console.log('\n=== INSERTION SUMMARY ===');
    console.log(`Total records processed (after deduplication): ${uniqueData.length}`);
    console.log(`Successfully inserted/updated: ${successCount}`);
    
  } catch (error) {
    if (client) {
      await client.query('ROLLBACK');
    }
    console.error('Error during bulk data insertion:', error);
    
  } finally {
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
    console.log('✓ Table "users" is ready (with unique user_id)');
    
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
    
    // Insert data from JSON file (in batches of 1000)
    await insertJsonDataToDatabase(1000);
    
    console.log('\n✓ Data insertion process completed!');
    
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
    
  } finally {
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

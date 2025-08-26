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
async function insertJsonDataToDatabase() {
  let client;
  
  try {
    // Try different possible locations for the JSON file
    const possiblePaths = [
      path.join(__dirname, 'plans.json'),
      path.join(process.cwd(), 'plans.json'),
      './plans.json',
      'plans.json'
    ];
    
    let jsonFilePath;
    let jsonData;
    
    for (const filePath of possiblePaths) {
      try {
        await fs.access(filePath);
        jsonFilePath = filePath;
        jsonData = await fs.readFile(filePath, 'utf8');
        console.log(`✓ Found JSON file at: ${filePath}`);
        break;
      } catch (err) {
        continue;
      }
    }
    
    if (!jsonData) {
      throw new Error('plans.json file not found in any of the expected locations:\n' + 
                     possiblePaths.map(p => `  - ${p}`).join('\n'));
    }
    
    const planData = JSON.parse(jsonData);
    
    console.log(`Found ${planData.length} records to insert`);
    
    // Get a client from the pool
    client = await pool.connect();
    
    // Begin transaction
    await client.query('BEGIN');
    
    // SQL query to insert data into plans table
    const insertQuery = `
      INSERT INTO plans (
        plan_name, 
        description, 
        amount, 
        duration, 
        status
      ) VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (plan_name) DO UPDATE SET
        description = EXCLUDED.description,
        amount = EXCLUDED.amount,
        duration = EXCLUDED.duration,
        status = EXCLUDED.status
    `;
    
    let successCount = 0;
    let errorCount = 0;
    
    // Insert each record
    for (const plan of planData) {
      try {
        await client.query(insertQuery, [
          plan.plan_name,
          plan.description,
          parseInt(plan.amount), // Convert amount to integer
          plan.duration,
          plan.status
        ]);
        
        successCount++;
        console.log(`✓ Inserted plan: ${plan.plan_name}`);
        
      } catch (insertError) {
        errorCount++;
        console.error(`✗ Failed to insert plan ${plan.plan_name}:`, insertError.message);
      }
    }
    
    // Commit transaction
    await client.query('COMMIT');
    
    console.log('\n=== INSERTION SUMMARY ===');
    console.log(`Total records processed: ${planData.length}`);
    console.log(`Successfully inserted: ${successCount}`);
    console.log(`Failed insertions: ${errorCount}`);
    
  } catch (error) {
    // Rollback transaction on error
    if (client) {
      await client.query('ROLLBACK');
    }
    console.error('Error during data insertion:', error);
    
    if (error.code === 'ENOENT') {
      console.error('Make sure the plans.json exists in the same directory as this script');
    }
    
  } finally {
    // Release the client back to the pool
    if (client) {
      client.release();
    }
  }
}

// Function to check if table exists
async function checkTableExists(client, tableName) {
  const query = `
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = $1
    );
  `;
  
  const result = await client.query(query, [tableName]);
  return result.rows[0].exists;
}

// Function to check if primary key constraint exists
async function checkPrimaryKeyExists(client, tableName) {
  const query = `
    SELECT EXISTS (
      SELECT FROM information_schema.table_constraints 
      WHERE table_schema = 'public' 
      AND table_name = $1 
      AND constraint_type = 'PRIMARY KEY'
    );
  `;
  
  const result = await client.query(query, [tableName]);
  return result.rows[0].exists;
}

// Function to create table and constraints only if they don't exist
async function ensureTableAndConstraints() {
  let client;
  
  try {
    client = await pool.connect();
    
    const tableName = 'plans';
    const tableExists = await checkTableExists(client, tableName);
    
    if (!tableExists) {
      console.log('Table does not exist. Creating table...');
      
      const createTableQuery = `
        CREATE TABLE plans (
          plan_name VARCHAR(30),
          description VARCHAR(100),
          amount INTEGER,
          duration VARCHAR(3),
          status VARCHAR(8)
        )
      `;
      
      await client.query(createTableQuery);
      console.log('✓ Table "plans" created successfully');
    } else {
      console.log('✓ Table "plans" already exists');
    }
    
    // Check if primary key constraint exists
    const primaryKeyExists = await checkPrimaryKeyExists(client, tableName);
    
    if (!primaryKeyExists) {
      console.log('Primary key constraint does not exist. Adding constraint...');
      
      try {
        await client.query('ALTER TABLE plans ADD CONSTRAINT plans_pkey PRIMARY KEY (plan_name)');
        console.log('✓ Primary key constraint added successfully');
      } catch (error) {
        if (error.code === '23505') {
          console.log('! Duplicate values found in plan_name column. Cannot add primary key constraint.');
          console.log('! Please clean up duplicate data first.');
          throw error;
        } else {
          throw error;
        }
      }
    } else {
      console.log('✓ Primary key constraint already exists');
    }
    
    console.log('✓ Table and constraints are ready');
    
  } catch (error) {
    console.error('Error ensuring table and constraints:', error);
    throw error;
    
  } finally {
    if (client) {
      client.release();
    }
  }
}

// Alternative function to recreate table with proper constraints
async function recreateTableWithConstraints() {
  let client;
  
  try {
    client = await pool.connect();
    
    console.log('Recreating table with proper constraints...');
    
    // Drop table if exists
    await client.query('DROP TABLE IF EXISTS plans');
    console.log('✓ Dropped existing table');
    
    // Create table with primary key constraint
    const createTableQuery = `
      CREATE TABLE plans (
        plan_name VARCHAR(30) PRIMARY KEY,
        description VARCHAR(100),
        amount INTEGER,
        duration VARCHAR(3),
        status VARCHAR(8)
      )
    `;
    
    await client.query(createTableQuery);
    console.log('✓ Table "plans" recreated with PRIMARY KEY constraint');
    
  } catch (error) {
    console.error('Error recreating table:', error);
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
    console.log('Starting plans data insertion process...\n');
    
    // Test database connection
    const testClient = await pool.connect();
    await testClient.query('SELECT NOW()');
    testClient.release();
    console.log('✓ Database connection successful');
    
    // Ensure table and constraints exist
    await ensureTableAndConstraints();
    
    // Insert data from JSON file
    await insertJsonDataToDatabase();
    
    console.log('\n✓ Plans data insertion process completed!');
    
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
  ensureTableAndConstraints,
  checkTableExists,
  checkPrimaryKeyExists
};
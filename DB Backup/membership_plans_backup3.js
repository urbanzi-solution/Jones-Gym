// Bulk Insert Script

// npm install pg

// Autamed these Functions and also create table if not exist

// ALTER TABLE membership_plans ADD CONSTRAINT users_user_id_unique UNIQUE (user_id);
// \d membership_plans
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
    const jsonFilePath = path.join(__dirname, 'membership_plans.json');
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
        INSERT INTO membership_plans (
          user_id, 
          plan_name, 
          bill_no, 
          amount, 
          discount, 
          balance, 
          trans_type, 
          trainer, 
          date, 
          exp_date
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
          plan_name = EXCLUDED.plan_name,
          bill_no = EXCLUDED.bill_no,
          amount = EXCLUDED.amount,
          discount = EXCLUDED.discount,
          balance = EXCLUDED.balance,
          trans_type = EXCLUDED.trans_type,
          trainer = EXCLUDED.trainer,
          date = EXCLUDED.date,
          exp_date = EXCLUDED.exp_date
      `;

      const values = batch.flatMap(user => [
        user.user_id,
        user.plan_name,
        user.bill_no,
        user.amount,
        user.discount,
        user.balance,
        user.trans_type,
        user.trainer,
        user.date,
        user.exp_date
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
    
    // Check if table exists
    const tableCheckQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'membership_plans'
      );
    `;
    
    const tableExists = await client.query(tableCheckQuery);
    
    if (!tableExists.rows[0].exists) {
      console.log('Table "membership_plans" does not exist. Creating...');
      
      // Create table with your specified query
      const createTableQuery = `
        CREATE TABLE membership_plans (
          user_id VARCHAR(10),
          plan_name VARCHAR(30),
          bill_no VARCHAR(6),
          amount INTEGER,
          discount INTEGER,
          balance INTEGER,
          trans_type VARCHAR(15),
          trainer VARCHAR(30),
          date DATE,
          exp_date DATE
        );
      `;
      
      await client.query(createTableQuery);
      console.log('✓ Table "membership_plans" created successfully');
      
      // Add unique constraint
      const addConstraintQuery = `
        ALTER TABLE membership_plans ADD CONSTRAINT membership_user_id_unique UNIQUE (user_id);
      `;
      
      await client.query(addConstraintQuery);
      console.log('✓ Unique constraint added to user_id column');
      
    } else {
      console.log('✓ Table "membership_plans" already exists');
      
      // Check if unique constraint exists
      const constraintCheckQuery = `
        SELECT EXISTS (
          SELECT FROM information_schema.table_constraints 
          WHERE table_name = 'membership_plans' 
          AND constraint_name = 'membership_user_id_unique'
        );
      `;
      
      const constraintExists = await client.query(constraintCheckQuery);
      
      if (!constraintExists.rows[0].exists) {
        console.log('Adding unique constraint to existing table...');
        const addConstraintQuery = `
          ALTER TABLE membership_plans ADD CONSTRAINT membership_user_id_unique UNIQUE (user_id);
        `;
        
        await client.query(addConstraintQuery);
        console.log('✓ Unique constraint added to user_id column');
      } else {
        console.log('✓ Unique constraint already exists on user_id column');
      }
    }
    
  } catch (error) {
    console.error('Error creating table or adding constraint:', error);
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
    
    // Create table if it doesn't exist and add unique constraint
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
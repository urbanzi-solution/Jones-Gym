// /src/lib/db.js
import { Pool } from 'pg'

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Required for Neon's SSL connection
  },
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000 // Return an error after 2 seconds if no connection
})

// Generic query function
export async function query(text, params) {
  const client = await pool.connect()
  try {
    const result = await client.query(text, params)
    return result
  } finally {
    client.release()
  }
}

// For server components
export async function getClient() {
  const client = await pool.connect()
  return client
}
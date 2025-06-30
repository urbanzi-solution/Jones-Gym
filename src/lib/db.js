import { neon } from '@neondatabase/serverless';

// Create a Neon serverless client
const sql = neon(process.env.NEON_DATABASE_URL, {
  // Optional: Configure fetch options for the Neon driver
  fetchOptions: {
    cache: 'no-store', // Prevent caching for serverless environments
  },
});

// Generic query function
export async function query(text, params = []) {
  try {
    const result = await sql.query(text, params);
    // Return result in a pg-compatible format
    return { rows: result };
  } catch (err) {
    console.error('Database query error:', err.message);
    throw err;
  }
}

// For server components (mimics pg client behavior)
export async function getClient() {
  // Neon driver doesn't use traditional connections, so return a client-like object
  return {
    query: async (text, params = []) => {
      try {
        const result = await sql.query(text, params);
        return { rows: result };
      } catch (err) {
        console.error('Database query error:', err.message);
        throw err;
      }
    },
    release: () => {
      // No-op since Neon driver doesn't use connection pooling
    },
  };
}
// src\app\api\delete_user\route.js

import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { user_id } = await request.json();

    console.log("✅ Received data from client:", { user_id });

    // Validate input data
    if (!user_id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const client = await getClient();
    
    try {
      // Start a transaction to ensure all operations succeed or fail together
      await client.query('BEGIN');

      // First, check if the user exists
      const checkUserQuery = `SELECT user_id FROM user_data WHERE user_id = $1`;
      const checkUserResult = await client.query(checkUserQuery, [user_id]);
      
      if (checkUserResult.rowCount === 0) {
        await client.query('ROLLBACK');
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      // Delete from transactions table
      const deleteUserDataQuery = `
        DELETE FROM user_data WHERE user_id = $1
      `;

      const deleteResult = await client.query(deleteUserDataQuery, [user_id]);
      
      if (deleteResult.rowCount === 0) {
        await client.query('ROLLBACK');
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 404 });
      }

      // Commit the transaction
      await client.query('COMMIT');
      
      return NextResponse.json({
        message: 'User deleted successfully',
        deletedUser: deleteResult.rows[0]
      }, { status: 200 });
      
    } catch (queryError) {
      // Rollback the transaction on error
      await client.query('ROLLBACK');
      console.error('Database query error:', queryError);
      throw queryError;
    } finally {
      // Connection will be returned to pool automatically
      // await client.end(); // Don't close the client if using connection pooling
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error.message 
    }, { status: 500 });
  }
}
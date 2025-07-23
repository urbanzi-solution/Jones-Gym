import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request) {
  let client;
  
  try {
    // Parse the request body
    const { username, password } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Get database client
    client = await getClient();

    // Query user from database
    const query = 'SELECT username, password FROM user_cred WHERE username = $1';
    const result = await client.query(query, [username]);

    // Check if user exists
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Username or password incorrect' },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // Compare password with hash using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Username or password incorrect' },
        { status: 401 }
      );
    }

    // Login successful
    return NextResponse.json(
      { 
        success: true, 
        message: 'Login successful',
        username: user.username 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    // Release the client back to the pool
    if (client) {
      client.release();
    }
  }
}

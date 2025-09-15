// src\app\api\login\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request) {
  let client;
  
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    client = await getClient();

    // Modified query to include role/user type
    const query = 'SELECT username, password FROM user_cred WHERE username = $1';
    const result = await client.query(query, [username]);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Username or password incorrect' },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Username or password incorrect' },
        { status: 401 }
      );
    }

    // Return user data with role information
    return NextResponse.json(
      { 
        success: true, 
        message: 'Login successful',
        username: user.username,
        // Since you're determining role by username, we'll set it here
        role: username === 'Manager2' ? 'restricted_manager' : 'manager'
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
    if (client) {
      client.release();
    }
  }
}

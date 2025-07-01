// src\app\api\add_Remark\route.js
import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { user_id, description } = await request.json();

    if (!user_id || !description) {
      return NextResponse.json(
        { error: 'Missing user_id or description' },
        { status: 400 }
      );
    }

    await query(
      'INSERT INTO user_Remark (user_id, remark) VALUES ($1, $2)',
      [user_id, description]
    );

    return NextResponse.json(
      { message: 'Blacklist entry added successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding to blacklist:', {
      message: error.message,
      query: 'INSERT INTO Blacklist (user_id, remark) VALUES ($1, $2)',
      params: [user_id, description],
    });
    return NextResponse.json(
      { error: 'Failed to add blacklist entry' },
      { status: 500 }
    );
  }
}
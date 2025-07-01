// src/app/api/edit_user_data/route.js
import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { 
      user_id,
      name,
      gender,
      date_of_birth,
      location,
      phone_no,
      whatsapp_no,
      joining_date
    } = await request.json();

    if (!user_id) {
      return NextResponse.json(
        { error: 'user_id is required' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await query(
      'SELECT * FROM user_data WHERE user_id = $1',
      [user_id]
    );

    if (existingUser.rows.length === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Update existing user
    await query(
      `UPDATE user_data SET
        name = $1,
        gender = $2,
        date_of_birth = $3,
        location = $4,
        phone_no = $5,
        whatsapp_no = $6,
        joining_date = $7
      WHERE user_id = $8`,
      [
        name,
        gender,
        date_of_birth,
        location,
        phone_no,
        whatsapp_no,
        joining_date,
        user_id
      ]
    );

    return NextResponse.json(
      { message: 'User data updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating user data:', error);
    return NextResponse.json(
      { error: 'Failed to update user data' },
      { status: 500 }
    );
  }
}
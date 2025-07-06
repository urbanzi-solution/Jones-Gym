// src\app\api\add_attendance\route.js
import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { records } = await request.json();

    // Validate request body
    if (!Array.isArray(records) || records.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid or empty records array' },
        { status: 400 }
      );
    }

    // Validate each record
    for (const record of records) {
      const { trainer_id, user_id, date, status } = record;

      if (!trainer_id || !user_id || !date || !status) {
        return NextResponse.json(
          { success: false, error: 'Missing required fields in one or more records' },
          { status: 400 }
        );
      }

      // Validate status
      if (!['P', 'A'].includes(status)) {
        return NextResponse.json(
          { success: false, error: `Invalid status value: ${status}. Must be 'P' or 'A'` },
          { status: 400 }
        );
      }

      // Validate date format (YYYY-MM-DD)
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(date)) {
        return NextResponse.json(
          { success: false, error: `Invalid date format: ${date}. Must be YYYY-MM-DD` },
          { status: 400 }
        );
      }
    }

    // Perform batch insertion
    const values = records.flatMap(({ trainer_id, user_id, date, status }) => [
      trainer_id,
      user_id,
      date,
      status,
    ]);
    const placeholders = records
      .map((_, index) => `($${index * 4 + 1}, $${index * 4 + 2}, $${index * 4 + 3}, $${index * 4 + 4})`)
      .join(', ');

    await query(
      `TRUNCATE TABLE trainer_attendance`
    );

    await query(
      `INSERT INTO trainer_attendance (trainer_id, user_id, date, status) VALUES ${placeholders}`,
      values
    );

    return NextResponse.json(
      { success: true, message: 'Attendance records added successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding attendance records:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { success: false, error: 'Failed to add attendance records' },
      { status: 500 }
    );
  }
}
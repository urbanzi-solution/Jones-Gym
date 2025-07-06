// src\app\api\fetch_attendance\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await getClient();
    const { rows } = await client.query('SELECT * FROM trainer_attendance ORDER BY user_id');

    const attendance = rows.map((row, index) => ({
      trainer_id: row.trainer_id,
      user_id: row.user_id,
      date: row.date,
      status: row.status,
    }));

    // console.log('Fetched attendance data:', attendance);
    return NextResponse.json({ success: true, data: attendance });
  } catch (error) {
    console.error('Error fetching attendance data:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch attendance data' }, { status: 500 });
  }
}
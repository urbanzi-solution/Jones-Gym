// src\app\api\fetch_staff_attendance\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const trainer_id = searchParams.get('trainer_id');
    const year = searchParams.get('year');
    const month = searchParams.get('month');

    if (!trainer_id) {
      return NextResponse.json({ error: 'trainer_id is required' }, { status: 400 });
    }

    const client = await getClient();
    
    let query = 'SELECT * FROM staff_attendance WHERE trainer_id = $1';
    let params = [trainer_id];

    // Add date filtering if year and month are provided
    if (year && month) {
      const paddedMonth = month.toString().padStart(2, '0');
      const startDate = `${year}-${paddedMonth}-01`;
      // Calculate last day of the month
      const lastDay = new Date(year, month, 0).getDate();
      const endDate = `${year}-${paddedMonth}-${lastDay}`;
      query += ' AND date >= $2 AND date <= $3';
      params.push(startDate, endDate);
    }

    query += ' ORDER BY date ASC';

    const { rows } = await client.query(query, params);

    const attendanceRecords = rows.map((row, index) => ({
      id: index + 1,
      trainer_id: row.trainer_id,
      date: row.date,
      day: new Date(row.date).getDate(),
      month: new Date(row.date).getMonth() + 1,
      year: new Date(row.date).getFullYear(),
      mrng_from: row.mrng_from,
      mrng_to: row.mrng_to,
      mrng_status: row.mrng_status,
      evng_from: row.evng_from,
      evng_to: row.evng_to,
      evng_status: row.evng_status,
      formatted_date: new Date(row.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }));

    return NextResponse.json({
      success: true,
      data: attendanceRecords,
      total_records: attendanceRecords.length,
      trainer_id: trainer_id
    });

  } catch (error) {
    console.error('Error fetching staff attendance:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Internal Server Error' 
    }, { status: 500 });
  }
}
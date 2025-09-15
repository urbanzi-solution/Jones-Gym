import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { records } = await request.json();

    if (!records || !Array.isArray(records) || records.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No records provided' },
        { status: 400 }
      );
    }

    // Process each record with upsert (INSERT ... ON CONFLICT)
    for (const record of records) {
      const {
        trainer_id,
        date,
        mrng_from = null,
        mrng_to = null,
        mrng_status = null,
        evng_from = null,
        evng_to = null,
        evng_status = null
      } = record;

      if (!trainer_id || !date) {
        return NextResponse.json(
          { success: false, error: 'Missing required fields: trainer_id and date' },
          { status: 400 }
        );
      }

      // Use UPSERT (INSERT ... ON CONFLICT ... DO UPDATE)
      await query(`
        INSERT INTO staff_attendance (
          trainer_id, date, mrng_from, mrng_to, mrng_status, 
          evng_from, evng_to, evng_status
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (trainer_id, date) 
        DO UPDATE SET 
          mrng_from = EXCLUDED.mrng_from,
          mrng_to = EXCLUDED.mrng_to,
          mrng_status = EXCLUDED.mrng_status,
          evng_from = EXCLUDED.evng_from,
          evng_to = EXCLUDED.evng_to,
          evng_status = EXCLUDED.evng_status
      `, [
        trainer_id, date, mrng_from, mrng_to, mrng_status,
        evng_from, evng_to, evng_status
      ]);
    }

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${records.length} attendance records`
    });

  } catch (error) {
    console.error('Error saving staff attendance:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to save attendance data' 
      },
      { status: 500 }
    );
  }
}

// GET method to retrieve existing attendance data
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const trainer_id = searchParams.get('trainer_id');
    const year = searchParams.get('year');
    const month = searchParams.get('month');

    if (!trainer_id || !year || !month) {
      return NextResponse.json(
        { success: false, error: 'Missing required parameters: trainer_id, year, month' },
        { status: 400 }
      );
    }

    const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
    const endDate = `${year}-${month.toString().padStart(2, '0')}-31`;

    const result = await query(`
      SELECT * FROM staff_attendance 
      WHERE trainer_id = $1 
      AND date >= $2 
      AND date <= $3
      ORDER BY date ASC
    `, [trainer_id, startDate, endDate]);

    return NextResponse.json(result.rows);

  } catch (error) {
    console.error('Error fetching staff attendance:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to fetch attendance data' 
      },
      { status: 500 }
    );
  }
}
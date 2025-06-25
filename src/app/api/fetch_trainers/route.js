// src\app\api\fetch_plans\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await getClient();
    const { rows } = await client.query('SELECT trainer_id, name FROM trainers');
    await client.end();
    
    // Map database fields to match frontend expectations
    const trainers = rows.map((row, index) => ({
      trainer_id: row.trainer_id,
      name: row.name,
    }));

    // console.log(trainers);

    return NextResponse.json(trainers);
  } catch (error) {
    console.error('Error fetching trainers:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
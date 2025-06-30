// src\app\api\fetch_trainers_plans\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await getClient();
    const { rows } = await client.query('SELECT * FROM trainers_plans');
    // await client.end();
    
    // Map database fields to match frontend expectations
    const plans = rows.map((row, index) => ({
      trainer: row.trainer_id,
      plan: row.plan_name,
    }));

    // console.log(plans);

    return NextResponse.json(plans);
  } catch (error) {
    console.error('Error fetching plans:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
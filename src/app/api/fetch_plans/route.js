// src\app\api\fetch_plans\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await getClient();
    const { rows } = await client.query('SELECT * FROM plans');

    const plans = rows.map((row, index) => ({
      id: index + 1,
      name: row.plan_name,
      description: row.description,
      amount: row.amount,
      duration: parseInt(row.duration),
      status: row.status
    }));

    return NextResponse.json(plans);
  } catch (error) {
    console.error('Error fetching plans:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
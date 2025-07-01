// src\app\api\fetch_membership_plans\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await getClient();
    const { rows } = await client.query('SELECT * FROM membership_plans');
    // await client.end();
    
    // Map database fields to match frontend expectations
    const membership_plans = rows.map((row, index) => ({
      user_id: row.user_id,
      plan_name: row.plan_name,
      amount: row.amount,
      discount: row.discount,
      balance: row.balance,
      trans_type: row.trans_type,
      trainer: row.trainer,
      date: row.date,
      exp_date: row.exp_date,
    }));

    return NextResponse.json(membership_plans);
  } catch (error) {
    console.error('Error fetching plans:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
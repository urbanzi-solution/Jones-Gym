// src\app\api\fetch_membership_plans\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await getClient();
    const { rows } = await client.query(`
      SELECT m.user_id, u.name, m.bill_no, m.date, m.plan_name, m.trans_type, m.trainer, m.amount, m.discount, m.balance, m.exp_date
      FROM membership_plans m
      JOIN user_data u ON m.user_id = u.user_id
      ORDER BY m.date DESC;
      `);
    
    // Map database fields to match frontend expectations
    const membership_plans = rows.map((row, index) => ({
      user_id: row.user_id,
      name:row.name,
      plan_name: row.plan_name,
      bill_no: row.bill_no,
      amount: row.amount,
      discount: row.discount,
      balance: row.balance,
      trans_type: row.trans_type,
      trainer: row.trainer,
      date: row.date,
      exp_date: row.exp_date,
    }));
    
    // console.log(membership_plans);
    
    // Return consistent response structure
    return NextResponse.json({
      success: true,
      data: membership_plans
    });
  } catch (error) {
    console.error('Error fetching plans:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Internal Server Error' 
    }, { status: 500 });
  }
}
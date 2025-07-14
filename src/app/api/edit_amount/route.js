import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { user_id, selectedPlan, bill_no, totalAmountReceived, discount, balance, trainer } = await request.json();

    // Validate input data
    if (!user_id || !selectedPlan || !bill_no || totalAmountReceived == null || discount == null || balance == null || trainer == null) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const client = await getClient();
    
    try {
      // Update existing record in user_balances table
      const queryText = `
        UPDATE membership_plans 
        SET 
          amount = $1,
          discount = $2,
          balance = $3,
          trainer = $7
        WHERE user_id = $4 AND plan_name = $5 AND bill_no = $6
        RETURNING *;
      `;
      
      const values = [totalAmountReceived, discount, balance, user_id, selectedPlan, bill_no, trainer];
      
      const result = await client.query(queryText, values);
      
      if (result.rowCount === 0) {
        return NextResponse.json({ error: 'No matching record found to update' }, { status: 404 });
      }
      
      return NextResponse.json({
        message: 'Balance updated successfully',
        data: result.rows[0]
      }, { status: 200 });
      
    } finally {
    //   await client.end();
    }
  } catch (error) {
    console.error('Error updating balance:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
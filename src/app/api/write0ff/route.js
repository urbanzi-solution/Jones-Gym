// src\app\api\write0ff\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { 
      user_id,
      selectedPlan,
      username
    } = await request.json();

    console.log("✅ Received data from client:", {
      user_id,
      selectedPlan,
      username
    });

    // Validate input data
    if (!user_id || !selectedPlan) {
      return NextResponse.json({ error: 'Missing required fields: user_id and selectedPlan' }, { status: 400 });
    }

    const client = await getClient();
    
    try {
      // Start a transaction to ensure both operations succeed or fail together
      await client.query('BEGIN');

      const insertQueryText = `
        INSERT INTO transactions (user_id, bill_no, plan_name, amount, balance, date)
        VALUES ($1, null, $2, 0, 0, CURRENT_DATE)
        RETURNING *;
      `;
      
      const insertValues = [
        user_id,
        selectedPlan
      ];
      
      const insertResult = await client.query(insertQueryText, insertValues);
      
      // Commit the transaction
      await client.query('COMMIT');
      
      return NextResponse.json({
        message: 'Bill is Just Write off, Now the balance is 0RS',
        transactionData: insertResult.rows[0]
      }, { status: 200 });
      
    } catch (queryError) {
      // Rollback the transaction on error
      await client.query('ROLLBACK');
      throw queryError;
    } finally {
      // await client.end();
    }
  } catch (error) {
    console.error('Error updating balance and recording transaction:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
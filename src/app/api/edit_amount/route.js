import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { 
      user_id, 
      selectedPlan, 
      bill_no, 
      new_bill_no,
      totalAmountReceived,
      newAmountReceived,
      discount, 
      balance, 
      trainer,
      transaction_type 
    } = await request.json();

    console.log("✅ Received data from client:", {
      user_id,
      selectedPlan,
      bill_no,
      new_bill_no,
      totalAmountReceived,
      newAmountReceived,
      discount,
      balance,
      trainer,
      transaction_type
    });

    // Validate input data
    if (!user_id || !selectedPlan || !bill_no || !new_bill_no || totalAmountReceived == null || newAmountReceived == null || discount == null || balance == null || trainer == null) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const client = await getClient();
    
    try {
      // Start a transaction to ensure both operations succeed or fail together
      await client.query('BEGIN');

      // Update existing record in membership_plans table
      const updateQueryText = `
        UPDATE membership_plans 
        SET 
          discount = $1,
          trainer = $5
        WHERE user_id = $2 AND plan_name = $3 AND bill_no = $4
        RETURNING *;
      `;
      
      const updateValues = [ discount, user_id, selectedPlan, bill_no, trainer];
      
      const updateResult = await client.query(updateQueryText, updateValues);
      
      if (updateResult.rowCount === 0) {
        await client.query('ROLLBACK');
        return NextResponse.json({ error: 'No matching record found to update' }, { status: 404 });
      }

      const insertQueryText = `
        INSERT INTO transactions (user_id, old_bill, bill_no, plan_name, amount, balance, date, trans_type)
        VALUES ($1, $2, $3, $4, $5, $6, CURRENT_DATE, $7)
        RETURNING *;
      `;
      
      const insertValues = [
        user_id,           // $1 - user_id (SJ30)
        bill_no,           // $2 - old_bill_no (4d4d4)
        new_bill_no,       // $3 - bill_no (4d4d4)
        selectedPlan,      // $4 - plan_name (1 M P.T)
        newAmountReceived, // $5 - amount (50)
        balance,           // $6 - balance (5950)
        transaction_type   // $7 - transaction_type
      ];
      
      const insertResult = await client.query(insertQueryText, insertValues);
      
      // Commit the transaction
      await client.query('COMMIT');
      
      return NextResponse.json({
        message: 'Balance updated and transaction recorded successfully',
        membershipData: updateResult.rows[0],
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
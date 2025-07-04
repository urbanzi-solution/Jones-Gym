import { getClient } from '@/lib/db';

export async function POST(request) {
  let client;
  try {
    const transactionData = await request.json();
    
    // console.log(transactionData);
    
    // Validate required fields
    if (!transactionData.bill_no || typeof transactionData.bill_no !== 'string') {
      return Response.json(
        { success: false, message: 'Valid bill number is required' },
        { status: 400 }
      );
    }

    client = await getClient();
    
    // Check if transaction exists
    const checkQuery = 'SELECT 1 FROM membership_plans WHERE bill_no = $1 LIMIT 1';
    const checkResult = await client.query(checkQuery, [transactionData.bill_no]);
    
    if (checkResult.rowCount === 0) {
      return Response.json(
        { success: false, message: 'Transaction not found' },
        { status: 404 }
      );
    }

    // Update transaction
    const updateQuery = `
      UPDATE membership_plans SET
        user_id = $1,
        plan_name = $2,
        amount = $3,
        discount = $4,
        balance = $5,
        trans_type = $6,
        date = $7
      WHERE bill_no = $8
      RETURNING *
    `;
    
    const values = [
      transactionData.user_id,
      transactionData.plan_name,
      transactionData.amount,
      transactionData.discount,
      transactionData.balance,
      transactionData.trans_type,
      transactionData.date,
      transactionData.bill_no,
    ];

    const result = await client.query(updateQuery, values);

    return Response.json({
      success: true,
      message: 'Transaction updated successfully',
      transaction: result.rows[0]
    });

  } catch (error) {
    console.error('Error updating transaction:', error);
    return Response.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.release();
    }
  }
}
import { getClient } from '@/lib/db';

export async function POST(request) {
  try {
    const client = await getClient();
    const data = await request.json();
    const { user_id, plan_name, bill_no, amount, discount, balance, trans_type, trainer_id, date, exp_date } = data;

    console.log('Received data:', data);

    // Validate required fields
    if (!user_id || !plan_name || !amount) {
      return new Response(JSON.stringify({ error: 'User ID, plan name, and amount are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Parse numeric fields to integers
    const parsedAmount = parseInt(amount, 10);
    const parsedDiscount = parseInt(discount, 10) || 0;
    const parsedBalance = parseInt(balance, 10);

    // Validate parsed values
    if (isNaN(parsedAmount) || isNaN(parsedBalance)) {
      return new Response(JSON.stringify({ error: 'Amount and balance must be valid numbers' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert data into the database
    const queryText = `
      INSERT INTO membership_plans (user_id, plan_name, bill_no, amount, discount, balance, trans_type, trainer, date, exp_date)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING user_id
    `;
    const values = [
      user_id,
      plan_name,
      bill_no || null,
      parsedAmount,
      parsedDiscount,
      parsedBalance,
      trans_type || null,
      trainer_id || null,
      date || null,
      exp_date || null
    ];

    const result = await client.query(queryText, values);

    return new Response(JSON.stringify({ message: 'Renewal saved successfully', user_id: result.rows[0].user_id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving renewal:', error);
    return new Response(JSON.stringify({ error: 'Failed to save renewal', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
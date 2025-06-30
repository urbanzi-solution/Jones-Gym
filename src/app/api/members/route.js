import { getClient } from '@/lib/db'
import { NextResponse } from 'next/server';

export async function POST(request) {
  let client;
  try {
    const data = await request.json();
    const {
      gym_id,
      full_name,
      gender,
      dob,
      location,
      phone,
      whatsapp,
      join_date,
      membership_plans = [],
    } = data;

    console.log("🚀 Received data from frontend:", data);

    // Get database client
    client = await getClient();

    // Begin transaction
    await client.query('BEGIN');

    // Insert into user_data
    const query = `
      INSERT INTO user_data (
        user_id,
        name,
        gender,
        date_of_birth,
        location,
        phone_no,
        whatsapp_no,
        joining_date
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `;
    
    const values = [
      gym_id,
      full_name,
      gender,
      dob,
      location,
      phone,
      whatsapp,
      join_date,
    ];

    const result = await client.query(query, values);

    // Insert membership plans if any
    if (membership_plans.length > 0) {
      const planInsertQuery = `
        INSERT INTO membership_plans (
          user_id, plan_name, amount, discount, balance, trans_type, trainer, date
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `;

      for (const plan of membership_plans) {
        const { plan: planName, amount, discount, balance, transaction_type, trainer, days } = plan;
        await client.query(planInsertQuery, [
          gym_id,
          planName,
          parseInt(amount),
          parseInt(discount),
          parseInt(balance),
          transaction_type,
          trainer,
          days ? parseInt(days) : null,
        ]);
      }
    }

    // Commit transaction
    await client.query('COMMIT');

    return new Response(JSON.stringify({
      message: 'Member added successfully',
      data: result.rows[0],
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    if (client) {
      await client.query('ROLLBACK');
    }
    console.error('Error adding member:', error);
    return new Response(JSON.stringify({
      error: 'Failed to add member',
      details: error.message,
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    if (client) {
      await client.release();
    }
  }
}

export async function GET(request) {
  const client = await getClient();
  try {
    // Fetch plan names from plans table
    const plansQuery = 'SELECT plan_name FROM plans WHERE status = $1';
    const plansResult = await client.query(plansQuery, ['active']);
    const plans = plansResult.rows.map(row => row.plan_name);

    // console.log(plans);

    // Fetch trainer id and name from trainers table
    const trainersQuery = 'SELECT trainer_id, name FROM trainers';
    const trainersResult = await client.query(trainersQuery);
    const trainers = trainersResult.rows.map(row => ({
      trainer_id: row.trainer_id,
      name: row.name
    }));

    return NextResponse.json({
      plans,
      trainers
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  } finally {
    // await client.end();
  }
}
import { getClient } from '@/lib/db';

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
    console.log("📦 Membership Plans:", data.membership_plans);

    // Validate required fields
    if (!gym_id || !full_name || !gender || !dob || !location || !phone || !whatsapp || !join_date) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate membership plans
    for (const plan of membership_plans) {
      if (!plan.plan || !plan.amount || !plan.discount || !plan.trainer) {
        return new Response(JSON.stringify({ error: 'All membership plan fields are required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      if (isNaN(parseInt(plan.amount)) || isNaN(parseInt(plan.discount)) || isNaN(parseInt(plan.balance))) {
        return new Response(JSON.stringify({ error: 'Amount, discount, and balance must be valid numbers' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

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

    // Map trainer names to trainer IDs (replace with database query in production)
    const trainerMap = {
      'john': 1,
      'jane': 2,
      'mike': 3,
      'sarah': 4,
    };

    // Insert membership plans if any
    if (membership_plans.length > 0) {
      const planInsertQuery = `
        INSERT INTO membership_plans (
          user_id, plan_name, amount, discount, balance, trainer, date
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;

      for (const plan of membership_plans) {
        const { plan: planName, trainer, amount, discount, balance, days } = plan;
        const trainerId = trainerMap[trainer.toLowerCase()];
        if (!trainerId) {
          throw new Error(`Invalid trainer: ${trainer}`);
        }
        await client.query(planInsertQuery, [
          gym_id,
          planName,
          parseInt(amount),
          parseInt(discount),
          parseInt(balance),
          trainerId, // Use integer trainer ID
          days ? parseInt(days) : null, // Handle days as integer or null
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
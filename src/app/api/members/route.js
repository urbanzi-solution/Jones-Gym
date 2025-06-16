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
      join_date
    } = data;

    // Validate required fields
    if (!gym_id || !full_name || !gender || !dob || !location || !phone || !whatsapp || !join_date) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get database client
    client = await getClient();

    // Insert into database
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
      join_date
    ];

    const result = await client.query(query, values);

    return new Response(JSON.stringify({ 
      message: 'Member added successfully',
      data: result.rows[0]
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error adding member:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to add member',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    // Release the client back to the pool if needed
    if (client) {
      await client.release();
    }
  }
}
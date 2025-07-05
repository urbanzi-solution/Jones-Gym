// src\app\api\add_staff\route.js
import { getClient } from '@/lib/db';

export async function POST(request) {
  let client;
  try {
    // Parse JSON data from the request body
    const data = await request.json();
    
    const gymID = data.gymID;
    const fullName = data.fullName;
    const gender = data.gender;
    const dob = data.dob || null;
    const location = data.location;
    const phone = data.phone;
    const whatsapp = data.whatsapp || null;
    const joiningdate = data.joiningdate || null;

    console.log("Staff data received:", data);

    // Validate required fields
    if (!gymID || !fullName || !gender || !location || !phone) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Missing required fields: gymID, fullName, gender, location, and phone are required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get database client
    client = await getClient();

    // Check if trainer_id already exists
    const checkQuery = `SELECT trainer_id FROM trainers WHERE trainer_id = $1`;
    const checkResult = await client.query(checkQuery, [gymID]);
    
    if (checkResult.rows.length > 0) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Trainer with this Gym ID already exists' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert staff data into database
    const query = `
      INSERT INTO trainers (
        trainer_id, name, gender, date_of_birth, location, 
        phone_no, whatsapp_number, joining_date
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING trainer_id
    `;
    
    const values = [
      gymID,
      fullName,
      gender,
      dob,
      location,
      phone,
      whatsapp,
      joiningdate,
    ];

    const result = await client.query(query, values);

    console.log("Staff member added successfully with ID:", result.rows[0].trainer_id);

    return new Response(JSON.stringify({ 
      success: true, 
      trainer_id: result.rows[0].trainer_id,
      message: 'Staff member added successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Error adding staff:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Failed to add staff member',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
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
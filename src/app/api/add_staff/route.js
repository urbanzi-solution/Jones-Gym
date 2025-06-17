import { getClient } from '@/lib/db';

export async function POST(request) {
  let client;
  try {
    const formData = await request.formData();
    
    const gymID = formData.get('gymID');
    const fullName = formData.get('fullName');
    const gender = formData.get('gender');
    const dob = formData.get('dob') || null;
    const location = formData.get('location');
    const phone = formData.get('phone');
    const whatsapp = formData.get('whatsapp') || null;
    const joiningdate = formData.get('joiningdate') || null;
    // const profilePicture = formData.get('profilePicture');

    console.log("data from thr backend = "+formData);

    // Validate required fields
    if (!gymID || !fullName || !gender || !location || !phone) {
      return new Response(JSON.stringify({ success: false, message: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get database client
    client = await getClient();

    // Insert into database
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

    return new Response(JSON.stringify({ 
      success: true, 
      trainer_id: result.rows[0].trainer_id 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding staff:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Failed to add staff member' 
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
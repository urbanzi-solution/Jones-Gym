// src\app\api\edit_plan\route.js
import { getClient } from '@/lib/db';

export async function POST(request) {
  let client;
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.user_id || !data.bill_no || !data.trainer_id || !data.trainer_name) {
      return Response.json(
        { success: false, message: 'Missing required fields: user_id, bill_no, trainer_id, trainer_name' },
        { status: 400 }
      );
    }

    client = await getClient();

    // Update trainer for the given user and bill
    const updateQuery = `
      UPDATE membership_plans
      SET trainer = $1
      WHERE user_id = $2 AND bill_no = $3
      RETURNING *
    `;
    const values = [
      data.trainer_id,    // $1
      data.user_id,       // $3
      data.bill_no,       // $4
    ];

    const result = await client.query(updateQuery, values);

    if (result.rowCount === 0) {
      return Response.json(
        { success: false, message: 'No matching transaction found to update trainer' },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: 'Trainer updated successfully',
      transaction: result.rows[0],
    });

  } catch (error) {
    console.error('Error updating trainer:', error);
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
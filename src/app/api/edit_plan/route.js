// src\app\api\edit_plan\route.js
import { getClient } from '@/lib/db';

export async function POST(request) {
  let client;
  try {
    const planData = await request.json();

    // Validate required fields
    if (!planData.name || !planData.amount || !planData.duration || !('description' in planData) || !planData.status) {
      return Response.json(
        { success: false, message: 'Missing required fields: name, amount, duration, description, or status' },
        { status: 400 }
      );
    }

    // Validate status value
    if (!['active', 'inactive'].includes(planData.status)) {
      return Response.json(
        { success: false, message: 'Invalid status: must be "active" or "inactive"' },
        { status: 400 }
      );
    }

    client = await getClient();

    // Check if plan exists
    const checkQuery = 'SELECT 1 FROM plans WHERE plan_name = $1';
    const checkResult = await client.query(checkQuery, [planData.name]);

    if (checkResult.rowCount === 0) {
      return Response.json(
        { success: false, message: 'Plan not found' },
        { status: 404 }
      );
    }

    // Update plan
    const updateQuery = `
      UPDATE plans SET
        description = $1::VARCHAR,
        amount = $2,
        duration = $3,
        status = $4
      WHERE plan_name = $5
      RETURNING *
    `;

    const values = [
      planData.description !== undefined ? planData.description : null, // $1
      planData.amount,                                                 // $2
      planData.duration,                                               // $3
      planData.status,                                                 // $4
      planData.name,                                                   // $5
    ];

    const result = await client.query(updateQuery, values);

    return Response.json({
      success: true,
      message: 'Plan updated successfully',
      plan: result.rows[0],
    });

  } catch (error) {
    console.error('Error updating plan:', error);
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
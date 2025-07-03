import { getClient } from '@/lib/db';

export async function POST(request) {
  let client;
  try {
    const planData = await request.json();

    // Validate required fields
    if (!planData.name || !planData.status) {
      return Response.json(
        { success: false, message: 'Missing required fields: name or status' },
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

    // Update plan status
    const updateQuery = `
      UPDATE plans 
      SET status = $1
      WHERE plan_name = $2
      RETURNING *
    `;
    const values = [planData.status, planData.name];

    const result = await client.query(updateQuery, values);

    return Response.json({
      success: true,
      message: 'Plan status updated successfully',
      plan: result.rows[0],
    });

  } catch (error) {
    console.error('Error updating plan status:', error);
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
import { getClient } from '@/lib/db';

export async function DELETE(request) {
  let client;
  try {
    // Get data from request body (JSON)
    const { bill_no } = await request.json();
    
    // Validate required field
    if (!bill_no || typeof bill_no !== 'string' || bill_no.length !== 6) {
      return Response.json(
        { success: false, message: 'Valid 6-character bill number is required' },
        { status: 400 }
      );
    }

    client = await getClient();
    
    // First check if transaction exists
    const checkQuery = 'SELECT 1 FROM membership_plans WHERE bill_no = $1 LIMIT 1';
    const checkResult = await client.query(checkQuery, [bill_no]);
    
    if (checkResult.rowCount === 0) {
      return Response.json(
        { success: false, message: 'Transaction not found' },
        { status: 404 }
      );
    }

    // Delete transaction
    const deleteQuery = `
      DELETE FROM membership_plans 
      WHERE bill_no = $1
      RETURNING bill_no, user_id, amount
    `;
    const deleteResult = await client.query(deleteQuery, [bill_no]);

    return Response.json({
      success: true,
      message: 'Transaction deleted successfully',
      deleted: deleteResult.rows[0]
    });

  } catch (error) {
    console.error('Error deleting transaction:', error);
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
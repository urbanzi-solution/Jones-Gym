import { getClient } from "@/lib/db";

export async function GET(request) {
  const client = await getClient();
  try {
    // Extract user_id from query parameters
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('user_id');

    if (!userId) {
      return new Response(JSON.stringify({
        success: false,
        error: 'user_id is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const query = `
      SELECT mp.*, ud.name 
      FROM membership_plans mp
      JOIN user_data ud ON mp.user_id = ud.user_id
      WHERE mp.user_id = $1
      ORDER BY mp.date DESC;
    `;

    const result = await client.query(query, [userId]);

    return new Response(JSON.stringify({
      success: true,
      data: result.rows
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Error fetching transactions:", error);
    return new Response(JSON.stringify({
      error: error.message || "Failed to fetch transactions"
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    await client.release();
  }
}
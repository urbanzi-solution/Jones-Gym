// src\app\api\fetch_balance\route.js
import { getClient } from "@/lib/db";

export async function GET(request) {
  const client = await getClient();
  try {
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

    // Fixed query to use parameterized query properly
    const query = `
      SELECT *
      FROM transactions
      WHERE user_id = 'SJ30'
      AND old_bill = '469'
      ORDER BY ctid DESC
      LIMIT 1;
    `;

    const result = await client.query(query, [userId]);

    console.log("result", result);

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
      success: false,
      error: error.message || "Failed to fetch transactions"
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    await client.release();
  }
}
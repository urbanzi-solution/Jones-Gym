// src\app\api\fetch_transactions_report\route.js
import { getClient } from "@/lib/db";

export async function GET(request) {
  const client = await getClient();
  try {
    // Query to fetch all transactions without userId filter
    const query = `
      SELECT t.*, u.name
      FROM transactions AS t
      JOIN user_data AS u
        ON t.user_id = u.user_id
      ORDER BY t.ctid DESC;
    `;

    const result = await client.query(query);

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
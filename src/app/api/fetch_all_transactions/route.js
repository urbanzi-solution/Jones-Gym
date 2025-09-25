// src\app\api\fetch_all_transactions\route.js
import { getClient } from "@/lib/db";

export async function GET(request) {
  const client = await getClient();
  try {

    const query = `
      SELECT * FROM transactions 
      ORDER BY ctid DESC;
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
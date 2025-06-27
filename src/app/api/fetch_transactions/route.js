// src\app\api\fetch_transactions\route.js
import { getClient } from "@/lib/db";

export async function GET() {
  const client = await getClient();
  try {

    const query = `
      SELECT t.user_id, u.name, t.bill_no, t.date, t.plan, t.trans_type, t.pay_method, t.amount, t.discount, t.balance
      FROM transations t
      JOIN user_data u ON t.user_id = u.user_id
      ORDER BY t.date DESC;
    `;

    const result = await client.query(query);

    // console.log(result);

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
    await client.end();
  }
}
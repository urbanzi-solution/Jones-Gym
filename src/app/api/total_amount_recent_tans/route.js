import { getClient } from "@/lib/db";

export async function GET(request) {
  const client = await getClient();
  try {
    // Extract user_id from query parameters (optional for this aggregated query)
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('user_id');

    // const query = `
    //   SELECT 
    //     SUM(amount) AS total_amount,
    //     SUM(discount) AS total_discount,
    //     SUM(balance) AS total_balance
    //   FROM membership_plans;
    // `;

    const query = `
      SELECT 
          (SUM(mp.amount)
          + COALESCE((SELECT SUM(t.amount) FROM transactions t), 0)
          ) AS total_amount,
          SUM(mp.discount) AS total_discount,
          (
              SUM(mp.balance)
              - COALESCE(
                  (SELECT SUM(t.amount)
                  FROM transactions t
                  WHERE t.bill_no = 'WriteOff'),
                  0
              )
          ) AS total_balance
      FROM membership_plans mp;
    `;

    const result = await client.query(query);

    console.log("result", result);

    return new Response(JSON.stringify({
      success: true,
      data: result.rows[0] // Since we're getting aggregated sums, we only need the first row
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

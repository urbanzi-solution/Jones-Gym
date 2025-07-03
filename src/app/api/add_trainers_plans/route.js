import { getClient } from "@/lib/db";

export async function POST(request) {
  const client = await getClient();
  
  try {
    const { plan_name, trainer_ids } = await request.json();

    if (!plan_name || !trainer_ids || !Array.isArray(trainer_ids) || trainer_ids.length === 0) {
      return new Response(JSON.stringify({ 
        error: "Missing plan_name or trainer_ids, or trainer_ids is not a non-empty array" 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare the values for batch insert
    const values = trainer_ids.map(trainer_id => 
      `('${trainer_id.replace(/'/g, "''")}', '${plan_name.replace(/'/g, "''")}')`
    ).join(',');

    const query = `
      INSERT INTO trainers_plans (trainer_id, plan_name)
      VALUES ${values}
      RETURNING *;
    `;

    const result = await client.query(query);

    return new Response(JSON.stringify({
      success: true,
      data: result.rows
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Error adding trainer-plan associations:", error);
    return new Response(JSON.stringify({ 
      error: error.message || "Failed to add trainer-plan associations"
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    await client.end();
  }
}
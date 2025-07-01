// src/app/api/add_plans/route.js
import { getClient } from "@/lib/db";

export async function POST(request) {
  try {
    // Parse the request body
    const data = await request.json();
    const { plan_name, description, amount, duration, status } = data;

    // Validate required fields
    if (!plan_name || !amount || !duration || !status) {
      return new Response(
        JSON.stringify({ error: "All required fields must be provided" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate data types and constraints
    if (plan_name.length > 30) {
      return new Response(
        JSON.stringify({ error: "Plan name must not exceed 30 characters" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    if (description && description.length > 250) {
      return new Response(
        JSON.stringify({ error: "Description must not exceed 250 characters" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    if (isNaN(amount) || amount < 0) {
      return new Response(
        JSON.stringify({ error: "Amount must be a valid non-negative number" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    if (isNaN(duration) || duration < 1) {
      return new Response(
        JSON.stringify({ error: "Duration must be a positive number" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    if (!["active", "inactive"].includes(status)) {
      return new Response(
        JSON.stringify({ error: "Status must be 'active' or 'inactive'" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Get database client
    const client = await getClient();

    // Insert data into the plans table
    const query = `
      INSERT INTO plans (plan_name, description, amount, duration, status)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [plan_name, description || null, amount, duration, status];

    const result = await client.query(query, values);

    return new Response(
      JSON.stringify({ message: "Plan added successfully", data: result.rows[0] }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error adding plan:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
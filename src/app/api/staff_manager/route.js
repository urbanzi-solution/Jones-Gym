import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await getClient();
    
    // Get trainers with their individual client counts
    const { rows } = await client.query(`
        SELECT 
            t.trainer_id,
            t.name,
            COUNT(mp.trainer) AS trainer_count
        FROM trainers t
        LEFT JOIN membership_plans mp ON t.trainer_id = mp.trainer 
            AND mp.plan_name ILIKE '%P%T%'
            AND mp.trainer IS NOT NULL
            AND mp.trainer != ''
        WHERE t.trainer_id IN (
            SELECT trainer
            FROM membership_plans
            WHERE (plan_name ILIKE '%P%T%')
            AND trainer IS NOT NULL
            AND trainer != ''
        )
        GROUP BY t.trainer_id, t.name
        ORDER BY t.name;`);

    const trainers = rows.map((row) => ({
      trainer_id: row.trainer_id,
      name: row.name,
      trainer_count: parseInt(row.trainer_count, 10)
    }));

    return NextResponse.json(trainers);
  } catch (error) {
    console.error('Error fetching trainers:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
//src\app\api\fetch_remark_blcklist\route.js
import { getClient } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await getClient();
    
    // Fetch data from both tables using a LEFT JOIN
    const { rows } = await client.query(`
      SELECT ur.user_id, ur.remark, bl.description AS blacklist_description
      FROM user_Remark ur
      LEFT JOIN Blacklist bl ON ur.user_id = bl.user_id
    `);
    
    // Map database fields to match frontend expectations
    const results = rows.map(row => ({
      userId: row.user_id,
      remark: row.remark,
      blacklistDescription: row.blacklist_description || null
    }));

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
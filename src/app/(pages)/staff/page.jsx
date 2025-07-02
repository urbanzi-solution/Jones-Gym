// src\app\(pages)\staff\page.jsx
import Inpage_header from "@/components/Inpage_header";
import Dashboardgreeting from "@/components/Dashboard_greeting";
import StaffClient from "@/components/StaffClient";
import { query } from "@/lib/db";

export default async function Staff({ searchParams }) {
  const { searchQuery, plan } = await searchParams;

  // Fetch trainers with optional filters
  let queryString = `
    SELECT DISTINCT t.*
    FROM trainers t
    LEFT JOIN membership_plans mp ON t.trainer_id = mp.trainer
  `;
  let queryParams = [];
  let conditions = [];

  // Apply search query filter (on trainer name)
  if (searchQuery) {
    conditions.push('t.name ILIKE $' + (queryParams.length + 1));
    queryParams.push(`%${searchQuery}%`);
  }

  // Apply specific plan filter (using membership_plans table)
  if (plan) {
    conditions.push('mp.plan_name = $' + (queryParams.length + 1));
    queryParams.push(plan);
  }

  if (conditions.length > 0) {
    queryString += ' WHERE ' + conditions.join(' AND ');
  }

  queryString += ' ORDER BY t.trainer_id';

  const trainerResult = await query(queryString, queryParams);
  const staff = trainerResult.rows;

  // Fetch trainer counts for each staff member
  const staffWithCounts = await Promise.all(
    staff.map(async (member) => {
      const countResult = await query(
        'SELECT COUNT(*) AS count FROM membership_plans WHERE trainer = $1',
        [member.trainer_id]
      );
      return {
        ...member,
        trainerCount: countResult.rows[0].count,
      };
    })
  );

  return (
    <div>
      <Dashboardgreeting />
      <StaffClient initialStaff={staffWithCounts} />
      <div className="h-20"></div>
    </div>
  );
}
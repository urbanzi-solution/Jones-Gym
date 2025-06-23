import Inpage_header from "@/components/Inpage_header";
import Dashboardgreeting from "@/components/Dashboard_greeting";
import StaffClient from "@/components/StaffClient";
import { query } from "@/lib/db";

export default async function Staff({ searchParams }) {
  const { searchQuery, planType, plan } = await searchParams;

  // Fetch all trainers
  let queryString = 'SELECT * FROM trainers';
  let queryParams = [];
  let conditions = [];

  // Apply search query filter
  if (searchQuery) {
    conditions.push('name ILIKE $' + (queryParams.length + 1));
    queryParams.push(`%${searchQuery}%`);
  }

  // Apply plan type filter
  if (planType) {
    conditions.push('plan_type = $' + (queryParams.length + 1));
    queryParams.push(planType);
  }

  // Apply specific plan filter
  if (plan) {
    conditions.push('plan_id = $' + (queryParams.length + 1));
    queryParams.push(plan);
  }

  if (conditions.length > 0) {
    queryString += ' WHERE ' + conditions.join(' AND ');
  }

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
      <Inpage_header title="Staff List" />
      <StaffClient initialStaff={staffWithCounts} />
      <div className="h-20"></div>
    </div>
  );
}
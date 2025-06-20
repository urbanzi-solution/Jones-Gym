/* src/app/(pages)/members/page.jsx */
import { query } from '@/lib/db';
import Inpage_header from "@/components/Inpage_header";
import MembersClient from "@/components/MembersClient";
import Dashboardgreeting from "@/components/Dashboard_greeting";

export default async function Members({ searchParams }) {

  const params = await searchParams; 

  const inactiveFilter = params.inactive === 'true';
  const currentDate = new Date();
  const oneYearAgo = new Date(currentDate);
  oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

  const queryString = inactiveFilter
    ? 'SELECT * FROM user_data WHERE joining_date < $1'
    : 'SELECT * FROM user_data';
  const queryParams = inactiveFilter ? [oneYearAgo.toISOString()] : [];

  const result = await query(queryString, queryParams);
  const members = result.rows;

  return (
    <div>
      <Dashboardgreeting />
      <Inpage_header title="Members List" />
      <MembersClient members={members} />
      <div className="h-20"></div>
    </div>
  );
}
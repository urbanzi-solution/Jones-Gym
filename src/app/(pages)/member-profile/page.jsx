// src\app\(pages)\member-profile\page.jsx
import Inpage_header from "@/components/Inpage_header_3dot";
import Memberlist_profile from "@/components/memberlist_profile";
import Members_profile2 from "@/components/Members_profile2";
import Recent_transations from "@/components/Recent_transations";
import { query } from '@/lib/db';
import { notFound } from 'next/navigation';

export default async function MemberProfile({ searchParams }) {
  const params = await searchParams;
  const member_id = params.member_id;

  let member = null;
  try {
    const result = await query('SELECT * FROM user_data WHERE user_id = $1', [member_id]);

    if (result.rows.length === 0) {
      console.warn(`No user found for member_id: ${member_id}`);
      notFound();
    }

    member = result.rows[0];
  } catch (error) {
    console.error('Error fetching member data:', {
      message: error.message,
      query: 'SELECT * FROM user_data WHERE user_id = $1',
      params: [member_id],
    });
    notFound();
  }

  return (
    <div>
      <Inpage_header title="Member Profile" />
      <Memberlist_profile member={member} />
      <Members_profile2 member={member} />
      <Recent_transations userId={member_id} />
      <div className="h-20"></div>
    </div>
  );
}
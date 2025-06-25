// src\app\(pages)\staff-profile\page.jsx
import Inpage_header from '@/components/Inpage_header_3dot';
import Staff_profile from '@/components/Staff_profile';
import Staff_profile2 from '@/components/Staff_profile2';
import Person_understaff from '@/components/Person_understaff';
import { query } from '@/lib/db';

export default async function MemberProfile({ searchParams }) {
  // Await searchParams to resolve the Promise
  const params = await searchParams;
  
  // Extract trainer_id from query parameters
  const trainerId = params.trainer_id;

  // Fetch trainer data from the database
  const result = await query('SELECT * FROM trainers WHERE trainer_id = $1', [trainerId]);
  const trainer = result.rows[0] || {}; // Get the first row or an empty object if no data

  const count_result = await query('SELECT COUNT(*) AS count FROM membership_plans WHERE trainer = $1', [trainerId]);
  const count = count_result.rows[0].count; // Get the count from the query

  // Optional: Handle case where trainer is not found
  if (!trainer.trainer_id) {
    return (
      <div className="p-4">
        <Inpage_header title="Staff Profile" />
        <p>Trainer not found</p>
      </div>
    );
  }

  return (
    <div>
      <Inpage_header title="Staff Profile" />
      <Staff_profile trainer={trainer} />
      <Staff_profile2 trainer={{ ...trainer, count }} />
      <Person_understaff />
      <div className="h-20"></div>
    </div>
  );
}
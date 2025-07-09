import { query } from '@/lib/db';
import Link from 'next/link';
import fs from 'fs'
import path from 'path'

function imageExists(trainerId) {
    if (!trainerId) return false
    
    const imagePath = path.join(process.cwd(), 'public', 'images', 'trainer_pic', `${trainerId}.png`)
    return fs.existsSync(imagePath)
}

export default async function DashboardStaff() {
  let members = [];
  try {
    const result = await query('SELECT * FROM trainers LIMIT 6', []);
    members = result.rows || [];
  } catch (err) {
    console.error('Error fetching staff:', err.message);
    return (
      <div className="box">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-2xl">Staff</h2>
          <a href="/staff" className="text-sm text-blue-500 hover:underline">See all</a>
        </div>
        <div className="text-red-500">Failed to load staff data. Please try again later.</div>
      </div>
    );
  }
  
  // Add image existence check to each member
  const membersWithImages = members.map(member => ({
      ...member,
      hasImage: imageExists(member.trainer_id)
  }))

  return (
    <div className="box">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-2xl">Staff</h2>
        <a href="/staff" className="text-sm text-blue-500 hover:underline">See all</a>
      </div>
      <div className="grid grid-cols-3 gap-3 justify-around">
        {members.length > 0 ? (
          membersWithImages.map((member, index) => (
            <Link
              key={member.trainer_id || index}
              href={`/staff-profile?trainer_id=${member.trainer_id || 'unknown'}`}
              className="flex flex-col items-center"
            >
              <img
                src={member.hasImage ? `/images/trainer_pic/${member.trainer_id}.png` : "/images/user1.jpg"}
                alt={member.name || 'Staff member'}
                loading='lazy'
                className="rounded-full object-cover border-2 border-white shadow-md w-16 h-16 sm:w-32 sm:h-32 lg:w-50 lg:h-50"
              />
              <span className="mt-2 text-xs sm:text-sm lg:text-xl">{member.trainer_id || '123'}</span>
              <span className="text-xs sm:text-sm lg:text-xl">{member.name || `Staff ${index + 1}`}</span>
            </Link>
          ))
        ) : (
          <div className="text-gray-500">No staff found.</div>
        )}
      </div>
    </div>
  );
}
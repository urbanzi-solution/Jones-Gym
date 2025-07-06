import { query } from '@/lib/db'

export default async function GalleryImage() {
  const result = await query('SELECT user_id, name FROM user_data')
  const members = result.rows

  return (
    <div className="p-4 md:p-6 lg:p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
      {members.map((member, index) => (
        <a 
          key={member.user_id || index}
          className="relative group block overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]" 
          href={`/member-profile?member_id=${member.user_id || 'unknown'}`}
        >
          <img 
            className="w-full aspect-[3/4] object-cover" 
            src={member.user_id ? `/images/user_pic/${member.user_id}.png` : "/images/user1.jpg"}
            alt={member.name || "User profile"}
          />
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
            <p className="text-white font-medium text-xs md:text-sm">#{member.user_id || 'N/A'}</p>
            <p className="text-white font-bold text-sm md:text-base truncate">{member.name || 'Unknown User'}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
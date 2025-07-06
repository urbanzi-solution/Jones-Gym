// src\components\Dashboard_members.jsx
import { query } from '@/lib/db'
import fs from 'fs'
import path from 'path'

function imageExists(userId) {
    if (!userId) return false
    
    const imagePath = path.join(process.cwd(), 'public', 'images', 'user_pic', `${userId}.png`)
    return fs.existsSync(imagePath)
}

export default async function DashboardMembers() {
    const result = await query('SELECT * FROM user_data LIMIT 6')
    const members = result.rows
    
    // Add image existence check to each member
    const membersWithImages = members.map(member => ({
        ...member,
        hasImage: imageExists(member.user_id)
    }))
    
    return (
        <div className="box">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg md:text-2xl">Members</h2>
                <a href="/members" className="text-sm text-blue-500 hover:underline">See all</a>
            </div>

            <div className="grid grid-cols-3 gap-3 justify-around">
                {membersWithImages.map((member, index) => (
                    <a key={member.id || index} 
                        href={`/member-profile?member_id=${member.user_id || 'unknown'}`}
                        className="flex flex-col items-center">
                        <img 
                            src={member.hasImage ? `/images/user_pic/${member.user_id}.png` : "/images/user1.jpg"}
                            alt="Member" 
                            className="rounded-full object-cover border-2 border-white shadow-md w-16 h-16 sm:w-32 sm:h-32 lg:w-50 lg:h-50"
                        />
                        <span className="mt-2 text-xs sm:text-sm lg:text-xl">{member.user_id || '123'}</span>
                        <span className="text-xs sm:text-sm lg:text-xl">
                            {member.name || `Member ${index + 1}`}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    )
}
import { query } from '@/lib/db'
export default async function DashboardStaff() {
    const result = await query('SELECT * FROM trainers LIMIT 6')
    const members = result.rows
    
    return (
        <div className="box">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg md:text-2xl">Staff</h2>
                <a href="" className="text-sm text-blue-500 hover:underline">See all</a>
            </div>

            <div className="grid grid-cols-3 gap-3 justify-around">
                {members.map((member, index) => (
                    <a key={member.trainer_id || index} href="#" className="flex flex-col items-center">
                        <img 
                            src={member.image_url || "/images/user1.jpg"} 
                            alt={member.name || "Staff member"} 
                            className="rounded-full object-cover border-2 border-white shadow-md w-16 h-16 sm:w-32 sm:h-32 lg:w-50 lg:h-50"
                        />
                        <span className="mt-2 text-xs sm:text-sm lg:text-xl">{member.trainer_id || "123"}</span>
                        <span className="text-xs sm:text-sm lg:text-xl">{member.name || `Staff ${index + 1}`}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}
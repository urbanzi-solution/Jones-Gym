import { query } from '@/lib/db'
export default async function Memberlist_boxes() {
    const result = await query('SELECT * FROM user_data')
    const members = result.rows
    
    return (
        <div className="">
            {members.map((member, index) => (
                <a key={member.id || index} className='box flex justify-between items-center' href='/member-profile'>
                    <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                        <img 
                            className='w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full' 
                            src={member.image_url || "/images/user1.jpg"} 
                            alt={member.name || "Member"} 
                        />
                        <span className='flex flex-col gap-1 text-sm sm:text-xl lg:text-2xl'>
                            <h3 className='font-semibold'>{member.name || "Member name"}</h3>
                            <h4>{member.user_id || "member_id"}</h4>
                            <p className='text-red-600'>{member.join_date || "01-01-2000"}</p>
                            <p className='text-yellow-500 text-sm md:text-lg'>Note: Remarks</p>
                        </span>
                        
                    </div>
                    <span className='flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl'>
                        <p className='bg-[#232024] px-2 py-1 rounded-4xl border-1 border-white text-center'>
                            {member.expiry_status || "Expiry in 32 Days"}
                        </p>
                        <p className='bg-[#232024] px-2 py-1 rounded-4xl border-1 text-center'>
                            {member.membership_type || "Basic Gym"}
                        </p>
                    </span>
                </a>
            ))}
        </div>
    )
}
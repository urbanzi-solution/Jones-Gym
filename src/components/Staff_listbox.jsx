import React from 'react'
import { IoPerson } from "react-icons/io5";
import { query } from '@/lib/db'

export default async function Staff_listbox() {
    const trainerResult = await query('SELECT * FROM trainers')
    const staff = trainerResult.rows
    // console.log(staff);

    const countResult = await query('SELECT COUNT(*) AS count FROM membership_plans WHERE trainer = $1', [staff[0].trainer_id])
    const trainerCount = countResult.rows[0].count

  return (
    <div>
        {staff.map((member, index) => (
            <a key={member.trainer_id || index} 
                className='box flex justify-between items-center border border-[#FFDD4A]' 
                href={`/staff-profile?trainer_id=${member.trainer_id || 'unknown'}`}>
                <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                    <img 
                        className='w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full' 
                        src="/images/user1.jpg"
                        alt="Member"
                    />
                    <span className='flex flex-col gap-1 md:gap-5 text-sm sm:text-xl lg:text-2xl'>
                        <h3 className='font-semibold'>{member.name || 'Unknown'}</h3>
                        <h4>{member.trainer_id || 'Unknown'}</h4>
                    </span>
                </div>
                <span className='flex gap-1 md:gap-2 justify-center items-center text-xl sm:text-3xl md:text-4xl font-bold'>
                    <IoPerson className='text-[#FFDD4A]' />
                    <h2>{trainerCount}</h2>
                </span>
                <span className='md:flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl hidden'>
                    <button className='bg-[#232024] px-10 py-5 rounded-lg border-1 text-center' href="#">
                        Mark attendance
                    </button>
                </span>
            </a>
        ))}
    </div>
  )
}
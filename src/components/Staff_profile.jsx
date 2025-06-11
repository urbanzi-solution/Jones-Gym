import { FaArrowRight } from "react-icons/fa6";



export default function Staff_profile() {
  return (
    <div className='grid grid-cols-2 p-4 md:p-6 lg:p-10 gap-4 md:gap-10'>
        <div className="relative">
            <img className='object-cover w-full h-full rounded-lg aspect-[3/4] md:max-h-80 lg:max-h-150' src="/images/user2.jpg" alt="" />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
              <p className="text-white font-medium text-sm md:text-lg">#124</p>
              <p className="text-white font-bold text-lg md:text-2xl">User2</p>
            </div>
        </div>
        <div className='flex flex-col text-center justify-center gap-4 md:gap-6 lg:gap-10'>
            <p className='bg-[#2B2E32] flex gap-2 justify-center items-center rounded-lg text-white font-semibold px-4 py-2 text-xl md:text-3xl md:py-4 lg:py-6'>PT Attendace<FaArrowRight/></p>
            <p className="bg-[#2B2E32] flex gap-2 justify-center items-center rounded-lg text-[#FFDD4A] font-semibold px-4 py-2 text-xl md:text-3xl md:py-4 lg:py-6">Add Member</p>
            <p className="bg-[#FFDD4A] px-4 py-2 font-semibold rounded-lg text-black border-2 md:py-4 lg:py-6 md:text-2xl">Staff Attandance</p>

        </div>
    </div>
  )
}

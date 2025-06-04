import { FaRegCheckCircle } from "react-icons/fa";


export default function memberlist_profile() {
  return (
    <div className='grid grid-cols-2 p-4 md:p-6 lg:p-10 gap-4 md:gap-10'>
        <div className="relative">
            <img className='object-cover w-full h-full rounded-lg aspect-[3/4] md:max-h-80 lg:max-h-150' src="/images/user2.jpg" alt="" />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
              <p className="text-white font-medium text-sm md:text-lg">#124</p>
              <p className="text-white font-bold text-lg md:text-2xl">User2</p>
            </div>
        </div>
        <div className='flex flex-col text-center justify-center gap-4 md:gap-6 lg:gap-8'>
            <p className='bg-[#71CA35] flex gap-2 justify-center items-center rounded-lg text-black font-semibold px-4 py-2 text-xl md:text-3xl md:py-4'>Paid <FaRegCheckCircle/></p>
            <span className="bg-[#FFDD4A] text-black px-4 py-2 rounded-lg gap-2 flex flex-col items-center md:py-4">
                <h3 className="text-xl font-semibold md:text-2xl">Basic Gym</h3>
                <p className="text-sm md:text-lg">Expiry in 32 Days</p>
                <p className="text-sm font-semibold md:text-lg">01-01-2026</p>
            </span>
            <p className="bg-[#2B2E32] px-4 py-2 font-semibold rounded-lg text-[#FFDD4A] border-2 md:py-4 md:text-2xl">Renew</p>

        </div>
    </div>
  )
}

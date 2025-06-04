

export default function Memberlist_boxes() {
  return (
    <div className="">
        <a className='box flex justify-between items-center ' href='/member-profile'>
            <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                <img className='w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full' src="/images/user1.jpg" alt="" />
                <span className='flex flex-col gap-1 text-sm sm:text-xl lg:text-2xl'>
                    <h3 className='font-semibold'>Member 1</h3>
                    <h4>#123</h4>
                    <p>01-01-2000</p>
                </span>
            </div>

            <span className='flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl'>
                <p className='bg-[#232024] px-2 py-1 rounded-4xl border-1 text-center'>Expiry in 32 Days</p>
                <p className='bg-[#232024] px-2 py-1 rounded-4xl border-1 text-center'>Basic Gym</p>
            </span>
        </a>
        <a className='box flex justify-between items-center ' href=''>
            <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                <img className='w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full' src="/images/user1.jpg" alt="" />
                <span className='flex flex-col gap-1 text-sm sm:text-xl lg:text-2xl'>
                    <h3 className='font-semibold'>Member 1</h3>
                    <h4>#123</h4>
                    <p>01-01-2000</p>
                </span>
            </div>

            <span className='flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl'>
                <p className='bg-[#232024] px-2 py-1 rounded-4xl border-1 text-center'>Expiry in 32 Days</p>
                <p className='bg-[#232024] px-2 py-1 rounded-4xl border-1 text-center'>Basic Gym</p>
            </span>
        </a>
        <a className='box flex justify-between items-center' href=''>
            <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                <img className='w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full' src="/images/user1.jpg" alt="" />
                <span className='flex flex-col gap-1 text-sm sm:text-xl lg:text-2xl'>
                    <h3 className='font-semibold'>Member 1</h3>
                    <h4>#123</h4>
                    <p>01-01-2000</p>
                </span>
            </div>

            <span className='flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl'>
                <p className='bg-[#232024] px-2 py-1 rounded-4xl border-1 text-center'>Expiry in 32 Days</p>
                <p className='bg-[#232024] px-2 py-1 rounded-4xl border-1 text-center'>Basic Gym</p>
            </span>
        </a>
    </div>
  )
}

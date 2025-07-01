export default function DashboardGeneral() {
  return (
    <div className="box flex flex-col gap-4 md:gap-10 p-4">
      <h2 className="text-lg md:text-2xl">General</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5  md:text-lg lg:text-xl">
        {/* All Members */}
        <a
          className="
                    border border-[#71CA35] 
                    rounded-lg 
                    p-4
                    flex flex-col
                    items-center justify-center 
                    text-center
                    bg-[#232024]
                    transition-all
                    hover:bg-[#71CA35]/10
                    lg:min-h-[100px]
                    md:p-6
                "
          href="/members"
        >
          <span>All Members</span>
        </a>

        {/* Inactive Members */}
        <a
          className="
                    border border-[#B30000] 
                    rounded-lg 
                    p-4
                    flex flex-col 
                    items-center justify-center 
                    text-center
                   bg-[#232024]
                    transition-all
                    hover:bg-[#B30000]/10
                    lg:min-h-[100px]
                    md:p-6
                "
          href="/members?status=Inactive"
        >
          <span>Inactive Members</span>
        </a>

        {/* Expiring Tomorrow */}
        <a
          className="
                    border border-[#4247D9] 
                    rounded-lg 
                    p-4
                    flex flex-col 
                    items-center justify-center 
                    text-center
                    bg-[#232024]
                    transition-all
                    hover:bg-[#4247D9]/10
                    lg:min-h-[100px]
                    md:p-6
                "
          href="/members?expiryWithin=1+day"
        >
          <span>Expiring Tomorrow</span>
        </a>

        {/* Expiry in 2 Days */}
        <a
          className="
                    border border-[#B000C0] 
                    rounded-lg 
                    p-4
                    flex flex-col 
                    items-center justify-center 
                    text-center
                    bg-[#232024]
                    transition-all
                    hover:bg-[#B000C0]/10
                    lg:min-h-[100px]
                    md:p-6
                "
          href="/members?expiryWithin=2+days"
        >
          <span>Expiry in 2 Days</span>
        </a>

        <a
          className="
                    border border-[#179D8B] 
                    rounded-lg
                    p-4
                    flex flex-col 
                    items-center justify-center 
                    text-center
                    bg-[#232024]
                    transition-all
                    hover:bg-[#179D8B]/10
                    lg:min-h-[100px]
                    md:p-6
                "
          href="/members?expiryWithin=3+days"
        >
          <span>Expiry in 3 Days</span>
        </a>

        <a
          className="
                    border border-[#E6FAF7] 
                    rounded-lg 
                    p-4
                    flex flex-col 
                    items-center justify-center 
                    text-center
                    bg-[#232024]
                    transition-all
                    hover:bg-[#E6FAF7]/10
                    lg:min-h-[100px]
                    md:p-6
                "
          href=""
        >
          <span>Staff Attendance</span>
        </a>
      </div>
    </div>
  );
}

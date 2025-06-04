import { FiSearch } from "react-icons/fi"; // Import search icon
import { IoFilter } from "react-icons/io5";



export default function MemberSearchFilter() {
  return (
    <div className="p-4 md:p-6 lg:p-10">
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search Member"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFDD4A] focus:border-transparent text-gray-900 placeholder-gray-400"
        />
      </div>
    <div className="flex justify-between items-center mt-4 md:text-xl">
        <span className="flex gap-2 md:gap-5">
            <button className="bg-[#2B2E32] px-4 py-2 md:px-6 md:py-3 rounded-xl  hover:border-1 hover:border-[#FFDD4A]">
                Active
            </button>
            <button className="bg-[#2B2E32] px-4 py-2 md:px-6 md:py-3 rounded-xl  hover:border-1 hover:border-[#FFDD4A]">
                Inactive
            </button>
        </span>
        <button className="flex items-center gap-1">
        <IoFilter className="text-[#FFDD4A]" />
            Filters
        </button>
        
    </div>
      
    </div>
  );
}

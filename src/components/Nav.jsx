import { IoMdHome } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";


export default function Nav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50">
            <ul className="flex justify-between items-center bg-[#2B2E32] text-[#E2FF0B] text-center border-t-2 border-[#E2FF0B] rounded-t-lg text-[8px] md:text-lg p-5 md:px-10 lg:max-w-[1200px] lg:mx-auto lg:px-20">
                <a href="/"><IoMdHome size={24} className="w-full" />Home</a>
                <a href="/members"><IoPeopleOutline size={24} className="w-full" />Members</a>
                <a href="/staff"><FaPeopleArrows size={24} className="w-full" />Staff</a>
                <a href="/gallery"><GrGallery size={24} className="w-full" />Gallery</a>
                <a href="/reports"><TbReportAnalytics size={24} className="w-full" />Reports</a>
            </ul>
        </nav>
    )
}
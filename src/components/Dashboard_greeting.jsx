import { FiPlusCircle } from "react-icons/fi";


export default function Dashboardgreeting() {
    return (
        <div className="flex items-center justify-between px-5 pt-5 sm:px-10">
            <h1 className="text-2xl sm:text-4xl font-semibold">Good Morning,</h1>
            <span className="flex gap-1 items-center justify-center bg-[#FFDD4A] text-black px-4 py-2 md:px-6 md:py-4  rounded-full md:text-2xl">Add<FiPlusCircle className="size-6"/></span>
        </div>
    );
}
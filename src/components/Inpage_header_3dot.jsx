"use client";

import { useRouter } from 'next/navigation';
import { LuUndo2 } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";

export default function Inpage_header({ title }) {  // Destructure props properly
  const router = useRouter();
  return (
    <div className="flex text-2xl md:text-4xl p-4 md:p-6 lg:p-10 justify-between items-center">
        <a href=""><LuUndo2 onClick={() => router.back()} className="text-[#FFDD4A]"/></a>
        <h1 className="text-center w-full">{title}</h1>  {/* Use the prop */}
        <a href=""><SlOptionsVertical className="text-[#ffffff]"/></a>
    </div>
  )
}

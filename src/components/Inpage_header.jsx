"use client";

import { useRouter } from 'next/navigation';
import { LuUndo2 } from "react-icons/lu";
import { CiExport } from "react-icons/ci";

export default function Inpage_header({ title }) {  // Destructure props properly
  const router = useRouter();
  return (
    <div className="flex text-2xl md:text-4xl p-4 md:p-6 lg:p-10 justify-between items-center">
        <a href=""><LuUndo2 onClick={() => router.back()} className="text-[#FFDD4A]"/></a>
        <h1 className="text-center w-full font-bold">{title}</h1>  {/* Use the prop */}
        <a href=""><CiExport className="text-[#FFDD4A]"/></a>
    </div>
  )
}

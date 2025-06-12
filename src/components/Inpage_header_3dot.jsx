"use client";


import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LuUndo2 } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";
import { GrClose } from "react-icons/gr";

export default function Inpage_header({ title }) {  // Destructure props properly
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    console.log("Toggle options clicked");
  };

  return (
    <div className="relative flex text-2xl md:text-4xl p-4 md:p-6 lg:p-10 justify-between items-center">
        <a href=""><LuUndo2 onClick={() => router.back()} className="text-[#FFDD4A]"/></a>
        <h1 className="text-center w-full">{title}</h1>  {/* Use the prop */}
        <button onClick={toggleOptions}><SlOptionsVertical className="text-[#ffffff]"/></button>

        {showOptions && (
          <div className="absolute top-full right-2 z-50 bg-[#0a0a0a] rounded-xl shadow-lg p-4  md:p-8  text-center md:w-1/2 border border-[#6e6e6e]">

            <div className="flex justify-between items-center mb-4 border-b pb-2">
                          <h2 className="text-lg font-medium md:text-2xl">Options</h2>
                          <GrClose
                            onClick={toggleOptions}
                            className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
                            size={28}
                          />
                        </div>
            <ul className="space-y-2 flex flex-col p-3 text-sm md:text-xl text-center">
              <button className=' bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]'>Edit Data</button>
              <button className=' bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]'>Blacklist</button>
              <button className=' bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]'>Remarks</button>
              <button className=' bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]'>Add membership</button>
              
            </ul>
          </div>
        )}
    </div>
  )
}

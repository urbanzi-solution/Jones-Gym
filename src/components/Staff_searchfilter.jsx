"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

export default function staff_searchfilter() {
  const [pt_btn, setPt_btn] = useState(false);
  const [gym_btn, setGym_btn] = useState(false);
  const [showFilters, setShowFilters] = useState(false);


  const handleActiveClick = () => {
    setPt_btn(!pt_btn);
    setGym_btn(false);
    console.log("pt button clicked");
  };

  const handleInactiveClick = () => {
    setPt_btn(false);
    setGym_btn(!gym_btn);
    console.log("gym button clicked");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="p-4 md:p-6 lg:p-10">
      {/* Search Input */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search Staff"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFDD4A] focus:border-transparent text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Filter Options */}
      <div className="relative">
        {/* Main Filter Bar */}
        <div className="flex justify-between gap-5 items-center md:text-xl p-3 rounded-lg">
          <span className="flex gap-2 md:gap-5">
            <button
              onClick={handleActiveClick}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-xl ${
                pt_btn
                  ? "bg-black border border-[#FFDD4A]"
                  : "bg-[#2B2E32] border border-transparent hover:border hover:border-[#FFDD4A]"
              }`}
            >
              PT
            </button>

            <button
              onClick={handleInactiveClick}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-xl ${
                gym_btn
                  ? "bg-black border border-[#FFDD4A]"
                  : "bg-[#2B2E32] border border-transparent hover:border hover:border-[#FFDD4A]"
              }`}
            >
              Basic Gym
            </button>
          </span>

          <button
            onClick={toggleFilters}
            className="flex items-center gap-1 hover:text-[#FFDD4A] transition-colors"
          >
            <IoFilter className="text-[#FFDD4A]" />
            Plans
          </button>
        </div>

        {/* Expanded Filter Panel - Plans */}
        {showFilters && (
          <div className="absolute top-full left-0 right-0 z-50 bg-[#0a0a0a] rounded-xl shadow-lg mt-2 p-4 md:p-8 text-center border border-[#6e6e6e]">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-lg font-medium md:text-2xl">All Plans</h2>
              <GrClose
                onClick={toggleFilters}
                className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
                size={18}
              />
            </div>

            
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <button className="p-3 rounded-lg text-sm bg-[#232024] md:text-xl hover:border border-[#FFDD4A]" onClick={() => console.log("Plan A clicked")}>
                  plan A
                </button>
                
                <button className="p-3 rounded-lg text-sm bg-[#232024] md:text-xl hover:border border-[#FFDD4A]" onClick={() => console.log("Plan A clicked")}>
                  plan A
                </button>
                
                <button className="p-3 rounded-lg text-sm bg-[#232024] md:text-xl hover:border border-[#FFDD4A]" onClick={() => console.log("Plan A clicked")}>
                  plan A
                </button>
                
                <button className="p-3 rounded-lg text-sm bg-[#232024] md:text-xl hover:border border-[#FFDD4A]" onClick={() => console.log("Plan A clicked")}>
                  plan A
                </button>
                
                <button className="p-3 rounded-lg text-sm bg-[#232024] md:text-xl hover:border border-[#FFDD4A]" onClick={() => console.log("Plan A clicked")}>
                  plan A
                </button>
                
                <button className="p-3 rounded-lg text-sm bg-[#232024] md:text-xl hover:border border-[#FFDD4A]" onClick={() => console.log("Plan A clicked")}>
                  plan A
                </button>
                
               

              </div>
            

            

            <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-[#2B2E32]">
              <button 
                
                className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800"
              >
                Clear
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-[#FFDD4A] text-black hover:bg-[#FFD700]"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Add_member from "./Add_Section";
import View_section from "./View_Section";

export default function Dashboardgreeting() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    console.log("Toggle options clicked");
  };

  return (
    <div className="relative flex items-center justify-between px-5 my-5 sm:px-10">
      <h1 className="text-2xl sm:text-4xl font-semibold">Good Morning,</h1>
      <button
        onClick={toggleOptions}
        className="relative flex gap-1 items-center justify-center bg-[#FFDD4A] text-black px-4 py-2 md:px-6 md:py-4  rounded-full md:text-2xl"
      >
        Add
        <FiPlusCircle className="size-6" />
      </button>
      {showOptions && (
        <div className="absolute top-full left-0 right-0 z-100 bg-[#0a0a0a] rounded-xl shadow-lg mt-2 p-4 md:p-8 text-center border border-[#6e6e6e]">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-medium md:text-2xl">Add menu</h2>
            <GrClose
              onClick={toggleOptions}
              className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
              size={28}
            />
          </div>

          <ul className="space-y-4 pt-5">
            <Add_member value="Member" Link="/member-add" />
            <Add_member value="Staff" Link="/staff-add" />
            <span className="bg-amber-600">
                <Add_member value="Plan" Link="/plan-add" />
                <View_section value="Plan" Link="/see-allplans" />
            </span>
            
          </ul>
        </div>
      )}
    </div>
  );
}

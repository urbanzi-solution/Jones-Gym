import React from "react";
import { IoPerson } from "react-icons/io5";

export default function Person_understaff() {
  return (
    <div className="p-5 md:p-10 ">
      <div className="bg-[#2B2E32] grid grid-cols-2 items-center justify-center text-center text-lg sm:text-xl md:text-4xl font-bold rounded-2xl mb-5 md:mb-10">
        <h2 className="bg-[#FFDD4A] py-4 md:py-6 text-black rounded-2xl">Basic Gym</h2>
        <span className="flex gap-1 md:gap-2 justify-center items-center">
          <IoPerson className="text-[#FFDD4A]" />
          <h2>10</h2>
        </span>
      </div>
      
      <div className="bg-[#2B2E32] grid grid-cols-2 items-center justify-center text-center text-lg sm:text-xl md:text-4xl font-bold rounded-2xl mb-5 md:mb-10">
        <h2 className="bg-[#FFDD4A] py-4 md:py-6 text-black rounded-2xl">PT</h2>
        <span className="flex gap-1 md:gap-2 justify-center items-center">
          <IoPerson className="text-[#FFDD4A]" />
          <h2>10</h2>
        </span>
      </div>
      
      <div className="bg-[#2B2E32] grid grid-cols-2 items-center justify-center text-center text-lg sm:text-xl md:text-4xl font-bold rounded-2xl mb-5 md:mb-10">
        <h2 className="bg-[#FFDD4A] py-4 md:py-6 text-black rounded-2xl">TP</h2>
        <span className="flex gap-1 md:gap-2 justify-center items-center">
          <IoPerson className="text-[#FFDD4A]" />
          <h2>10</h2>
        </span>
      </div>
      
      

    </div>
  );
}

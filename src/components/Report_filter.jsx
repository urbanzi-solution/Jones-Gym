import React from "react";


export default function Report_filter() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-5 p-4 md:p-6 lg:p-8">
        <span className="bg-[#2B2E32] flex flex-col gap-2 p-6 md:p-10 text-center items-center justify-center">
          <h3 className="text-sm md:text-lg">Total Received</h3>
          <h2 className="text-xl md:text-2xl font-bold text-green-500">
            ₹ 5000
          </h2>
        </span>

        <span className="bg-[#2B2E32] flex flex-col gap-2 p-6 md:p-10 text-center">
          <h3 className="text-sm md:text-lg">Pendig Balance</h3>
          <h2 className="text-xl md:text-2xl font-bold text-red-500">₹ 2000</h2>
        </span>
      </div>


      <div className="box flex justify-between font-bold items-center md:text-2xl">
        <h2>Basic Gym</h2>
        <p className="text-green-500">₹5000</p>
        <p className="text-red-500">₹2000</p>
      </div>

      <div className="box flex justify-between font-bold items-center md:text-2xl">
        <h2>Basic Gym</h2>
        <p className="text-green-500">₹5000</p>
        <p className="text-red-500">₹2000</p>
      </div>

      <div className="box flex justify-between font-bold items-center md:text-2xl">
        <h2>Basic Gym</h2>
        <p className="text-green-500">₹5000</p>
        <p className="text-red-500">₹2000</p>
      </div>
    </div>
  );
}

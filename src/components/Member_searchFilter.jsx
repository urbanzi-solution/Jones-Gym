"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MemberSearchFilter() {
  const [active, setActive] = useState(false);
  const [inactive, setInactive] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleActiveClick = () => {
    setActive(!active);
    setInactive(false);
    console.log("active");
  };

  const handleInactiveClick = () => {
    setActive(false);
    setInactive(!inactive);
    console.log("inactive");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
          placeholder="Search Member"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFDD4A] focus:border-transparent text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Filter Controls */}
      <div className="mt-4 relative">
        {/* Main Filter Bar */}
        <div className="flex justify-between items-center md:text-xl p-3 rounded-lg">
          <span className="flex gap-2 md:gap-5">
            <button
              onClick={handleActiveClick}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-xl ${
                active
                  ? "bg-black border border-[#FFDD4A]"
                  : "bg-[#2B2E32] border border-transparent hover:border hover:border-[#FFDD4A]"
              }`}
            >
              Active
            </button>
            <button
              onClick={handleInactiveClick}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-xl ${
                inactive
                  ? "bg-black border border-[#FFDD4A]"
                  : "bg-[#2B2E32] border border-transparent hover:border hover:border-[#FFDD4A]"
              }`}
            >
              Inactive
            </button>
          </span>
          
          <button 
            onClick={toggleFilters}
            className="flex items-center gap-1 hover:text-[#FFDD4A] transition-colors"
          >
            <IoFilter className="text-[#FFDD4A]" />
            Filters
          </button>
        </div>

        {/* Expanded Filter Panel */}
        {showFilters && (
          <div className="absolute top-full left-0 right-0 z-50 bg-[#0a0a0a] rounded-xl shadow-lg mt-2 p-4 text-center border border-[#6e6e6e] ">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-lg font-medium">Filter Members</h2>
              <GrClose 
                onClick={toggleFilters}
                className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
                size={18}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Date Range Picker */}
              <div className="">
                <h3 className="text-sm mb-2">Joining Date Range</h3>
                <DatePicker
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={handleDateChange}
                  isClearable
                  placeholderText="Select date range"
                  className="w-full p-2 rounded-lg bg-[#232024] border border-[#3E3A3D] text-sm text-center"
                  dateFormat="MMM yyyy"
                  showMonthYearPicker
                />
              </div>

              {/* Gender Filter */}
              <div className="">
                <h3 className="text-sm mb-2">Gender</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    Male
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    Female
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    Other
                  </button>
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <h3 className="text-sm mb-2">Status</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    Active
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    Inactive
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    Blacklisted
                  </button>
                </div>
              </div>

              {/* Payment Filter */}
              <div>
                <h3 className="text-sm mb-2">Payment</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    Fully paid
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    With Balance
                  </button>
                </div>
              </div>

              {/* Plans Filter */}
              <div>
                <h3 className="text-sm mb-2">Plans</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    PT
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    TP
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    Gym
                  </button>
                </div>
              </div>

              {/* Expiry Filter */}
              <div>
                <h3 className="text-sm mb-2">Expiry Within</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    1 day
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    2 days
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-[#232024] hover:border hover:border-[#FFDD4A] text-sm">
                    3 days
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-[#2B2E32]">
              <button 
                onClick={toggleFilters}
                className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800"
              >
                Reset
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-[#FFDD4A] text-black hover:bg-[#FFD700]"
              >
                Apply Filters
              </button>
            </div>
            <div className="h-20 md:hidden"></div>
          </div>
        )}
      </div>
      
    </div>
  );
}
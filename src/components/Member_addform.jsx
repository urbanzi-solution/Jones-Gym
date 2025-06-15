"use client";

import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useRouter } from 'next/navigation';
import Addmembership from '@/components/Add-membership_form';

export default function member_addpage() {
  const router = useRouter();
  const [includeMembership, setIncludeMembership] = useState(false); // ✅ Step 1: state for checkbox

  return (
    <div className="box">
      <div className="flex justify-between items-center text-xl pb-2 border-b md:text-2xl">
        <h2>Add Member</h2>
        <GrClose className="cursor-pointer hover:scale-90 hover:bg-black" onClick={() => router.back()} />
      </div>

      <form action="" className="mt-5">
        {/* Grid layout for responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">

            {/* Gym ID */}
            <div>
              <label htmlFor="gymID" className="block text-sm font-medium mb-1 text-gray-300">
                Gym ID *
              </label>
              <input
                type="text"
                id="gymID"
                placeholder="Enter gym ID"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1 text-gray-300">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter full name"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Gender Dropdown */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium mb-1 text-gray-300">
                Gender *
              </label>
              <select
                id="gender"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-sm font-medium mb-1 text-gray-300">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1 text-gray-300">
                Location *
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter location"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-300">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium mb-1 text-gray-300">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                placeholder="Enter WhatsApp number"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
              />
            </div>

            {/* Joining Date */}
            <div>
              <label htmlFor="joining_date" className="block text-sm font-medium mb-1 text-gray-300">
                Joining Date *
              </label>
              <input
                type="text"
                id="joining_date"
                placeholder="Enter joining date"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Profile Picture Upload */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Profile Picture *
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#3E3A3D] rounded-lg cursor-pointer bg-[#232024] hover:bg-[#2E2A2D]">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="text-sm text-gray-400">Click to upload image</p>
                  </div>
                  <input required type="file" className="hidden" accept="image/*" />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Add checkbox for Membership section toggle */}
        <div className="mt-6 flex items-center gap-3">
          <input
            type="checkbox"
            id="includeMembership"
            checked={includeMembership}
            onChange={(e) => setIncludeMembership(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="includeMembership" className="text-sm text-gray-300">
            Include Membership Plan?
          </label>
        </div>

        {/* ✅ Conditional rendering of Membership Plans Section */}
        {includeMembership && (
          <div className="mt-8 border-t border-[#6e6e6e] pt-4">
            <Addmembership />
          </div>
        )}

        {/* Form Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => router.back()}
            type="button"
            className="px-6 py-2.5 border border-[#3E3A3D] rounded-lg text-gray-300 hover:bg-[#2E2A2D] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

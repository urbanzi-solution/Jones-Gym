// src\components\Staff_listbox_manager.jsx
"use client";
import React, { useState, useEffect } from "react";
import { IoPerson } from "react-icons/io5";
import TrainerAvatar from "@/components/TrainerAvatar";

export default function Staff_listbox_manager() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStaffData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/staff_manager');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setStaff(data);
    } catch (err) {
      console.error('Error fetching staff data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchStaffData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg">Loading staff data...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-500">Error loading staff data: {error}</div>
      </div>
    );
  }

  // Empty state
  if (staff.length === 0) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-500">No staff members found.</div>
      </div>
    );
  }

  return (
    <div>
      {staff.map((member, index) => (
        <a
          key={member.trainer_id || index}
          className="box flex justify-between items-center border border-[#FFDD4A]"
          href={`/staff-profile?trainer_id=${member.trainer_id || "unknown"}`}
        >
          <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
            <TrainerAvatar trainer={member} />

            <span className="flex flex-col gap-1 md:gap-5 text-sm sm:text-xl lg:text-2xl">
              <h3 className="font-semibold">{member.name || "Unknown"}</h3>
              <h4>{member.trainer_id || "Unknown"}</h4>
            </span>
          </div>
          <span className="flex gap-1 md:gap-2 justify-center items-center text-xl sm:text-3xl md:text-4xl font-bold">
            <IoPerson className="text-[#FFDD4A]" />
            <h2>{member.trainer_count || 0}</h2>
          </span>
          <span className="md:flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl hidden">
            <a 
              className="bg-[#232024] hover:bg-[#FFDD4A] hover:text-black px-10 py-5 rounded-lg border-1 text-center inline-block" 
              href={
                member?.trainer_id
                  ? `/staff-attendance?trainer_id=${member.trainer_id}&name=${encodeURIComponent(member.name || 'Unknown')}`
                  : '#'
              }
            >
              Mark Attendance
            </a>
          </span>
        </a>
      ))}
    </div>
  );
}
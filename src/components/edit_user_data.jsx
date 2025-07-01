// src\components\edit_user_data.jsx
"use client";
import { useState } from "react";
export default function EditUserData({ onSave, onCancel }) {
  const [user_id, setUserId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [location, setLocation] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [whatsapp_no, setWhatsappNo] = useState("");
  const [joining_date, setJoiningDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) onSave({ user_id, name, gender, date_of_birth, location, phone_no, whatsapp_no, joining_date, reason });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* User ID Field */}
      <div>
        <label className="block text-gray-300 mb-2">User ID</label>
        <input
          type="text"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          placeholder="Enter user ID"
          value={user_id}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      {/* Name Field */}
      <div>
        <label className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Gender Field */}
      <div>
        <label className="block text-gray-300 mb-2">Gender</label>
        <select
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Date of Birth Field */}
      <div>
        <label className="block text-gray-300 mb-2">Date of Birth</label>
        <input
          type="date"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          value={date_of_birth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>

      {/* Location Field */}
      <div>
        <label className="block text-gray-300 mb-2">Location</label>
        <input
          type="text"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Phone Number Field */}
      <div>
        <label className="block text-gray-300 mb-2">Phone Number</label>
        <input
          type="tel"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          placeholder="Enter phone number"
          value={phone_no}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
      </div>

      {/* WhatsApp Number Field */}
      <div>
        <label className="block text-gray-300 mb-2">WhatsApp Number</label>
        <input
          type="tel"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          placeholder="Enter WhatsApp number"
          value={whatsapp_no}
          onChange={(e) => setWhatsappNo(e.target.value)}
        />
      </div>

      {/* Joining Date Field */}
      <div>
        <label className="block text-gray-300 mb-2">Joining Date</label>
        <input
          type="date"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          value={joining_date}
          onChange={(e) => setJoiningDate(e.target.value)}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-full border border-gray-500 text-white rounded-lg py-3 hover:bg-[#1a1a1a] transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full bg-[#FFDD4A] text-black font-bold py-3 rounded-lg hover:bg-[#ffd700] transition"
        >
          Save Blacklist
        </button>
      </div>
    </form>
  );
}
"use client";
import { useState } from "react";



export default function BlacklistForm({ onSave, onCancel }) {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) onSave({ name, reason });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label className="block text-gray-300 mb-2">User ID</label>
        <input
          type="text"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          placeholder="Enter user ID"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Reason Field */}
      <div>
        <label className="block text-gray-300 mb-2">Reason</label>
        <textarea
          rows={4}
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          placeholder="Enter reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
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

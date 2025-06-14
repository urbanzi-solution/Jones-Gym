"use client";

import { useState } from "react";

export default function RemarksForm({ onSave, onCancel }) {
  const [remarks, setRemarks] = useState("");

  const handleSave = () => {
    if (onSave) onSave(remarks);
  };

  return (
    <div className="p-4 bg-[#0a0a0a] border border-[#3E3A3D] rounded-xl max-w-xl w-full">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Remarks
      </label>
      <textarea
        rows={4}
        value={remarks}
        onChange={(e) => setRemarks(e.target.value)}
        placeholder="Enter your remarks..."
        className="w-full p-4 bg-[#232024] rounded-lg border border-[#3E3A3D] text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />

      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={onCancel}
          className="px-5 py-2 border border-gray-500 text-white rounded-lg hover:bg-[#1a1a1a] transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-5 py-2 bg-[#FFDD4A] text-black font-bold rounded-lg hover:bg-[#ffd700] transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
}

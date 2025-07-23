// src\components\Remarks_form.jsx
"use client";
import { useState, useEffect } from "react";

export default function RemarksForm({ user_id, onSave, onCancel }) {
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user_id) {
      setName(user_id);
    }
  }, [user_id]);

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/add_Remark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: name, description: remarks }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || 'Failed to add remark');
      }

      if (onSave) onSave({ name, remarks });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
          maxLength={10}
        />
      </div>

      {/* Remarks Field */}
      <div>
        <label className="block text-gray-300 mb-2">Remarks</label>
        <textarea
          rows={4}
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          placeholder="Enter remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          disabled={isSubmitting}
          maxLength={50}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          onClick={handleCancel}
          className="w-full border border-gray-500 text-white rounded-lg py-3 hover:bg-[#1a1a1a] transition"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full bg-[#FFDD4A] text-black font-bold py-3 rounded-lg hover:bg-[#ffd700] transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Remarks'}
        </button>
      </div>
    </form>
  );
}

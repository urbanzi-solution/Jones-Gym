// src\components\Blacklist_form.jsx
"use client";
import { useState, useEffect } from "react";

export default function BlacklistForm({ user_id, onSave, onCancel }) {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
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
      const response = await fetch('/api/add_blacklist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: name, description: reason }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || 'Failed to add blacklist entry');
      }

      if (onSave) onSave({ name, reason });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
          {isSubmitting ? 'Adding...' : 'Add To Blacklist'}
        </button>
      </div>
    </form>
  );
}

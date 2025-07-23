// src/components/edit_user_data.jsx
"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function EditUserData({ member, onCancel }) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [error, setError] = useState(null);

  const convertDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Initialize state with member data
  const [formData, setFormData] = useState({
    user_id: member?.user_id || "",
    name: member?.name || "",
    gender: member?.gender || "",
    date_of_birth: convertDate(member?.date_of_birth) || "",
    location: member?.location || "",
    phone_no: member?.phone_no || "",
    whatsapp_no: member?.whatsapp_no || "",
    joining_date: convertDate(member?.joining_date) || "",
    reason: member?.reason || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      const response = await fetch('/api/edit_user_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          user_id: member.user_id
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to update user data');
      }

      // Show success message with countdown
      setSaveSuccess(true);
      setCountdown(3);
      
      // Countdown timer
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            router.push(`/member-profile?member_id=${member.user_id}`);
            if (onCancel) {
              onCancel();
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    } catch (err) {
      setError(err.message);
      setIsSaving(false); // Only set to false on error
    }
    // Don't set isSaving to false on success to prevent UI flickering during redirect
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* User ID Field (read-only) */}
      <div>
        <label className="block text-gray-300 mb-2">User ID</label>
        <input
          type="text"
          name="user_id"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-gray-400"
          value={formData.user_id}
          readOnly
        />
      </div>

      {/* Name Field */}
      <div>
        <label className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Gender Field */}
      <div>
        <label className="block text-gray-300 mb-2">Gender</label>
        <select
          name="gender"
          className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">{formData.gender}</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Date Fields */}
      {['date_of_birth', 'joining_date'].map((field) => (
        <div key={field}>
          <label className="block text-gray-300 mb-2">
            {field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </label>
          <input
            type="date"
            name={field}
            className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
            value={formData[field]}
            onChange={handleChange}
          />
        </div>
      ))}

      {/* Contact Fields */}
      {['location', 'phone_no', 'whatsapp_no'].map((field) => (
        <div key={field}>
          <label className="block text-gray-300 mb-2">
            {field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </label>
          <input
            type={field.includes('phone') ? 'tel' : 'text'}
            name={field}
            className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
            value={formData[field]}
            onChange={handleChange}
          />
        </div>
      ))}

      {/* Error and Success Messages */}
      {error && (
        <div className="text-red-500 p-3 bg-red-500/10 rounded-lg">
          {error}
        </div>
      )}
      {saveSuccess && (
        <div className="text-green-500 p-3 bg-green-500/10 rounded-lg">
          User data updated successfully! Redirecting...
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          onClick={handleCancel}
          className="w-full border border-gray-500 text-white rounded-lg py-3 hover:bg-[#1a1a1a] transition"
          disabled={isSaving || saveSuccess}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`w-full ${isSaving || saveSuccess ? 'bg-[#FFDD4A]/80' : 'bg-[#FFDD4A] hover:bg-[#ffd700]'} text-black font-bold py-3 rounded-lg transition`}
          disabled={isSaving || saveSuccess}
        >
          {saveSuccess ? "Redirecting..." : isSaving ? "Saving..." : "Update User Data"}
        </button>
      </div>
    </form>
  );
}

// src\components\edit_plan.jsx
"use client";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

export default function EditPlan({ plan, onSave, onCancel }) {
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        id: plan.id,
        name: plan.name || "",
        amount: plan.amount || "",
        duration: plan.duration || "",
        description: plan.description || "",
        status: plan.status || "active",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      const response = await fetch('/api/edit_plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to update plan');
      }

      onSave(result.plan);
      window.location.href = '/see-allplans';
    } catch (err) {
      setError(err.message);
      setIsSaving(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">Edit Plan</h3>
        <GrClose
          onClick={onCancel}
          className="cursor-pointer hover:scale-90 text-gray-400 hover:text-white"
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Plan Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Amount (₹)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Duration (days)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        {error && (
          <div className="text-red-500 p-3 bg-red-500/10 rounded-lg">
            {error}
          </div>
        )}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 border border-gray-500 text-white rounded-lg py-3 hover:bg-[#1a1a1a] transition"
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`flex-1 ${
              isSaving ? 'bg-yellow-500/80' : 'bg-yellow-500 hover:bg-yellow-600'
            } text-black font-bold py-3 rounded-lg transition`}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Plan'}
          </button>
        </div>
      </form>
    </div>
  );
}
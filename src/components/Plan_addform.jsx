"use client";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function PlanAddPage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTrainers, setSelectedTrainers] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      plan_name: e.target.planName.value,
      description: e.target.description.value,
      amount: parseInt(e.target.amount.value),
      duration: e.target.duration.value,
      status: e.target.status.value,
      trainers: selectedTrainers
    };

    try {
      // Add the plan
      const planResponse = await fetch("/api/add_plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const planResult = await planResponse.json();

      if (!planResponse.ok) {
        throw new Error(planResult.error || "Failed to add plan");
      }

      setSuccess("Plan and trainer associations added successfully!");
      setError(null);
      e.target.reset();
      setSelectedTrainers([]);
      router.push("/see-allplans");
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="box">
      <div className="flex justify-between items-center text-xl pb-2 border-b md:text-2xl">
        <h2>Add Gym Plan</h2>
        <GrClose
          className="cursor-pointer hover:scale-90 hover:bg-black"
          onClick={() => router.back()}
        />
      </div>

      <form onSubmit={handleSubmit} className="mt-5">
        {success && <div className="text-green-500 mb-4">{success}</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Plan Name */}
            <div>
              <label htmlFor="planName" className="block text-sm font-medium mb-1 text-gray-300">
                Plan Name *
              </label>
              <input
                type="text"
                id="planName"
                name="planName"
                placeholder="e.g., Premium Membership"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Plan Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1 text-gray-300">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe the plan features"
                rows={3}
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Plan Amount */}
            <div>
              <label htmlFor="amount" className="block text-sm font-medium mb-1 text-gray-300">
                Plan Amount (₹) *
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Enter amount"
                min="0"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>

            {/* Plan Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium mb-1 text-gray-300">
                Duration (Days) *
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                placeholder="Enter duration in days"
                min="1"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>

            {/* Plan Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium mb-1 text-gray-300">
                Status *
              </label>
              <select
                id="status"
                name="status"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
                required
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

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
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Saving..." : "Save Plan"}
          </button>
        </div>
      </form>
    </div>
  );
}
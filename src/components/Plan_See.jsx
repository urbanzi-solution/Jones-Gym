"use client";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

export default function PlanList() {
  const [plans, setPlans] = useState([]);
  const [activeTab, setActiveTab] = useState("active");
  const [editId, setEditId] = useState(null);
  const [editedPlan, setEditedPlan] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/fetch_plans');
        if (!response.ok) {
          throw new Error('Failed to fetch plans');
        }
        const data = await response.json();
        setPlans(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleStatusToggle = (id) => {
    const updated = plans.map((plan) =>
      plan.id === id
        ? { ...plan, status: plan.status === "active" ? "inactive" : "active" }
        : plan
    );
    setPlans(updated);
  };

  const handleEditClick = (plan) => {
    setEditId(plan.id);
    setEditedPlan(plan);
  };

  const handleSave = () => {
    const updated = plans.map((plan) =>
      plan.id === editId ? editedPlan : plan
    );
    setPlans(updated);
    setEditId(null);
  };

  const handleChange = (field, value) => {
    setEditedPlan({ ...editedPlan, [field]: value });
  };

  if (loading) return <div>Loading plans...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="box">
      {/* Tab Switcher */}
      <div className="flex gap-4 mb-6 text-lg font-semibold">
        <button
          onClick={() => setActiveTab("active")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "active"
              ? "bg-blue-600 text-white"
              : "bg-[#232024] text-gray-300"
          }`}
        >
          Active Plans
        </button>
        <button
          onClick={() => setActiveTab("inactive")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "inactive"
              ? "bg-blue-600 text-white"
              : "bg-[#232024] text-gray-300"
          }`}
        >
          Inactive Plans
        </button>
      </div>

      {/* Plan Cards */}
      <div className="grid gap-6">
        {plans
          .filter((plan) => plan.status === activeTab)
          .map((plan) => (
            <div
              key={plan.id}
              className="p-5 border border-[#3E3A3D] rounded-lg bg-[#1a1a1a]"
            >
              {editId === plan.id ? (
                <>
                  {/* Editable Form */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Edit Plan</h3>
                    <GrClose
                      onClick={() => setEditId(null)}
                      className="cursor-pointer hover:scale-90 text-gray-400 hover:text-white"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={editedPlan.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="p-3 bg-[#232024] rounded-lg border border-[#3E3A3D]"
                    />
                    <input
                      type="number"
                      value={editedPlan.amount}
                      onChange={(e) => handleChange("amount", e.target.value)}
                      className="p-3 bg-[#232024] rounded-lg border border-[#3E3A3D]"
                    />
                    <input
                      type="number"
                      value={editedPlan.duration}
                      onChange={(e) => handleChange("duration", e.target.value)}
                      className="p-3 bg-[#232024] rounded-lg border border-[#3E3A3D]"
                    />
                    <textarea
                      value={editedPlan.description}
                      onChange={(e) => handleChange("description", e.target.value)}
                      rows={3}
                      className="p-3 bg-[#232024] rounded-lg border border-[#3E3A3D]"
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      onClick={() => setEditId(null)}
                      className="px-4 py-2 rounded-lg bg-transparent text-gray-300 border border-gray-500 hover:bg-[#2e2e2e]"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* View Mode */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <button
                      onClick={() => handleEditClick(plan)}
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <FaEdit size={20} />
                    </button>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-sm">
                    <div>💰 Amount: ₹{plan.amount}</div>
                    <div>📆 Duration: {plan.duration} days</div>
                    <div>
                      🔄 Status:{" "}
                      <span
                        className={`font-semibold ${
                          plan.status === "active"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {plan.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleStatusToggle(plan.id)}
                    className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300"
                  >
                    Mark as {plan.status === "active" ? "Inactive" : "Active"}
                  </button>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
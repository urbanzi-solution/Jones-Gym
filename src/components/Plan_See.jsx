"use client";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import EditPlan from "./edit_plan";

export default function PlanList() {
  const [plans, setPlans] = useState([]);
  const [activeTab, setActiveTab] = useState("active");
  const [editPlan, setEditPlan] = useState(null);
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

  const handleStatusToggle = async (planName, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    
    try {
      const response = await fetch('/api/change_plan_status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: planName,
          status: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update plan status');
      }

      const updatedPlans = plans.map((plan) =>
        plan.name === planName ? { ...plan, status: newStatus } : plan
      );
      setPlans(updatedPlans);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditClick = (plan) => {
    setEditPlan(plan);
  };

  const handleSave = (updatedPlan) => {
    const updated = plans.map((plan) =>
      plan.id === updatedPlan.id ? updatedPlan : plan
    );
    setPlans(updated);
    setEditPlan(null);
  };

  const handleCancel = () => {
    setEditPlan(null);
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
                onClick={() => handleStatusToggle(plan.name, plan.status)}
                className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
              >
                Mark as {plan.status === "active" ? "Inactive" : "Active"}
              </button>
            </div>
          ))}
      </div>

      {/* Edit Plan Popup */}
      {editPlan && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#020202] p-6 rounded-lg max-w-md w-md">
            <EditPlan plan={editPlan} onSave={handleSave} onCancel={handleCancel} />
          </div>
        </div>
      )}

      <div className="h-20">
      </div>
    </div>
  );
}
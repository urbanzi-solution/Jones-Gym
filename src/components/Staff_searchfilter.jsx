// src\components\Staff_searchfilter.jsx
"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

export default function Staff_searchfilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("searchQuery") || "");
  const [selectedPlan, setSelectedPlan] = useState(searchParams.get("plan") || "");
  const [plans, setPlans] = useState([]); // State for plans from fetch_plans
  const [trainersPlans, setTrainersPlans] = useState([]); // State for trainers_plans
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch plans and trainers_plans from APIs when component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch plans
        const plansResponse = await fetch('/api/fetch_plans');
        if (!plansResponse.ok) {
          throw new Error('Failed to fetch plans');
        }
        const plansData = await plansResponse.json();
        // Filter plans where status is "active" and map to plan names
        const activePlans = plansData
          .filter(plan => plan.status.toLowerCase() === "active")
          .map(plan => plan.name);
        setPlans(activePlans);

        // Fetch trainers_plans
        const trainersPlansResponse = await fetch('/api/fetch_trainers_plans');
        if (!trainersPlansResponse.ok) {
          throw new Error('Failed to fetch trainers plans');
        }
        const trainersPlansData = await trainersPlansResponse.json();
        setTrainersPlans(trainersPlansData);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const updateSearchParams = (newFilters) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`?${params.toString()}`);
  };

  const handlePlanClick = (plan) => {
    const newPlan = plan === selectedPlan ? "" : plan;
    setSelectedPlan(newPlan);
    updateSearchParams({
      plan: newPlan,
    });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    updateSearchParams({
      searchQuery: e.target.value,
    });
  };

  const clearFilters = () => {
    setSelectedPlan("");
    setSearchQuery("");
    router.push("?");
  };

  // Filter trainers based on selected plan
  const filteredTrainers = selectedPlan
    ? trainersPlans.filter(tp => tp.plan === selectedPlan).map(tp => tp.trainer)
    : trainersPlans.map(tp => tp.trainer);

  return (
    <div className="p-4 md:p-6 lg:p-10">
      {/* Search Input */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search Staff"
          value={searchQuery}
          onChange={handleSearchChange}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFDD4A] focus:border-transparent text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Filter Options */}
      <div className="relative">
        {/* Main Filter Bar */}
        <div className="flex justify-between gap-5 items-center md:text-xl p-3 rounded-lg">
          <span className="flex gap-2 md:gap-5">
            {selectedPlan && (
              <span className="text-sm md:text-base">
                Selected: {selectedPlan}
              </span>
            )}
          </span>
          <button
            onClick={toggleFilters}
            className="flex items-center gap-1 hover:text-[#FFDD4A] transition-colors"
          >
            <IoFilter className="text-[#FFDD4A]" />
            Plans
          </button>
        </div>

        {/* Expanded Filter Panel - Plans */}
        {showFilters && (
          <div className="absolute top-full left-0 right-0 z-50 bg-[#0a0a0a] rounded-xl shadow-lg mt-2 p-4 md:p-8 text-center border border-[#6e6e6e]">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-lg font-medium md:text-2xl">Active Plans</h2>
              <GrClose
                onClick={toggleFilters}
                className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
                size={18}
              />
            </div>
            {loading ? (
              <p>Loading plans...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : plans.length === 0 ? (
              <p>No active plans available.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {plans.map((plan) => (
                  <button
                    key={plan}
                    onClick={() => handlePlanClick(plan)}
                    className={`p-3 rounded-lg text-sm bg-[#232024] md:text-xl ${
                      selectedPlan === plan ? "border border-[#FFDD4A]" : "hover:border border-[#FFDD4A]"
                    }`}
                  >
                    {plan}
                  </button>
                ))}
              </div>
            )}
            <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-[#2B2E32]">
              <button
                onClick={clearFilters}
                className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800"
              >
                Clear
              </button>
              <button
                onClick={toggleFilters}
                className="px-4 py-2 rounded-lg bg-[#FFDD4A] text-black hover:bg-[#FFD700]"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
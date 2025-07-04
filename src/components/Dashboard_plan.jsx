"use client";
import { useState, useEffect } from "react";
import { IoPerson } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export default function DashboardActivePlans() {
  const router = useRouter();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch plans
        const plansResponse = await fetch('/api/fetch_plans');
        if (!plansResponse.ok) throw new Error('Failed to fetch plans');
        const plansData = await plansResponse.json();

        // Fetch membership plans
        const membershipsResponse = await fetch('/api/fetch_membership_plans');
        if (!membershipsResponse.ok) throw new Error('Failed to fetch membership plans');
        const membershipsData = await membershipsResponse.json();

        // Ensure membershipsData.data exists, as per the API response structure
        const membershipPlans = membershipsData.success ? membershipsData.data : [];

        // Calculate member count per plan
        const planMemberCounts = membershipPlans.reduce((acc, membership) => {
          if (membership.plan_name) {
            acc[membership.plan_name] = (acc[membership.plan_name] || 0) + 1;
          }
          return acc;
        }, {});

        // Map plans with member counts, ensuring only active plans are included
        const enrichedPlans = plansData
          .filter(plan => plan.status === 'active')
          .map(plan => ({
            id: plan.id,
            name: plan.name,
            amount: plan.amount,
            duration: plan.duration,
            members: planMemberCounts[plan.name] || 0
          }));

        setPlans(enrichedPlans);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="box">Loading...</div>;
  }

  if (error) {
    return <div className="box">Error: {error}</div>;
  }

  return (
    <div className="box">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-2xl">Active Plans</h2>
        <button 
          onClick={() => router.push('/plan-add')}
          className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
        >
          Add Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {plans.length > 0 ? (
          plans.map((plan) => (
            <div 
              key={plan.id}
              className="flex flex-col w-full gap-3 bg-[#232024] p-5 rounded-lg items-center justify-center sm:text-xl hover:bg-[#2E2A2D] transition-colors cursor-pointer"
              onClick={() => router.push(`/plans/${plan.id}`)}
            >
              <h4 className="text-center font-medium">{plan.name}</h4>
              <h3 className="text-[#FFDD4A] font-semibold">{plan.amount.toLocaleString()}/-</h3>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="flex items-center gap-1">
                  <IoPerson className="text-[#FFDD4A]" />
                  {plan.members}
                </span>
                <span>•</span>
                <span>{plan.duration} days</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-400">No active plans found.</div>
        )}
      </div>
    </div>
  );
}
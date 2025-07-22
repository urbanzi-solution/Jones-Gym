"use client";
import React, { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { useSearchParams } from "next/navigation";

export default function Person_understaff() {
  const [plansData, setPlansData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const trainerId = searchParams.get("trainer_id");

  useEffect(() => {
    async function fetchMembershipPlans() {
      try {
        const response = await fetch("/api/fetch_membership_plans");
        if (!response.ok) {
          throw new Error("Failed to fetch membership plans");
        }
        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || "Failed to fetch membership plans");
        }

        // Filter plans by trainerId and aggregate counts by plan_name
        const filteredPlans = result.data
          .filter((plan) => plan.trainer === trainerId)
          .reduce((acc, plan) => {
            const planName = plan.plan_name;
            if (!acc[planName]) {
              acc[planName] = {
                plan_name: planName,
                count: 0,
                name: plan.name, // Retain name for display (using the first occurrence)
                date: plan.date, // Retain date for display (using the first occurrence)
              };
            }
            acc[planName].count += 1;
            return acc;
          }, {});

        // Convert aggregated data to array format for rendering
        const plansArray = Object.values(filteredPlans);

        setPlansData(plansArray);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    if (trainerId) {
      fetchMembershipPlans();
    }
  }, [trainerId]);

  if (loading) {
    return <div className="p-5 md:p-10">Loading...</div>;
  }

  if (error) {
    return <div className="p-5 md:p-10">Error: {error}</div>;
  }

  return (
    <div className="p-5 md:p-10">
      {plansData.length > 0 ? (
        plansData.map((plan, index) => (
          <div
            key={index}
            className="bg-[#2B2E32] grid grid-cols-2 md:grid-cols-4 items-center justify-center text-center text-lg sm:text-xl md:text-2xl font-bold rounded-2xl mb-5 md:mb-10"
          >
            <h2 className="bg-[#FFDD4A] py-4 md:py-6 text-black rounded-2xl">
              {plan.name}
            </h2>
            {/*<span className="py-4 md:py-6">{plan.plan_name}</span>*/}
            {/*<span className="flex gap-1 md:gap-2 justify-center items-center">
              <IoPerson className="text-[#FFDD4A]" />
              <h2>{plan.count}</h2>
            </span>*/}
            
            <span className="flex gap-1 md:gap-2 justify-center items-center">
              <IoPerson className="text-[#FFDD4A]" />
              <h2>Plans - {plan.count}</h2>
              {/*<h2>{new Date(plan.date).toLocaleDateString()}</h2>*/}
            </span>
          </div>
        ))
      ) : (
        <div className="text-center text-lg sm:text-xl md:text-2xl">
          No membership plans found for this trainer.
        </div>
      )}
    </div>
  );
}
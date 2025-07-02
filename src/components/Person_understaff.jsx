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
        const data = await response.json();
        
        // Filter plans by trainerId and aggregate counts by plan_name
        const filteredPlans = data
          .filter((plan) => plan.trainer === trainerId)
          .reduce((acc, plan) => {
            const planName = plan.plan_name;
            acc[planName] = (acc[planName] || 0) + 1;
            return acc;
          }, {});

        // Convert aggregated data to array format for rendering
        const plansArray = Object.entries(filteredPlans).map(([planName, count]) => ({
          planName,
          count,
        }));

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
            className="bg-[#2B2E32] grid grid-cols-2 items-center justify-center text-center text-lg sm:text-xl md:text-4xl font-bold rounded-2xl mb-5 md:mb-10"
          >
            <h2 className="bg-[#FFDD4A] py-4 md:py-6 text-black rounded-2xl">
              {plan.planName}
            </h2>
            <span className="flex gap-1 md:gap-2 justify-center items-center">
              <IoPerson className="text-[#FFDD4A]" />
              <h2>{plan.count}</h2>
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
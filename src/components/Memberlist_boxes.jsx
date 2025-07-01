"use client";
import { useState, useEffect } from 'react';

export default function Memberlist_boxes({ members, filters }) {
  const [membershipPlans, setMembershipPlans] = useState([]);
  const currentDate = new Date();

  // Fetch membership plans data
  useEffect(() => {
    const fetchMembershipPlans = async () => {
      try {
        const response = await fetch('/api/fetch_membership_plans');
        if (!response.ok) {
          throw new Error('Failed to fetch membership plans');
        }
        const data = await response.json();
        setMembershipPlans(data);
      } catch (error) {
        console.error('Error fetching membership plans:', error);
      }
    };
    fetchMembershipPlans();
  }, []);

  const filteredMembers = members.filter((member) => {
    // Find matching membership plan for the member
    const memberPlan = membershipPlans.find(
      (plan) => plan.user_id === member.user_id
    );
    const expiryDate = memberPlan ? new Date(memberPlan.exp_date) : null;

    // Inactive filter
    if (filters.inactive) {
      if (expiryDate && expiryDate >= currentDate) return false;
    } else if (filters.active) {
      if (expiryDate && expiryDate < currentDate) return false;
    }

    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      if (
        !member.name?.toLowerCase().includes(query) &&
        !member.user_id?.toLowerCase().includes(query)
      ) {
        return false;
      }
    }

    // Gender filter
    if (filters.gender && member.gender?.toLowerCase() !== filters.gender.toLowerCase()) {
      return false;
    }

    // Status filter
    if (filters.status) {
      const isExpired = expiryDate && expiryDate < currentDate;
      if (filters.status === "Active" && isExpired) return false;
      if (filters.status === "Inactive" && !isExpired) return false;
      if (filters.status === "Blacklisted" && member.status?.toLowerCase() !== "blacklisted") {
        return false;
      }
    }

    // Payment filter
    if (filters.payment) {
      if (
        (filters.payment === "Fully paid" && member.balance > 0) ||
        (filters.payment === "With Balance" && member.balance === 0)
      ) {
        return false;
      }
    }

    // Plan filter
    if (filters.plan && member.membership_type?.toLowerCase() !== filters.plan.toLowerCase()) {
      return false;
    }

    // Expiry Within filter
    if (filters.expiryWithin) {
      if (!expiryDate) return false;
      const daysUntilExpiry = Math.max(
        0,
        Math.floor((expiryDate - currentDate) / (1000 * 60 * 60 * 24))
      );
      const days = parseInt(filters.expiryWithin);
      if (daysUntilExpiry > days) return false;
    }

    // Date Range filter
    if (filters.startDate && filters.endDate) {
      if (!expiryDate) return false;
      if (expiryDate < filters.startDate || expiryDate > filters.endDate) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="p-4">
      {filteredMembers.length > 0 ? (
        filteredMembers.map((member, index) => {
          const memberPlan = membershipPlans.find(
            (plan) => plan.user_id === member.user_id
          );
          const expiryDate = memberPlan ? new Date(memberPlan.exp_date) : null;
          const daysUntilExpiry = expiryDate
            ? Math.max(0, Math.floor((expiryDate - currentDate) / (1000 * 60 * 60 * 24)))
            : 0;
          const isExpired = expiryDate && expiryDate < currentDate;

          return (
            <a
              key={member.user_id || `member-${index}`}
              className="flex justify-between items-center p-4 mb-4 border rounded-lg hover:bg-[#2B2E32]"
              href={`/member-profile?member_id=${member.user_id || 'unknown'}`}
            >
              <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                <img
                  className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full"
                  src={member.image_url || "/images/user1.jpg"}
                  alt={member.name || "Member"}
                />
                <span className="flex flex-col gap-1 text-sm sm:text-xl lg:text-2xl">
                  <h3 className="font-semibold">{member.name || "Member name"}</h3>
                  <h4>{member.user_id || "member_id"}</h4>
                  <p className={isExpired ? "text-red-600" : "text-green-600"}>
                    {expiryDate
                      ? expiryDate.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "01-01-2000"}
                  </p>
                  <p className="text-yellow-500 text-sm md:text-lg">Note: Remarks</p>
                </span>
              </div>
              <span className="flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl">
                <p
                  className={`px-2 py-1 rounded-full border border-white text-center ${
                    isExpired ? "bg-red-600" : "bg-green-600"
                  }`}
                >
                  {isExpired ? "Expired" : "Not Expired"}
                </p>
                <p className="bg-[#232024] px-2 py-1 rounded-full border border-white text-center">
                  {member.membership_type || "Basic Gym"}
                </p>
              </span>
            </a>
          );
        })
      ) : (
        <p className="text-center text-gray-500">No members found.</p>
      )}
    </div>
  );
}
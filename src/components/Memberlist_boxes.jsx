"use client";
import { useState, useEffect } from 'react';

export default function Memberlist_boxes({ members, filters }) {
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [remarkData, setRemarkData] = useState({});
  const currentDate = new Date();
  const currentDateOnly = currentDate.toISOString().split('T')[0]; // e.g., '2025-07-01'

  // Helper function to get date only (YYYY-MM-DD)
  const getDateOnly = (date) => {
    if (!date) return null;
    try {
      const parsedDate = new Date(date);
      if (isNaN(parsedDate)) return null;
      return parsedDate.toISOString().split('T')[0];
    } catch (error) {
      console.error(`Error parsing date ${date}:`, error);
      return null;
    }
  };

  // Fetch membership plans data
  useEffect(() => {
    const fetchMembershipPlans = async () => {
      try {
        const response = await fetch('/api/fetch_membership_plans');
        if (!response.ok) {
          throw new Error('Failed to fetch membership plans');
        }
        const data = await response.json();
        setMembershipPlans(data.data);
      } catch (error) {
        console.error('Error fetching membership plans:', error);
      }
    };
    fetchMembershipPlans();
  }, []);

  // Fetch remark and blacklist data
  useEffect(() => {
    const fetchRemarkBlacklist = async () => {
      try {
        const response = await fetch('/api/fetch_remark_blcklist');
        if (!response.ok) {
          throw new Error('Failed to fetch remark and blacklist data');
        }
        const data = await response.json();
        // Create a lookup object for remarks and blacklist status
        const remarkLookup = {};
        data.forEach(item => {
          remarkLookup[item.userId] = {
            remark: item.remark || 'No Remarks',
            blacklistStatus: item.blacklistDescription ? 'Black-listed' : 'Not Black-listed'
          };
        });
        setRemarkData(remarkLookup);
      } catch (error) {
        console.error('Error fetching remark and blacklist data:', error);
      }
    };
    fetchRemarkBlacklist();
  }, []);

  const filteredMembers = members.filter((member) => {
    // Find matching membership plan
    const memberPlan = membershipPlans.find(
      (plan) => plan.user_id === member.user_id
    );
    const expiryDateOnly = memberPlan ? getDateOnly(memberPlan.exp_date) : null;
    const joiningDate = member.joining_date ? new Date(member.joining_date) : null;

    // Active/Inactive filter (based on expiry dates)
    let passesActiveInactive = true;
    if (filters.active && !filters.inactive) {
      passesActiveInactive = expiryDateOnly && expiryDateOnly >= currentDateOnly;
      if (!passesActiveInactive) return false;
    } else if (filters.inactive && !filters.active) {
      passesActiveInactive = !expiryDateOnly || expiryDateOnly < currentDateOnly;
      if (!passesActiveInactive) return false;
    }

    // Status filter (for "Active", "Blacklisted", etc.)
    if (filters.status) {
      const filterStatus = filters.status.toLowerCase();
      
      // Handle "Active" status filter - members with non-expired memberships
      if (filterStatus === "active") {
        const isActiveByExpiry = expiryDateOnly && expiryDateOnly >= currentDateOnly;
        if (!isActiveByExpiry) {
          return false;
        }
      }

      // Handle "Inactive" status filter - members with expired memberships
      else if (filterStatus === "inactive") {
        const isInactiveByExpiry = !expiryDateOnly || expiryDateOnly < currentDateOnly;
        if (!isInactiveByExpiry) {
          return false;
        }
      }

      // Handle "Blacklisted" status filter
      else if (filterStatus === "blacklisted") {
        if (member.status?.toLowerCase() !== "blacklisted") {
          return false;
        }
      }
      // Handle other status filters by comparing member.status
      else {
        if (member.status?.toLowerCase() !== filterStatus) {
          return false;
        }
      }
    }

    // Joining Date Range filter
    if (filters.startDate && filters.endDate && joiningDate) {
      const joiningDateOnly = getDateOnly(joiningDate);
      const startDateOnly = getDateOnly(filters.startDate);
      const endDateOnly = getDateOnly(filters.endDate);
      if (joiningDateOnly < startDateOnly || joiningDateOnly > endDateOnly) {
        return false;
      }
    }

    // Gender filter
    if (filters.gender && member.gender?.toLowerCase() !== filters.gender.toLowerCase()) {
      return false;
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

    // Payment filter
    if (filters.payment && memberPlan) {
      const balance = memberPlan.balance || 0;
      if (
        (filters.payment === "Fully paid" && balance > 0) ||
        (filters.payment === "With Balance" && balance === 0)
      ) {
        return false;
      }
    }

    // Plan filter
    if (filters.plan && memberPlan?.plan_name?.toLowerCase() !== filters.plan.toLowerCase()) {
      return false;
    }

    // Expiry Within filter
    if (filters.expiryWithin && expiryDateOnly) {
      const expiryDateObj = new Date(expiryDateOnly);
      const daysUntilExpiry = Math.floor((expiryDateObj - new Date(currentDateOnly)) / (1000 * 60 * 60 * 24));
      const days = parseInt(filters.expiryWithin) || 0;
      
      // Only show members whose expiry exactly matches the specified days
      if (daysUntilExpiry !== days) {
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
          const expiryDateOnly = memberPlan ? getDateOnly(memberPlan.exp_date) : null;
          const daysUntilExpiry = expiryDateOnly
            ? Math.max(
                0,
                Math.floor(
                  (new Date(expiryDateOnly) - new Date(currentDateOnly)) /
                    (1000 * 60 * 60 * 24)
                )
              )
            : 0;
          const isExpired = expiryDateOnly && expiryDateOnly < currentDateOnly;
          const memberRemark = remarkData[member.user_id]?.remark || 'No Remarks';
          const memberBlacklistStatus = remarkData[member.user_id]?.blacklistStatus || 'Not Black-listed';

          return (
            <a
              key={member.user_id || `member-${index}`}
              className="flex justify-between items-center p-4 mb-4 border rounded-lg hover:bg-[#2B2E32]"
              href={`/member-profile?member_id=${member.user_id || 'unknown'}`}
            >
              <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                <img
                  className="w-16 h-16 sm:32 sm:h-32 lg:w-40 lg:h-40 object-cover border-2 rounded-full"
                  src={member.image_url || "/images/user1.jpg"}
                  alt={member.name || "Member"}
                />
                <span className="flex flex-col gap-1 text-sm sm:text-xl lg:text-2xl">
                  <h3 className="font-semibold">{member.name || "Member name"}</h3>
                  <h4>{member.user_id || "member_id"}</h4>
                  <p className={isExpired ? "text-red-600" : "text-green-600"}>
                    {expiryDateOnly || "01-01-2000"}
                  </p>
                  <p className={memberRemark === 'No Remarks' ? "text-white" : "text-yellow-600"}>
                    Note: {memberRemark}
                  </p>
                  <p className={memberBlacklistStatus === 'Black-listed' ? "text-red-600" : "text-green-600"}>
                    Blacklist Status: {memberBlacklistStatus}
                  </p>
                </span>
              </div>
              <span className="flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl">
                <p
                  className={`px-2 py-1 rounded-full border border-white text-center ${
                    isExpired ? "bg-red-800" : "bg-green-800"
                  }`}
                >
                  {isExpired ? "Expired" : "Not Expired"}
                </p>
                <p className="bg-[#232024] px-2 py-1 rounded-full border border-white text-center">
                  {memberPlan?.plan_name || "Basic Gym"}
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
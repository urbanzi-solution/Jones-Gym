"use client";
import { useState, useEffect } from 'react';

export default function Memberlist_boxes({ members, filters }) {
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [remarkData, setRemarkData] = useState({});
  const currentDate = new Date();
  const currentDateOnly = currentDate.toISOString().split('T')[0]; // e.g., '2025-07-09'

  console.log(members);

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

  // Check if any member has an active membership plan
  const hasActiveMember = members.some((member) => {
    const memberPlan = membershipPlans.find(
      (plan) => plan.user_id === member.user_id
    );
    const expiryDateOnly = memberPlan ? getDateOnly(memberPlan.exp_date) : null;
    return expiryDateOnly && expiryDateOnly >= currentDateOnly;
  });

  // Check if filters are empty or unset
  const isFiltersEmpty = !filters || Object.keys(filters).every(
    key => filters[key] === null || filters[key] === undefined || filters[key] === '' || 
    (typeof filters[key] === 'boolean' && !filters[key])
  );

  const filteredMembers = isFiltersEmpty ? members : members.filter((member) => {
    const memberPlan = membershipPlans.find(
      (plan) => plan.user_id === member.user_id
    );
    const expiryDateOnly = memberPlan ? getDateOnly(memberPlan.exp_date) : null;
    const joiningDate = member.joining_date ? new Date(member.joining_date) : null;

    // Active/Inactive filter
    let passesActiveInactive = true;
    if (filters.active && !filters.inactive) {
      passesActiveInactive = expiryDateOnly && expiryDateOnly >= currentDateOnly;
    } else if (filters.inactive && !filters.active) {
      passesActiveInactive = !expiryDateOnly || expiryDateOnly < currentDateOnly;
    }

    // Status filter
    if (filters.status) {
      const filterStatus = filters.status.toLowerCase();
      if (filterStatus === "active") {
        // If status is "Active", only proceed if there is at least one active member
        if (!hasActiveMember) {
          return false;
        }
        // Allow both active and inactive members to pass if hasActiveMember is true
      } else if (filterStatus === "inactive") {
        const isInactiveByExpiry = !expiryDateOnly || expiryDateOnly < currentDateOnly;
        if (!isInactiveByExpiry) {
          return false;
        }
      } else if (filterStatus === "blacklisted") {
        if (member.status?.toLowerCase() !== "blacklisted") {
          return false;
        }
      } else {
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
      if (daysUntilExpiry !== days) {
        return false;
      }
    }

    return passesActiveInactive;
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

          // Check if the member should be displayed based on filter status and plan validity
          const hasValidPlan = isFiltersEmpty || membershipPlans.some((plan) => {
            if (plan.user_id !== member.user_id) return false;
            const planExpiryDateOnly = getDateOnly(plan.exp_date) || "01-01-2000";
            const isPlanExpired = planExpiryDateOnly < currentDateOnly;
            return (
              (filters.status?.toLowerCase() === "active" && !isPlanExpired) ||
              (filters.status?.toLowerCase() === "inactive" && isPlanExpired) ||
              !filters.status
            );
          });

          // Only render the member box if they have a valid plan matching the filter
          if (!hasValidPlan) return null;

          return (
            <a
              key={member.user_id || `member-${index}`}
              className="flex justify-between items-center p-4 mb-4 border rounded-lg hover:bg-[#2B2E32]"
              href={`/member-profile?member_id=${member.user_id || 'unknown'}`}
            >
              <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">
                <img
                  loading="lazy"
                  className="w-16 h-16 sm:h-22 sm:w-22 lg:w-40 lg:h-40 object-cover border-2 rounded-full"
                  src={member.user_id ? `/images/user_pic/${member.user_id}.png` : "/images/user1.jpg"}
                  alt={member.name || "Member"}
                  onError={(e) => {
                    e.target.src = "/images/user1.jpg";
                  }}
                />
                
                <span className="flex flex-col gap-1 text-sm sm:text-xl lg:text-2xl">
                  <h3 className="font-semibold">{member.name || "Member name"}</h3>
                  <h4>{member.user_id || "member_id"}</h4>
                  {memberRemark !== 'No Remarks' && (
                    <p className="text-yellow-600">
                      Note: {memberRemark}
                    </p>
                  )}
                  {memberBlacklistStatus === 'Black-listed' && (
                    <p className="text-red-600">
                      Blacklist Status: {memberBlacklistStatus}
                    </p>
                  )}
                </span>
              </div>
              <span className="flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl">
                {memberBlacklistStatus === 'Black-listed' ? (
                  <p className="px-2 py-1 rounded-full border border-white text-center bg-red-600">
                    This member is Blacklisted
                  </p>
                ) : (
                  membershipPlans
                    .filter((plan) => plan.user_id === member.user_id)
                    .reduce((uniquePlans, plan) => {
                      const planExpiryDateOnly = getDateOnly(plan.exp_date) || "01-01-2000";
                      const isPlanExpired = planExpiryDateOnly < currentDateOnly;
                      // Calculate days difference between expiry date and today
                      const expiryDate = new Date(planExpiryDateOnly);
                      const currentDate = new Date(currentDateOnly);
                      const daysDifference = Math.floor((currentDate - expiryDate) / (1000 * 60 * 60 * 24));
                      // Determine if the plan should be displayed based on filter status and expiry date
                      const shouldDisplay = (daysDifference <= 60 || !isPlanExpired) && (
                        isFiltersEmpty || (
                          (filters.status?.toLowerCase() === "active" && !isPlanExpired) ||
                          (filters.status?.toLowerCase() === "inactive" && isPlanExpired) ||
                          !filters.status
                        )
                      );

                      // Check for duplicate plan_name
                      const existingPlan = uniquePlans.find(p => p.plan_name === plan.plan_name);
                      if (shouldDisplay) {
                        if (existingPlan) {
                          // If plan_name exists, keep the active one (not expired) or the one with the later expiry date
                          if (!isPlanExpired && (existingPlan.isPlanExpired || new Date(planExpiryDateOnly) > new Date(existingPlan.planExpiryDateOnly))) {
                            const index = uniquePlans.indexOf(existingPlan);
                            uniquePlans[index] = { ...plan, isPlanExpired, planExpiryDateOnly };
                          }
                        } else {
                          // Add new plan if no duplicate
                          uniquePlans.push({ ...plan, isPlanExpired, planExpiryDateOnly });
                        }
                      }
                      return uniquePlans;
                    }, [])
                    .map((plan, index) => (
                      <p
                        key={`${plan.user_id}-${plan.plan_name}-${index}`}
                        className={`px-2 py-1 rounded-full border border-white text-center ${
                          plan.isPlanExpired ? "bg-red-600" : "bg-green-600"
                        }`}
                      >
                        {plan.plan_name || "Basic Gym"} ({plan.planExpiryDateOnly})
                      </p>
                    ))
                )}
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
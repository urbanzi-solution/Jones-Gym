"use client";
import { useState, useEffect } from 'react';
import MemberAvatar  from "@/components/MemberAvatar";

export default function Memberlist_boxes({ members, filters }) {
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [remarkData, setRemarkData] = useState({});
  const [transactions, setTransactions] = useState([]);
  const currentDate = new Date();
  const currentDateOnly = currentDate.toISOString().split('T')[0];

  console.log("filters",filters)
  console.log("members",members)
  console.log("membershipPlans",membershipPlans)

  // Convert any date string or Date object to IST Date object
  const toISTDate = (dateInput) => {
    if (!dateInput) return null;
    const date = new Date(dateInput);
    if (isNaN(date)) return null;
    // Get UTC time, add IST offset (5.5 hours)
    return new Date(date.getTime() + (5.5 * 60 * 60 * 1000));
  };

  // Extracts only the date part (YYYY-MM-DD) from ISO string
  const getDateOnly = (dateStr) => {
    if (!dateStr) return '';
    if (typeof dateStr === 'string' && dateStr.includes('T')) {
      return dateStr.split('T')[0];
    }
    const date = new Date(dateStr);
    if (isNaN(date)) return '';
    return date.toISOString().split('T')[0];
  };

  // Formats YYYY-MM-DD as dd/mm/yyyy
  const formatDateIndian = (dateStr) => {
    const dateOnly = getDateOnly(dateStr);
    if (!dateOnly) return '';
    const [year, month, day] = dateOnly.split('-');
    return `${day}/${month}/${year}`;
  };

  // Fetch transactions data
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/api/fetch_all_transactions');
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        const data = await response.json();
        setTransactions(data.data || []);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, []);

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

  // Filtering logic
  let filteredMembers = isFiltersEmpty ? members : members.filter((member) => {
    const memberPlan = membershipPlans.find(
      (plan) => plan.user_id === member.user_id
    );
    const expiryDateOnly = memberPlan ? getDateOnly(memberPlan.exp_date) : null;

    // Active/Inactive filter
    let passesActiveInactive = true;
    if (filters.active && !filters.inactive) {
      passesActiveInactive = expiryDateOnly && expiryDateOnly >= currentDateOnly;
    } else if (filters.inactive && !filters.active) {
      passesActiveInactive = !expiryDateOnly || expiryDateOnly < currentDateOnly;
    }

    if (filters.status) {
      const filterStatus = filters.status.toLowerCase();
      if (filterStatus === "active") {
        if (!hasActiveMember || remarkData[member.user_id]?.blacklistStatus === 'Black-listed') {
          return false;
        }
      } else if (filterStatus === "inactive") {
        const isInactiveByExpiry = !expiryDateOnly || expiryDateOnly < currentDateOnly;
        if (!isInactiveByExpiry) {
          return false;
        }
      } else if (filterStatus === "blacklisted") {
        // const memberRemarkData = remarkData[member.user_id];
        const memberRemarkData = remarkData[member.user_id];
        // console.log("memberRemarkData", memberRemarkData);
        if (!memberRemarkData || memberRemarkData.blacklistStatus !== "Black-listed") {
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

    // Expiry Date Range filter
    if (filters.expiryStartDate && filters.expiryEndDate && expiryDateOnly) {
      const expiryStartDateOnly = getDateOnly(filters.expiryStartDate);
      const expiryEndDateOnly = getDateOnly(filters.expiryEndDate);
      if (expiryDateOnly < expiryStartDateOnly || expiryDateOnly > expiryEndDateOnly) {
        return false;
      }
    }

    // Expiry Within Date Range filter (in IST)
    if (filters.expiryWithinStartDate && filters.expiryWithinEndDate && expiryDateOnly) {
      const expiryWithinStartIST = toISTDate(filters.expiryWithinStartDate);
      const expiryWithinEndIST = toISTDate(filters.expiryWithinEndDate);
      const expiryDateIST = toISTDate(expiryDateOnly);

      if (!expiryDateIST || expiryDateIST < expiryWithinStartIST || expiryDateIST > expiryWithinEndIST) {
        return false;
      }
    }

    // Gender filter
    if (filters.gender && member.gender?.toLowerCase() !== filters.gender.toLowerCase()) {
      return false;
    }

    // Search text in all member fields if filters.searchQuery is set
    if (filters.searchQuery && filters.searchQuery.trim() !== "") {
      const searchLower = filters.searchQuery.toLowerCase();
      const memberValues = Object.values(member).map(v => (v || '').toString().toLowerCase());
      if (!memberValues.some(val => val.includes(searchLower))) {
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

  // Sorting the Member Data
  let sortedMembers = filteredMembers.slice();

  // Custom sort for expiryWithinStartDate/expiryWithinEndDate
  if (filters?.expiryWithinStartDate && filters?.expiryWithinEndDate) {
    sortedMembers.sort((a, b) => {
      const aPlan = membershipPlans.find(plan => plan.user_id === a.user_id);
      const bPlan = membershipPlans.find(plan => plan.user_id === b.user_id);
      const aExpiry = aPlan ? getDateOnly(aPlan.exp_date) : null;
      const bExpiry = bPlan ? getDateOnly(bPlan.exp_date) : null;
      if (!aExpiry && !bExpiry) return 0;
      if (!aExpiry) return 1;
      if (!bExpiry) return -1;
      return new Date(aExpiry) - new Date(bExpiry);
    });
  } else if (filters?.nameSortDirection === "atoz") {
    sortedMembers.sort((a, b) => {
      const nameA = (a.name || "").toLowerCase();
      const nameB = (b.name || "").toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  } else if (filters?.nameSortDirection === "ztoa") {
    sortedMembers.sort((a, b) => {
      const nameA = (a.name || "").toLowerCase();
      const nameB = (b.name || "").toLowerCase();
      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0;
    });
  } else if (filters?.sortDirection) {
    const isAscending = filters.sortDirection === "asc";
    if (!isAscending) {
      sortedMembers.reverse();
    }
  }

  // Handle "With Balance" payment filter and balance checking
  // Handle "With Balance" payment filter
if (filters?.payment === "With Balance") {
  sortedMembers = sortedMembers.filter(member => {
    // Get all membership plans for this user
    const userMembershipPlans = membershipPlans.filter(
      plan => plan.user_id === member.user_id
    );
    
    // Check if user has at least one plan with non-zero balance that passes all checks
    let hasValidPlan = false;
    
    for (const plan of userMembershipPlans) {
      // Skip plans with 0 balance
      if (plan.balance === 0) {
        continue;
      }
      
      // Check transactions where old_bill matches this plan's bill_no
      const matchingTransactions = transactions.filter(
        transaction => transaction.old_bill === plan.bill_no
      );
      
      // Check if any matching transaction has balance 0
      const hasZeroBalanceTransaction = matchingTransactions.some(
        transaction => transaction.balance === 0
      );
      
      // If this plan has non-zero balance and no zero-balance transactions, it's valid
      if (!hasZeroBalanceTransaction) {
        hasValidPlan = true;
        break; // Found at least one valid plan, no need to check others
      }
    }
    
    // Keep the member if they have at least one valid plan
    return hasValidPlan;
  });
}

  console.log("sortedMembers",sortedMembers)

  return (
    <div className="Memberlist_boxes p-4">
      {sortedMembers.length > 0 ? (
        sortedMembers.map((member, index) => {
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
          const hasValidPlan = isFiltersEmpty || 
            (filters.status?.toLowerCase() === "blacklisted" && memberBlacklistStatus === 'Black-listed') ||
            membershipPlans.some((plan) => {
              if (plan.user_id !== member.user_id) return false;
              const planExpiryDateOnly = getDateOnly(plan.exp_date) || "01-01-2000";
              const isPlanExpired = planExpiryDateOnly < currentDateOnly;
              return (
                (filters.status?.toLowerCase() === "active" && !isPlanExpired) ||
                (filters.status?.toLowerCase() === "inactive" && isPlanExpired) ||
                !filters.status
              );
            });

          if (!hasValidPlan) return null;

          return (
            <a
              key={member.user_id || `member-${index}`}
              className="flex justify-between items-center p-4 mb-4 border rounded-lg hover:bg-[#2B2E32]"
              href={`/member-profile?member_id=${member.user_id || 'unknown'}`}
            >
              <div className="flex gap-3 items-center sm:gap-5 lg:gap-10">

                <MemberAvatar member={member} />

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
                        {plan.plan_name || "Basic Gym"} ({formatDateIndian(plan.planExpiryDateOnly)})
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
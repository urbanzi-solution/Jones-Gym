### // src\components\Recent_transations.jsx
---

```jsx
"use client";
import { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { CiCreditCard1 } from "react-icons/ci";

export default function Recent_transations({ userId }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log('userId:', userId); // Debug userId
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/api/fetch_membership_plans');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { success, data, error } = await response.json();
        if (!success) {
          throw new Error(error || 'API request failed');
        }
        const filteredTransactions = data
          .filter(transaction => transaction.user_id == userId) // Use == for type coercion
          .map(transaction => {
            console.log('Transaction date:', transaction.date); // Debug date
            return transaction;
          })
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);
        setTransactions(filteredTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setTransactions([]);
      }
    };

    if (userId) {
      fetchTransactions();
    }
  }, [userId]);

  // Function to render the appropriate icon based on trans_type
  const getTransactionIcon = (transType) => {
    switch (transType) {
      case 'GPay':
        return <FaGooglePay className="size-8 md:size-12" />;
      case 'Cash':
        return <HiOutlineCash className="size-8 md:size-12" />;
      case 'Credit Card':
        return <CiCreditCard1 className="size-8 md:size-12" />;
      case 'Bank Transfer':
        return <FaPiggyBank className="size-8 md:size-12" />;
      case 'Other':
        return <span className="text-lg md:text-xl">Other</span>;
      default:
        return null;
    }
  };

  return (
    <div className="box">
      <div className="flex justify-between items-center text-lg md:text-xl font-semibold lg:text-2xl">
        <h2>Recent Transactions</h2>
        <a href={`/transations?userId=${userId}`}><FaArrowRight /></a>
      </div>

      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-[#181818] px-4 py-2 rounded-lg my-5 md:px-8 md:py-4"
        >
          <div className="flex gap-2 items-center md:gap-5">
            {getTransactionIcon(transaction.trans_type)}
            <div className="md:text-xl ml-2">
              <h2>{transaction.plan_name}</h2>
              <p>{new Date(transaction.date).toLocaleDateString()}</p>
            </div>
          </div>
          <p className="text-lg text-[#71CA35] md:text-xl">{transaction.amount}</p>
          <p className="text-lg text-[#B30000] md:text-xl">{transaction.balance}</p>
        </div>
      ))}
    </div>
  );
}
```
---


### // src\components\Memberlist_boxes.jsx
---

```jsx
"use client";
import { useState, useEffect } from 'react';
import MemberAvatar  from "@/components/MemberAvatar";

export default function Memberlist_boxes({ members, filters }) {
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [remarkData, setRemarkData] = useState({});
  const currentDate = new Date();
  const currentDateOnly = currentDate.toISOString().split('T')[0];

  console.log("filters",filters)
  console.log("members",members)

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

        // console.log("data",data);
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
    
    // console.log(`Member ${member.user_id} blacklist status:`, 
    //   remarkData[member.user_id]?.blacklistStatus || 'Not in remarkData');

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

    // Expiry Within Date Range filter
    if (filters.expiryWithinStartDate && filters.expiryWithinEndDate && expiryDateOnly) {
      const expiryWithinStartDateOnly = getDateOnly(filters.expiryWithinStartDate);
      const expiryWithinEndDateOnly = getDateOnly(filters.expiryWithinEndDate);
      if (expiryDateOnly < expiryWithinStartDateOnly || expiryDateOnly > expiryWithinEndDateOnly) {
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
```
---


### // src\components\Balance_form.jsx
---

```jsx
// src\components\Balance_form.jsx
"use client";
import { useState, useEffect } from 'react';

export default function Balance_form({ user_id, membershipPlans, onCancel, username }) {
  const [selectedPlan, setSelectedPlan] = useState(membershipPlans?.[0]?.plan_name || '');
  const [newAmountReceived, setNewAmountReceived] = useState(0);
  const [formData, setFormData] = useState({
    amountPaid: membershipPlans?.[0]?.amount || 0,
    discount: membershipPlans?.[0]?.discount || 0,
    bill_no: membershipPlans?.[0]?.bill_no || '',
    new_bill_no: membershipPlans?.[0]?.new_bill_no || '',
    trainer: membershipPlans?.[0]?.trainer || '',
    balance: membershipPlans?.[0]?.balance || 0,
  });
  const [transactionsData, setTransactionsData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [trainers, setTrainers] = useState([]);

  // Calculate balance using transaction data if available, otherwise use form balance
  const balance = Math.max(0, (formData.balance || 0) - (newAmountReceived || 0));
  const totalAmountReceived = (formData.amountPaid || 0) + (newAmountReceived || 0);

  // Fetch transactions data from API using URL parameters
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(`/api/fetch_transactions?user_id=${encodeURIComponent(user_id)}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const response_data = await response.json();
          const transactions = response_data.data || [];
          setTransactionsData(transactions);
          console.log("Fetched transactions:", transactions);
        } else {
          throw new Error('Failed to fetch transactions');
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setMessage({ text: 'Failed to load transaction data. Please try again.', type: 'error' });
      }
    };
    
    if (user_id) {
      fetchTransactions();
    }
  }, [user_id]);

  // Fetch trainers from API
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch('/api/fetch_trainers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTrainers(data);
          console.log("Fetched trainers:", data);
        } else {
          throw new Error('Failed to fetch trainers');
        }
      } catch (error) {
        console.error('Error fetching trainers:', error);
        setMessage({ text: 'Failed to load trainers. Please try again.', type: 'error' });
      }
    };
    fetchTrainers();
  }, []);

  // Update form data when selected plan changes
  useEffect(() => {
    // Get the base plan data from membershipPlans
    const plan = membershipPlans?.find(p => p.plan_name === selectedPlan) || membershipPlans?.[0] || {};
    
    // Update form with base plan data - ensure all values have defaults
    let updatedFormData = {
      amountPaid: plan.amount || 0,
      discount: plan.discount || 0,
      bill_no: plan.bill_no || '',
      new_bill_no: plan.new_bill_no || '',
      trainer: plan.trainer || '',
      balance: plan.balance || 0,
    };

    // If transactions are available, find the latest transaction matching the bill_no
    if (transactionsData.length > 0 && selectedPlan && updatedFormData.bill_no) {
      const matchingTransactions = transactionsData.filter(
        transaction => 
          transaction.old_bill === updatedFormData.bill_no && 
          transaction.user_id === user_id &&
          transaction.plan_name === selectedPlan
      );
      
      if (matchingTransactions.length > 0) {
        // Find the latest transaction by created_at timestamp
        const latestTransaction = matchingTransactions.reduce((latest, current) => {
          const latestDate = new Date(latest.created_at);
          const currentDate = new Date(current.created_at);
          return currentDate > latestDate ? current : latest;
        });

        console.log("Latest transaction matching bill_no:", updatedFormData.bill_no, latestTransaction);
        
        // Update form with the latest transaction data - ensure all values have defaults
        updatedFormData = {
          amountPaid: latestTransaction.amount || 0,
          discount: updatedFormData.discount || 0,
          bill_no: latestTransaction.old_bill || updatedFormData.bill_no || '',
          new_bill_no: updatedFormData.new_bill_no || '',
          trainer: latestTransaction.trainer || updatedFormData.trainer || '',
          balance: latestTransaction.balance || 0,
        };
      }
    }

    setFormData(updatedFormData);
    setNewAmountReceived(0);
    setMessage({ text: '', type: '' });
  }, [selectedPlan, transactionsData, membershipPlans, user_id]);

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numValue = name === 'bill_no' || name === 'new_bill_no' || name === 'trainer' ? value : parseFloat(value) || 0;

    if (name === 'newAmountReceived') {
      setNewAmountReceived(numValue);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: numValue
      }));
    }
    setMessage({ text: '', type: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('/api/edit_amount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id,
          selectedPlan,
          bill_no: formData.bill_no,
          new_bill_no: formData.new_bill_no,
          totalAmountReceived,
          amountPaid: formData.amountPaid,
          discount: formData.discount,
          balance, 
          trainer: formData.trainer,
          newAmountReceived,
        }),
      });

      if (response.ok) {
        setMessage({ text: 'Balance updated successfully!', type: 'success' });
        setTimeout(() => {
          window.location.href = `/member-profile?member_id=${user_id}`;
        }, 1000);
      } else {
        throw new Error('Failed to update balance');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({ text: 'Failed to update balance. Please try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    // Reset to original values - same logic as useEffect with proper defaults
    const plan = membershipPlans?.find(p => p.plan_name === selectedPlan) || membershipPlans?.[0] || {};
    
    let resetFormData = {
      amountPaid: plan.amount || 0,
      discount: plan.discount || 0,
      bill_no: plan.bill_no || '',
      new_bill_no: plan.new_bill_no || '',
      trainer: plan.trainer || '',
      balance: plan.balance || 0,
    };

    // Update with latest transaction data if available
    if (transactionsData.length > 0 && resetFormData.bill_no) {
      const matchingTransactions = transactionsData.filter(
        transaction => 
          transaction.old_bill === resetFormData.bill_no && 
          transaction.user_id === user_id &&
          transaction.plan_name === selectedPlan
      );
      
      if (matchingTransactions.length > 0) {
        const latestTransaction = matchingTransactions.reduce((latest, current) => {
          const latestDate = new Date(latest.created_at);
          const currentDate = new Date(current.created_at);
          return currentDate > latestDate ? current : latest;
        });
        
        // Ensure all values have defaults
        resetFormData = {
          amountPaid: latestTransaction.amount || 0,
          discount: resetFormData.discount || 0,
          bill_no: latestTransaction.old_bill || resetFormData.bill_no || '',
          new_bill_no: resetFormData.new_bill_no || '',
          trainer: latestTransaction.trainer || resetFormData.trainer || '',
          balance: latestTransaction.balance || 0,
        };
      }
    }

    setFormData(resetFormData);
    setNewAmountReceived(0);
    setMessage({ text: '', type: '' });
    
    if (onCancel) {
      onCancel();
    }
  };

  const handleWriteOff = async () => {
    const confirmMessage = `Are you sure you want to write off the balance for:\n\nPlan: ${selectedPlan}\nUser: ${username || 'N/A'}\nUser ID: ${user_id}\n\nThis will set the balance to ₹0 and cannot be undone.`;
    
    if (window.confirm(confirmMessage)) {
      setIsSubmitting(true);
      setMessage({ text: '', type: '' });
      
      try {
        const response = await fetch('/api/write0ff', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id,
            selectedPlan,
            username: username || '',
          }),
        });

        if (response.ok) {
          setMessage({ text: 'Balance has been written off successfully!', type: 'success' });
          setTimeout(() => {
            window.location.href = `/member-profile?member_id=${user_id}`;
          }, 1000);
        } else {
          throw new Error('Failed to write off balance');
        }
      } catch (error) {
        console.error('Error writing off balance:', error);
        setMessage({ text: 'Failed to write off balance. Please try again.', type: 'error' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Validate membershipPlans
  if (!membershipPlans || membershipPlans.length === 0) {
    return <div className="p-4 sm:p-6 text-gray-300">No membership plans available.</div>;
  }

  return (
    <div className="p-4 sm:p-6 border-t border-[#3E3A3D]">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-300">Edit Balance/Add Payment</h2>
      
      {message.text && (
        <div className={`mb-4 p-3 rounded-lg text-sm sm:text-base ${
          message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3 sm:mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Select the plan
          </label>
          <select 
            value={selectedPlan}
            onChange={handlePlanChange}
            className="w-full p-2 sm:p-3 bg-[#2E2A2D] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
          >
            {membershipPlans.map((plan, index) => (
              <option key={`${plan.plan_name}-${index}`} value={plan.plan_name}>
                {plan.plan_name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3 sm:mb-4">
          <label htmlFor="bill_no" className="block text-sm font-medium mb-1 text-gray-300">
            Bill Number*
          </label>
          <input
            type="text"
            id="bill_no"
            name="bill_no"
            value={formData.bill_no || ''}
            onChange={handleChange}
            placeholder="Enter bill number"
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
            readOnly
          />
        </div>

        <div className="mb-3 sm:mb-4">
          <label htmlFor="new_bill_no" className="block text-sm font-medium mb-1 text-gray-300">
            New Bill Number*
          </label>
          <input
            type="text"
            id="new_bill_no"
            name="new_bill_no"
            value={formData.new_bill_no || ''}
            onChange={handleChange}
            placeholder="Enter new bill number"
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
            required
          />
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Select the trainer
          </label>
          <select 
            name="trainer"
            value={formData.trainer || ''}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 bg-[#2E2A2D] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
          >
            <option value="">Select a trainer</option>
            {trainers.map((trainer, index) => (
              <option key={`trainer-${index}-${trainer.trainer_id}`} value={trainer.trainer_id}>
                {trainer.trainer_id} - {trainer.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3 sm:mb-4">
          <label htmlFor="amountPaid" className="block text-sm font-medium mb-1 text-gray-300">
            Amount Already Received (₹) *
          </label>
          <input
            type="number"
            id="amountPaid"
            name="amountPaid"
            value={formData.amountPaid || 0}
            onChange={handleChange}
            placeholder="Enter amount paid"
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
            required
            readOnly
          />
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Total Amount Received (₹)
          </label>
          <input
            type="number"
            value={totalAmountReceived}
            readOnly
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base text-gray-400"
          />
        </div>

        <div className="mb-3 sm:mb-4">
          <label htmlFor="discount" className="block text-sm font-medium mb-1 text-gray-300">
            Discount (₹)
          </label>
          <input
            type="number"
            id="discount"
            name="discount"
            placeholder="Enter discount"
            value={formData.discount || 0}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
          />
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Balance Amount (₹)
          </label>
          <input
            type="number"
            value={balance}
            readOnly
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base text-gray-400"
          />
        </div>

        <div className="mb-4 sm:mb-6">
              <label htmlFor="transaction_type" className="block text-sm font-medium text-gray-300">
                Transaction Type *
              </label>
              <select
                id="transaction_type"
                name="transaction_type"
                value={formData.transaction_type}
                onChange={handleChange}
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
                required
              >
                <option value="">Select Type</option>
                <option value="GPay">GPay</option>
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Other">Other</option>
              </select>
            </div>

        <div className="mb-4 sm:mb-4">
          <label htmlFor="newAmountReceived" className="block text-sm font-medium mb-1 text-gray-300">
            New Amount Received (₹)
          </label>
          <input
            type="number"
            id="newAmountReceived"
            name="newAmountReceived"
            value={newAmountReceived}
            onChange={handleChange}
            placeholder="Enter new amount received"
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <div className="order-2 sm:order-1 flex justify-center sm:justify-start">
            <button
              type="button"
              onClick={handleWriteOff}
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Write Off
            </button>
          </div>
          
          <div className="order-1 sm:order-2 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-auto px-4 py-2 border border-[#3E3A3D] rounded-lg text-gray-300 hover:bg-[#2E2A2D] transition-colors text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </form>
      <div className='h-20 xl:h-10'></div>
    </div>
  );
}
```



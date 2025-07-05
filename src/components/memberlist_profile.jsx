"use client";
import { useState, useEffect, useMemo } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Renew_form from "./Renew_form";
import { GrClose } from "react-icons/gr";
import Balance_form from "./Balance_form";

export default function MemberlistProfile({ member }) {
  const [renewBox, setRenewBox] = useState(false);
  const [balanceBox, setBalanceBox] = useState(false);
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleRenewBox = () => {
    setRenewBox(!renewBox);
    if (balanceBox) setBalanceBox(false);
  };

  const toggleBalanceBox = () => {
    setBalanceBox(!balanceBox);
    if (renewBox) setRenewBox(false);
  };

  // Fetch membership plans
  useEffect(() => {
    const fetchMembershipPlans = async () => {
      try {
        const response = await fetch('/api/fetch_membership_plans');
        console.log("fetched response", response);

        if (!response.ok) {
          throw new Error('Failed to fetch membership plans');
        }
        const result = await response.json();
        console.log("fetched data", result);
        
        // Handle the API response structure: { success: true, data: [...] }
        if (result.success && result.data) {
          const userPlans = result.data.filter(plan => plan.user_id === member.user_id);
          console.log("filtered user plans", userPlans);
          setMembershipPlans(userPlans);
        } else {
          console.error('API returned unsuccessful response:', result);
          setMembershipPlans([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching membership plans:', error);
        setMembershipPlans([]);
        setLoading(false);
      }
    };
    fetchMembershipPlans();
  }, [member.user_id]);

  // Get plan names - using useMemo to optimize
  const planNames = useMemo(() => {
    return membershipPlans.length > 0 
      ? membershipPlans.map(plan => plan.plan_name).join(', ')
      : 'Basic Gym';
  }, [membershipPlans]);

  // Calculate expiration details using useMemo to ensure it updates when membershipPlans changes
  const { daysUntilExpiry, isExpired, formattedExpiry } = useMemo(() => {
    let daysUntilExpiry = 0;
    let isExpired = true;
    let formattedExpiry = 'N/A';

    if (membershipPlans.length > 0) {
      // Find the plan with the latest expiry date
      const latestPlan = membershipPlans.reduce((latest, plan) => {
        const planDate = new Date(plan.exp_date);
        return !latest || planDate > new Date(latest.exp_date) ? plan : latest;
      }, null);

      if (latestPlan) {
        const expiryDate = new Date(latestPlan.exp_date);
        const today = new Date();
        
        // Calculate days until expiry
        daysUntilExpiry = Math.max(
          0,
          Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24))
        );
        
        isExpired = expiryDate < today;
        
        // Format expiry date
        formattedExpiry = expiryDate.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).split('/').join('-');
      }
    } else if (!loading) {
      // Fallback to original calculation only if data has been loaded but no plans found
      const joiningDate = new Date(member.joining_date);
      const expiryDate = new Date(joiningDate);
      expiryDate.setFullYear(joiningDate.getFullYear() + 1);
      const today = new Date();
      
      daysUntilExpiry = Math.max(
        0,
        Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24))
      );
      
      isExpired = expiryDate < today;
      
      formattedExpiry = expiryDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).split('/').join('-');
    }

    // Console log expiration details
    console.log("Expiration Details:", {
      daysUntilExpiry,
      formattedExpiry,
      isExpired,
      membershipPlansCount: membershipPlans.length,
      loading
    });

    return { daysUntilExpiry, isExpired, formattedExpiry };
  }, [membershipPlans, member.joining_date, loading]);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 p-4 md:p-6 lg:p-10 gap-4 md:gap-10">
      {/* Profile Image Section */}
      <div className="relative">
        <img
          className="object-cover w-full h-full rounded-lg aspect-[3/4] md:max-h-80 lg:max-h-150"
          src="/images/user2.jpg"
          alt="User profile"
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
          <p className="text-white font-medium text-sm md:text-lg">#{member.user_id}</p>
          <p className="text-white font-bold text-lg md:text-2xl">{member.name}</p>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="flex flex-col text-center justify-center gap-4 md:gap-6 lg:gap-8">
        {/* Paid Button */}
        <div className="relative">
          <button
            onClick={toggleBalanceBox}
            className={`w-full ${isExpired ? 'bg-red-500' : 'bg-[#71CA35]'} flex gap-2 justify-center items-center rounded-lg text-black font-semibold px-4 py-2 text-xl md:text-3xl md:py-4`}
          >
            {isExpired ? 'Expired' : 'Not Expired'} <FaRegCheckCircle />
          </button>
          
          {/* Balance Form Modal */}
          {balanceBox && (
            <div className="absolute top-full left-0 right-0 z-50 mt-4 bg-[#0a0a0a] rounded-xl shadow-lg p-4 md:p-8 text-center border border-[#6e6e6e]">
              <div className="flex justify-end items-center mb-4 pb-2 border-b border-[#6e6e6e]">
                <GrClose
                  onClick={toggleBalanceBox}
                  className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
                  size={28}
                />
              </div>
              <Balance_form />
            </div>
          )}
        </div>

        {/* Membership Info */}
        <div className="bg-[#FFDD4A] text-black px-4 py-2 rounded-lg gap-2 flex flex-col items-center md:py-4">
          <h3 className="text-xl font-semibold md:text-2xl">{loading ? 'Loading...' : planNames}</h3>
          <p className="text-sm md:text-lg">Expiry in {daysUntilExpiry} Days</p>
          <p className="text-sm font-semibold md:text-lg">{formattedExpiry}</p>
        </div>

        {/* Renew Button */}
        <div className="relative">
          <button
            onClick={toggleRenewBox}
            className="w-full bg-[#2B2E32] px-4 py-2 font-semibold rounded-lg text-[#FFDD4A] border-2 border-[#FFDD4A] md:py-4 md:text-2xl"
          >
            Renew
          </button>
          
          {/* Renew Form Modal */}
          {renewBox && (
            <div className="absolute top-full left-0 right-0 z-50 mt-4 bg-[#0a0a0a] rounded-xl shadow-lg p-4 md:p-8 text-center border border-[#6e6e6e]">
              <div className="flex justify-end items-center mb-4 pb-2 border-b border-[#6e6e6e]">
                <GrClose
                  onClick={toggleRenewBox}
                  className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
                  size={28}
                />
              </div>
              <Renew_form user_id={member.user_id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
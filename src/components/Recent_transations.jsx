// src\components\Recent_transations.jsx

"use client";
import { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { CiCreditCard1 } from "react-icons/ci";

export default function Recent_transactions({ userId }) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('=== COMPONENT MOUNTED ===');
    console.log('Props received:', { userId });
    console.log('userId type:', typeof userId);
    console.log('userId value:', userId);
    
    // Force the function to run regardless of userId
    fetchAllTransactions();
  }, []); // Remove userId dependency to force immediate execution

  useEffect(() => {
    console.log('=== userId CHANGED ===');
    console.log('New userId:', userId);
    if (userId) {
      fetchAllTransactions();
    }
  }, [userId]); // Separate effect for when userId changes

  const fetchAllTransactions = async () => {
    console.log('=== FETCH FUNCTION STARTED ===');
    console.log('Current userId in fetch:', userId);
    
    setLoading(true);
    setError(null);
    
    try {
      // Test 1: Always try to call fetch_transactions API (even without userId)
      console.log('=== ATTEMPTING API CALLS ===');
      
      // Create URLs
      const membershipUrl = '/api/fetch_membership_plans';
      const transactionsUrl = `/api/fetch_transactions?user_id=${userId || 'test'}`;
      
      console.log('Membership URL:', membershipUrl);
      console.log('Transactions URL:', transactionsUrl);
      
      // Force both API calls
      console.log('Making membership API call...');
      const membershipResponse = fetch(membershipUrl);
      
      console.log('Making transactions API call...');
      const transactionsResponse = fetch(transactionsUrl);
      
      const [membershipRes, transactionsRes] = await Promise.all([
        membershipResponse,
        transactionsResponse
      ]);
      
      console.log('=== API RESPONSES RECEIVED ===');
      console.log('Membership response status:', membershipRes.status);
      console.log('Transactions response status:', transactionsRes.status);
      
      // Parse responses
      const membershipData = await membershipRes.json();
      const transactionsData = await transactionsRes.json();
      
      console.log('=== PARSED DATA ===');
      console.log('Membership data:', membershipData);
      console.log('Transactions data:', transactionsData);
      
      // Process data
      let allTransactions = [];
      
      if (membershipData.success && membershipData.data) {
        const userMembershipPlans = membershipData.data.filter(
          plan => plan.user_id == userId
        );
        console.log('Filtered membership plans:', userMembershipPlans);
        allTransactions = [...userMembershipPlans];
      }
      
      if (transactionsData.success && transactionsData.data) {
        console.log('Adding transactions data:', transactionsData.data);
        allTransactions = [...allTransactions, ...transactionsData.data];
      }
      
      console.log('=== COMBINED DATA ===');
      console.log('All transactions:', allTransactions);
      
      // Sort and limit
      const recentTransactions = allTransactions
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);
      
      console.log('=== FINAL RESULT ===');
      console.log('Recent transactions:', recentTransactions);
      
      setTransactions(recentTransactions);
      
    } catch (error) {
      console.error('=== ERROR OCCURRED ===');
      console.error('Error details:', error);
      setError(error.message);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

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
        return <span className="text-lg md:text-xl">💳</span>;
      default:
        return <span className="text-lg md:text-xl">💳</span>;
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
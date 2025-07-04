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
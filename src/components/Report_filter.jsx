"use client"
import React, { useState, useEffect } from "react";

export default function Report_filter() {
  const [totalReceived, setTotalReceived] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/total_amount_recent_tans');
        const result = await response.json();
        const data = result?.data;
        
        if (data) {
          // Set the aggregated values directly from the API response
          setTotalReceived(Number(data.total_amount || 0));
          setTotalDiscount(Number(data.total_discount || 0));
          setTotalBalance(Number(data.total_balance || 0));
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4 p-4 md:p-6 lg:p-8">
        <span className="bg-[#2B2E32] flex flex-col gap-2 p-4 md:p-6 text-center items-center justify-center">
          <h3 className="text-sm md:text-lg">Total Received</h3>
          <h2 className="text-lg md:text-xl font-bold text-green-500">
            ₹ {totalReceived.toLocaleString()}
          </h2>
        </span>

        <span className="bg-[#2B2E32] flex flex-col gap-2 p-4 md:p-6 text-center items-center justify-center">
          <h3 className="text-sm md:text-lg">Total Discount</h3>
          <h2 className="text-lg md:text-xl font-bold text-green-500">
            ₹ {totalDiscount.toLocaleString()}
          </h2>
        </span>

        <span className="bg-[#2B2E32] flex flex-col gap-2 p-4 md:p-6 text-center items-center justify-center">
          <h3 className="text-sm md:text-lg">Pending Balance</h3>
          <h2 className="text-lg md:text-xl font-bold text-red-500">
            ₹ {totalBalance.toLocaleString()}
          </h2>
        </span>
      </div>
    </div>
  );
}
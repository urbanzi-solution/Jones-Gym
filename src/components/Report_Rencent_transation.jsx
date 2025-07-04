// src\components\Report_Rencent_transation.jsx
"use client";
import { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { CiCreditCard1 } from "react-icons/ci";
import Inpage_header from "@/components/Inpage_header";
import * as XLSX from 'xlsx';

export default function Recent_transations() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/api/fetch_membership_plans');
        const { data } = await response.json();
        // Sort by date and take last 10
        const sortedTransactions = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 10);
        setTransactions(sortedTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);


  const exportToExcel = () => {
    const data = transactions.map(transaction => ({
      'Bill No': transaction.bill_no || "N/A",
      'Name': transaction.name || "N/A",
      'Plan': transaction.plan_name || "N/A",
      'Payment Method': transaction.trans_type || "N/A",
      'Amount': transaction.amount || "N/A",
      'Balance': transaction.balance || "N/A",
      'Date': transaction.date ? new Date(transaction.date).toLocaleDateString() : "N/A"
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    // Set column widths
    worksheet['!cols'] = [
      { wch: 10 },  // Bill No
      { wch: 20 },  // Name
      { wch: 15 },  // Plan
      { wch: 15 },  // Payment Method
      { wch: 10 },  // Amount
      { wch: 10 },  // Balance
      { wch: 15 }   // Date
    ];

    XLSX.writeFile(workbook, "Recent_Transactions.xlsx");
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
        return <span className="text-lg md:text-xl">Other</span>;
      default:
        return null;
    }
  };

  return (
    
    <div className="box">

      <Inpage_header onExport={exportToExcel} />

      <div className="flex justify-between items-center text-lg md:text-xl font-semibold lg:text-2xl">
        <h2>Recent Transactions</h2>
        <a href="/report-transations"><FaArrowRight /></a>
      </div>

      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-[#181818] px-4 py-2 rounded-lg my-5 md:px-8 md:py-4"
        >
          <div className="flex gap-2 items-center md:gap-5">
            {getTransactionIcon(transaction.trans_type)}
            <div className="md:text-xl ml-2">
              <h2>{transaction.name}</h2>
              <h2>{transaction.plan_name}</h2>
              <p>{transaction.bill_no}</p>
            </div>
          </div>
          <p className="text-lg text-[#71CA35] md:text-xl">{transaction.amount}</p>
          <p className="text-lg text-[#B30000] md:text-xl">{transaction.balance}</p>
        </div>
      ))}
    </div>
  );
}
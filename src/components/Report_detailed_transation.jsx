// src\components\Report_detailed_transation.jsx
'use client';
import { useState, useEffect } from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCaretDown, FaEllipsisV } from "react-icons/fa";
import Inpage_header from "@/components/Inpage_header";
import * as XLSX from 'xlsx';

export default function DetailedTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  // Fetch transactions from the API
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/api/fetch_transactions');
        const data = await response.json();
        if (data.success) {
          setTransactions(data.data);
        } else {
          setError(data.error || 'Failed to fetch transactions');
        }
      } catch (err) {
        setError('Error fetching transactions');
      }
    };
    fetchTransactions();
  }, []);

    // Export to Excel function
  const exportToExcel = () => {
    const data = transactions.map(transaction => ({
      'User Name': transaction.name || "N/A",
      'User ID': transaction.user_id || "N/A",
      'Date': transaction.date ? new Date(transaction.date).toLocaleDateString() : "N/A",
      'Bill Number': transaction.bill_no || "N/A",
      'Plan': transaction.plan || "N/A",
      'Amount Paid': transaction.amount || "0",
      'Discount': transaction.discount || "0",
      'Balance': transaction.balance || "0",
      'Transaction Type': transaction.trans_type || "N/A"
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    // Set column widths
    worksheet['!cols'] = [
      { wch: 20 },  // User Name
      { wch: 10 },  // User ID
      { wch: 12 },  // Date
      { wch: 12 },  // Bill Number
      { wch: 15 },  // Plan
      { wch: 12 },  // Amount Paid
      { wch: 10 },  // Discount
      { wch: 10 },  // Balance
      { wch: 15 }   // Transaction Type
    ];

    XLSX.writeFile(workbook, "Detailed_Transactions.xlsx");
  };

  // Function to handle edit action
  const handleEdit = (billNumber) => {
    console.log(`Edit transaction with Bill Number: ${billNumber}`);
    // You can replace this with actual edit logic
  };

  // Function to handle delete action
  const handleDelete = (billNumber) => {
    console.log(`Delete transaction with Bill Number: ${billNumber}`);
    // You can replace this with actual delete logic
  };

  return (
    <div className="box">
      <Inpage_header  onExport={exportToExcel} />
      <div className="flex justify-between items-center md:text-xl">
        <h3 className="flex items-center">
          Today <FaCaretDown />
        </h3>
        <SlCalender />
      </div>

      {/* Transactions Table */}
      <div className="mt-8 overflow-x-auto">
        {error && <div className="text-red-500 text-center">{error}</div>}
        <table className="min-w-full text-center">
          <thead>
            <tr className="text-center font-bold md:text-lg text-sm">
              <th className="p-3 bg-[#303336] border-r">User name</th>
              <th className="p-3 bg-[#303336] border-r">User id</th>
              <th className="p-3 bg-[#303336] border-r">Date</th>
              <th className="p-3 bg-[#303336] border-r">Bill Number</th>
              <th className="p-3 bg-[#303336] border-r">Plan</th>
              <th className="p-3 bg-[#303336] border-r">Amount Paid</th>
              <th className="p-3 bg-[#303336] border-r">Discount</th>
              <th className="p-3 bg-[#303336] border-r">Balance</th>
              <th className="p-3 bg-[#303336] border-r">Transaction Type</th>
              <th className="p-3 bg-[#303336] rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.bill_no} className="group text-sm">
                <td className="p-3 py-6 bg-[#404346] text-white border-r group-hover:bg-[#505356]">
                  {transaction.name}
                </td>
                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  {transaction.user_id}
                </td>
                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  {new Date(transaction.date).toISOString().split('T')[0]}
                </td>
                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  {transaction.bill_no}
                </td>
                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  {transaction.plan}
                </td>
                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  ${transaction.amount}
                </td>
                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  ${transaction.discount}
                </td>
                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  ${transaction.balance}
                </td>
                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  {transaction.trans_type}
                </td>
                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] relative">
                  <div className="dropdown">
                    <button className="text-white hover:text-gray-300">
                      <FaEllipsisV />
                    </button>
                    <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-[#404346] rounded-md shadow-lg z-10 hidden group-hover:block">
                      <button
                        onClick={() => handleEdit(transaction.bill_no)}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#505356]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(transaction.bill_no)}
                        className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#505356]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
'use client';
import { useState, useEffect } from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCaretDown, FaEllipsisV } from "react-icons/fa";
import EditTransactionData from '@/components/edit_profile_transaction_data';
import * as XLSX from 'xlsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Inpage_header from "@/components/Inpage_header";

export default function DetailedTransactions({ userId }) {
  const [transactions, setTransactions] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Today');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCustomDate, setShowCustomDate] = useState(false);
  const [openDropdownBillNo, setOpenDropdownBillNo] = useState(null); // NEW

  // Fetch transactions from the API and filter by userId
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/fetch_transactions?user_id=${encodeURIComponent(userId)}`);
        const data = await response.json();
        if (data.success) {
          // Filter transactions by userId
          const filteredTransactions = data.data.filter(
            transaction => transaction.user_id === userId
          );
          setAllTransactions(filteredTransactions);
          setTransactions(filteredTransactions);
          filterTransactions('Today', new Date());
        } else {
          setError(data.error || 'Failed to fetch transactions');
        }
      } catch (err) {
        setError('Error fetching transactions');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    if (userId) {
      fetchTransactions();
    }
  }, [userId]);

  // Export to Excel function
  const exportToExcel = () => {
    const data = transactions.map(transaction => ({
      'Bill Number': transaction.bill_no || "N/A",
      'Plan': transaction.plan_name || "N/A",
      'Date': transaction.date ? new Date(transaction.date).toLocaleDateString() : "N/A",
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
      { wch: 10 },  // Bill Number
      { wch: 15 },  // Plan
      { wch: 12 },  // Date
      { wch: 12 },  // Amount Paid
      { wch: 10 },  // Discount
      { wch: 10 },  // Balance
      { wch: 15 }   // Transaction Type
    ];

    XLSX.writeFile(workbook, "User_Transactions.xlsx");
  };

  // Function to handle edit action
  const handleEdit = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
    setOpenDropdownBillNo(null);
  };

  // Function to handle delete action
  const handleDelete = async (bill_no) => {
    if (!window.confirm('Are you sure you want to permanently delete this transaction?')) {
      return;
    }

    try {
      const response = await fetch('/api/delete_trans', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bill_no }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to delete transaction');
      }

      if (result.success) {
        // Update state to remove the deleted transaction
        setTransactions(prev => prev.filter(t => t.bill_no !== bill_no));
        setAllTransactions(prev => prev.filter(t => t.bill_no !== bill_no));
        alert('Transaction deleted successfully');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert(error.message || 'Error deleting transaction');
    } finally {
      setOpenDropdownBillNo(null);
    }
  };

  const handleSave = (updatedTransaction) => {
    setTransactions(transactions.map(t => 
      t.bill_no === updatedTransaction.bill_no ? updatedTransaction : t
    ));
    setAllTransactions(allTransactions.map(t => 
      t.bill_no === updatedTransaction.bill_no ? updatedTransaction : t
    ));
    setIsModalOpen(false);
    setSelectedTransaction(null);
    alert('Transaction updated successfully');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isCalendarOpen) setIsCalendarOpen(false);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  // Filter transactions based on selected option or date
  const filterTransactions = (option, date) => {
    if (!allTransactions.length) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let filtered = [...allTransactions];
    
    switch(option) {
      case 'Today':
        filtered = filtered.filter(t => {
          const transDate = new Date(t.date);
          transDate.setHours(0, 0, 0, 0);
          return transDate.getTime() === today.getTime();
        });
        break;
        
      case 'Yesterday':
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        filtered = filtered.filter(t => {
          const transDate = new Date(t.date);
          transDate.setHours(0, 0, 0, 0);
          return transDate.getTime() === yesterday.getTime();
        });
        break;
        
      case '2 days before':
        const twoDaysBefore = new Date(today);
        twoDaysBefore.setDate(twoDaysBefore.getDate() - 2);
        filtered = filtered.filter(t => {
          const transDate = new Date(t.date);
          transDate.setHours(0, 0, 0, 0);
          return transDate.getTime() === twoDaysBefore.getTime();
        });
        break;
        
      case 'This week':
        const startOfWeek = new Date(today);
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
        filtered = filtered.filter(t => {
          const transDate = new Date(t.date);
          return transDate >= startOfWeek;
        });
        break;
        
      case 'Last week':
        const startOfLastWeek = new Date(today);
        startOfLastWeek.setDate(startOfLastWeek.getDate() - startOfLastWeek.getDay() - 7);
        const endOfLastWeek = new Date(startOfLastWeek);
        endOfLastWeek.setDate(startOfLastWeek.getDate() + 6);
        filtered = filtered.filter(t => {
          const transDate = new Date(t.date);
          return transDate >= startOfLastWeek && transDate <= endOfLastWeek;
        });
        break;
        
      case 'This month':
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        filtered = filtered.filter(t => {
          const transDate = new Date(t.date);
          return transDate >= startOfMonth && transDate <= endOfMonth;
        });
        break;
        
      case 'Custom date':
        const customDate = new Date(date);
        customDate.setHours(0, 0, 0, 0);
        filtered = filtered.filter(t => {
          const transDate = new Date(t.date);
          transDate.setHours(0, 0, 0, 0);
          return transDate.getTime() === customDate.getTime();
        });
        break;
        
      default:
        // No filtering
        break;
    }
    
    setTransactions(filtered);
  };

  // Handle option selection from dropdown
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    
    if (option === 'Custom date') {
      setIsCalendarOpen(true);
      setShowCustomDate(true);
    } else {
      setShowCustomDate(false);
      const today = new Date();
      filterTransactions(option, today);
    }
  };

  // Handle date selection from calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedOption(date.toLocaleDateString());
    setIsCalendarOpen(false);
    filterTransactions('Custom date', date);
  };

  const closeAll = () => {
    setIsDropdownOpen(false);
    setIsCalendarOpen(false);
    setOpenDropdownBillNo(null);
  };

  const options = [
    'Today',
    'Yesterday',
    '2 days before',
    'This week',
    'Last week',
    'This month'
  ];

  return (
    <div className="box">
      <Inpage_header title='Transactions' onExport={exportToExcel} />

      <div className="flex justify-between items-center md:text-xl relative">
        {/* Date dropdown */}
        <div className="relative">
          <button 
            onClick={toggleDropdown}
            className="flex items-center px-3 py-1 rounded-md hover:bg-[#404346] transition-colors"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            {selectedOption} <FaCaretDown className="ml-1" />
          </button>
          
          {isDropdownOpen && (
            <div 
              className="absolute left-0 mt-1 w-48 bg-[#404346] rounded-md shadow-lg z-20"
              role="menu"
            >
              <div className="py-1">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-800 ${
                      selectedOption === option ? 'bg-gray-700' : ''
                    }`}
                    role="menuitem"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Calendar button */}
        <div className="relative">
          <button 
            onClick={toggleCalendar}
            className="p-2 rounded-md hover:bg-gray-600 transition-colors"
            aria-expanded={isCalendarOpen}
          >
            <SlCalender className="h-5 w-5" />
          </button>
          
          {isCalendarOpen && (
            <div 
              className="absolute right-0 mt-2 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                inline
                calendarClassName="bg-[#404346] text-white rounded-md shadow-lg"
                dayClassName={() => "text-white hover:bg-gray-600"}
                weekDayClassName={() => "text-gray-300"}
                monthClassName={() => "text-white"}
                renderCustomHeader={({
                  monthDate,
                  decreaseMonth,
                  increaseMonth,
                }) => (
                  <div className="flex items-center justify-between px-2 py-2">
                    <button
                      onClick={decreaseMonth}
                      className="p-1 rounded hover:bg-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <span className="text-[#404346]">
                      {monthDate.toLocaleString('default', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <button
                      onClick={increaseMonth}
                      className="p-1 rounded hover:bg-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              />
            </div>
          )}
        </div>
        {/* Click outside to close */}
        {(isDropdownOpen || isCalendarOpen || openDropdownBillNo) && (
          <div 
            className="fixed inset-0 z-10 bg-transparent" 
            onClick={closeAll}
          />
        )}
      </div>

      {/* Loading and error states */}
      {loading && <div className="text-center py-4">Loading transactions...</div>}
      {error && <div className="text-red-500 text-center py-4">{error}</div>}

      {/* Transactions Table */}
      <div className="mt-8 overflow-x-auto">
        {!loading && !error && transactions.length === 0 ? (
          <div className="text-center py-4">No transactions found</div>
        ) : (
          <table className="min-w-full text-center">
            <thead>
              <tr className="text-center font-bold md:text-lg text-sm">
                <th className="p-3 bg-[#303336] border-r">Bill Number</th>
                <th className="p-3 bg-[#303336] border-r">Plan</th>
                <th className="p-3 bg-[#303336] border-r">Date</th>
                <th className="p-3 bg-[#303336] border-r">Amount Paid</th>
                <th className="p-3 bg-[#303336] border-r">Discount</th>
                <th className="p-3 bg-[#303336] border-r">Balance</th>
                <th className="p-3 bg-[#303336] border-r">Transaction Type</th>
                <th className="p-3 bg-[#303336] rounded-tr-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.bill_no} className="text-sm">
                  <td className="p-3 py-6 bg-[#404346] text-white border-r">
                    {transaction.bill_no}
                  </td>
                  <td className="p-3 py-6 bg-[#404346] text-white border-r">
                    {transaction.plan_name}
                  </td>
                  <td className="p-3 py-6 bg-[#404346] text-white border-r">
                    {new Date(transaction.date).toISOString().split('T')[0]}
                  </td>
                  <td className="p-3 py-6 bg-[#404346] text-white border-r">
                    ${transaction.amount}
                  </td>
                  <td className="p-3 py-6 bg-[#404346] text-white border-r">
                    ${transaction.discount}
                  </td>
                  <td className="p-3 py-6 bg-[#404346] text-white border-r">
                    ${transaction.balance}
                  </td>
                  <td className="p-3 py-6 bg-[#404346] text-white border-r">
                    {transaction.trans_type}
                  </td>
                  <td className="p-3 py-6 bg-[#404346] text-white relative">
                    <div className="dropdown">
                      <button
                        className="text-white hover:text-gray-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdownBillNo(
                            openDropdownBillNo === transaction.bill_no ? null : transaction.bill_no
                          );
                        }}
                      >
                        <FaEllipsisV />
                      </button>
                      {openDropdownBillNo === transaction.bill_no && (
                        <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-[#404346] rounded-md shadow-lg z-20">
                          <button
                            onClick={() => handleEdit(transaction)}
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
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Modal for EditTransactionData */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#232024] p-6 rounded-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
            <EditTransactionData
              transaction={selectedTransaction}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
}

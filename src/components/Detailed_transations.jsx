'use client';
import { useState, useEffect } from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCaretDown, FaEllipsisV } from "react-icons/fa";
import EditTransactionData from '@/components/edit_profile_transaction_data';

export default function DetailedTransactions({ userId }) {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Fetch transactions from the API and filter by userId
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(`/api/fetch_transactions?user_id=${encodeURIComponent(userId)}`);
        const data = await response.json();
        if (data.success) {
          // Filter transactions by userId
          const filteredTransactions = data.data.filter(
            transaction => transaction.user_id === userId
          );
          setTransactions(filteredTransactions);
        } else {
          setError(data.error || 'Failed to fetch transactions');
        }
      } catch (err) {
        setError('Error fetching transactions');
      }
    };
    if (userId) {
      fetchTransactions();
    }
  }, [userId]);

  // Function to handle edit action
  const handleEdit = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
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
          
          // Show success message
          alert('Transaction deleted successfully');
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        console.error('Delete error:', error);
        alert(error.message || 'Error deleting transaction');
      }
    };

  const handleSave = (updatedTransaction) => {
    setTransactions(transactions.map(t => 
      t.bill_no === updatedTransaction.bill_no ? updatedTransaction : t
    ));
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <div className="box">
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
              <tr key={transaction.bill_no} className="group text-sm">

                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  {transaction.bill_no}
                </td>

                <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                  {transaction.plan_name}
                </td>

                <td className="p-3 py-6 bg-[#404346] text-white border-r group-hover:bg-[#505356]">
                  {new Date(transaction.date).toISOString().split('T')[0]}
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
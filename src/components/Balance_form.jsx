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
    transaction_type: '', // Added transaction_type to formData
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
      transaction_type: '', // Reset transaction_type when plan changes
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
          transaction_type: '', // Keep transaction_type empty for new transactions
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
    const numValue = name === 'bill_no' || name === 'new_bill_no' || name === 'trainer' || name === 'transaction_type' ? value : parseFloat(value) || 0;

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
          transaction_type: formData.transaction_type, // Added transaction_type to API request
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
      transaction_type: '', // Reset transaction_type
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
          transaction_type: '', // Keep transaction_type empty for reset
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
          <label htmlFor="transaction_type" className="block text-sm font-medium mb-1 text-gray-300">
            Transaction Type *
          </label>
          <select
            id="transaction_type"
            name="transaction_type"
            value={formData.transaction_type}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 bg-[#2E2A2D] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
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
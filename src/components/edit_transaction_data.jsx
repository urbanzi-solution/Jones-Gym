'use client';
import { useState, useEffect } from "react";

export default function EditTransactionData({ transaction, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    user_id: '',
    name: '',
    bill_no: '',
    plan_name: '',
    date: '',
    amount: 0,
    discount: 0,
    balance: 0,
    trans_type: ''
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (transaction) {
      setFormData({
        user_id: transaction.user_id || '',
        name: transaction.name || '',
        bill_no: transaction.bill_no || '',
        plan_name: transaction.plan_name || '',
        date: transaction.date ? new Date(transaction.date).toISOString().split('T')[0] : '',
        amount: transaction.amount || 0,
        discount: transaction.discount || 0,
        balance: transaction.balance || 0,
        trans_type: transaction.trans_type || ''
      });
    }
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newFormData = {
        ...prev,
        [name]: name === 'amount' || name === 'discount' ? parseFloat(value) || 0 : value
      };
      // Calculate balance as amount - discount
      if (name === 'amount' || name === 'discount') {
        newFormData.balance = (newFormData.amount || 0) - (newFormData.discount || 0);
      }
      return newFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/edit_trans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || 'Failed to update transaction');
      }

      if (onSave) onSave(formData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Edit Transaction</h2>

      {/* User ID Field */}
      <div>
        <label className="block text-gray-300 mb-1">User ID</label>
        <input
          type="text"
          name="user_id"
          className="w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white"
          value={formData.user_id}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      
      {/* Name Field */}
      <div>
        <label className="block text-gray-300 mb-1">User Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Bill Number Field */}
      <div>
        <label className="block text-gray-300 mb-1">Bill Number</label>
        <input
          type="text"
          name="bill_no"
          className="w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white"
          value={formData.bill_no}
          onChange={handleChange}
          disabled
        />
      </div>

      {/* Plan Field */}
      <div>
        <label className="block text-gray-300 mb-1">Plan</label>
        <input
          type="text"
          name="plan_name"
          className="w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white"
          value={formData.plan_name}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Date Field */}
      <div>
        <label className="block text-gray-300 mb-1">Date</label>
        <input
          type="date"
          name="date"
          className="w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white"
          value={formData.date}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Amount Field */}
      <div>
        <label className="block text-gray-300 mb-1">Amount</label>
        <input
          type="text"
          name="amount"
          className="w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white"
          value={formData.amount}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Discount Field */}
      <div>
        <label className="block text-gray-300 mb-1">Discount</label>
        <input
          type="text"
          name="discount"
          className="w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white"
          value={formData.discount}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Balance Field */}
      <div>
        <label className="block text-gray-300 mb-1">Balance</label>
        <input
          type="text"
          name="balance"
          className="w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white bg-opacity-50"
          value={formData.balance}
          disabled
        />
      </div>

      {/* Transaction Type Field */}
      <div>
        <label className="block text-gray-300 mb-1">Transaction Type</label>
        <select
          name="trans_type"
          className="w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white"
          value={formData.trans_type}
          onChange={handleChange}
          disabled={isSubmitting}
        >
          <option value="">Select Transaction Type</option>
          <option value="GPay">GPay</option>
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-gray-500 text-white rounded py-2 hover:bg-[#1a1a1a]"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 bg-[#FFDD4A] text-black font-bold py-2 rounded hover:bg-[#ffd700]"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}
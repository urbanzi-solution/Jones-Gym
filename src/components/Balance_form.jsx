"use client";

import { useState } from 'react';

export default function BalanceEditForm() {
  // Demo balance amount (not editable)
  const initialBalance = 5000;
  
  // Editable fields state
  const [formData, setFormData] = useState({
    amountPaid: 0,
    discount: 0,
    balance: initialBalance // Calculated field
  });

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value) || 0;
    
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: numValue
      };
      
      // Auto-calculate balance
      newData.balance = Math.max(0, initialBalance - newData.amountPaid - newData.discount);
      
      return newData;
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Balance updated successfully!');
  };

  // Handle cancel
  const handleCancel = () => {
    setFormData({
      amountPaid: 0,
      discount: 0,
      balance: initialBalance
    });
  };

  // Handle write off (console only)
  const handleWriteOff = () => {
    console.log('Write off initiated for balance:', formData.balance);
    alert('Write off logged to console');
  };

  return (
    <div className="p-4 sm:p-6 border-t border-[#3E3A3D]">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-300">Edit Balance</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Non-editable balance display */}
        <div className="mb-3 sm:mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Current Balance (₹)
          </label>
          <input
            value={initialBalance.toFixed(2)}
            readOnly
            className="w-full p-2 sm:p-3 bg-[#2E2A2D] border border-[#3E3A3D] rounded-lg cursor-not-allowed text-sm sm:text-base"
          />
        </div>

        {/* Amount Paid */}
        <div className="mb-3 sm:mb-4">
          <label htmlFor="amountPaid" className="block text-sm font-medium mb-1 text-gray-300">
            Amount Paid (₹) *
          </label>
          <input
            type="number"
            id="amountPaid"
            name="amountPaid"
            value={formData.amountPaid}
            onChange={handleChange}
            placeholder="Enter amount paid"
            max={initialBalance}
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
            required
          />
        </div>

        {/* Discount */}
        <div className="mb-3 sm:mb-4">
          <label htmlFor="discount" className="block text-sm font-medium mb-1 text-gray-300">
            Discount (₹)
          </label>
          <input
            type="number"
            id="discount"
            name="discount"
            placeholder="Enter discount"
            value={formData.discount}
            onChange={handleChange}
            max={initialBalance - formData.amountPaid}
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
          />
        </div>

        {/* Calculated New Balance */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            New Balance (₹)
          </label>
          <input
            value={formData.balance.toFixed(2)}
            readOnly
            className={`w-full p-2 sm:p-3 border rounded-lg cursor-not-allowed text-sm sm:text-base ${
              formData.balance > 0 ? 'bg-red-900/20 border-red-700' : 'bg-green-900/20 border-green-700'
            }`}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <div className="order-2 sm:order-1 flex justify-center sm:justify-start">
            <button
              type="button"
              onClick={handleWriteOff}
              className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
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
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
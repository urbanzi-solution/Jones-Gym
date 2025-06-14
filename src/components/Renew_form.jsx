"use client";

import { useState, useEffect } from 'react';

export default function RenewalFormSection() {
  const [formData, setFormData] = useState({
    plan: '',
    amount: '',
    discount: '',
    balance: 0
  });

  // Calculate balance whenever amount or discount changes
  useEffect(() => {
    const amount = parseFloat(formData.amount) || 0;
    const discount = parseFloat(formData.discount) || 0;
    setFormData(prev => ({
      ...prev,
      balance: Math.max(0, amount - discount)
    }));
  }, [formData.amount, formData.discount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Renewal data:', formData);
    alert('Renewal saved successfully!');
  };

  const handleCancel = () => {
    // Reset form or navigate away
    setFormData({
      plan: '',
      amount: '',
      discount: '',
      balance: 0
    });
  };

  return (
    <div className="mt-8 border-t pt-6 border-[#3E3A3D]">
      <h3 className="text-lg font-medium mb-4 text-gray-300">Renew Membership</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Plan Dropdown */}
            <div>
              <label htmlFor="renewal-plan" className="block text-sm font-medium mb-1 text-gray-300">
                Plan *
              </label>
              <select
                id="renewal-plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
                required
              >
                <option value="">Select Plan</option>
                <option value="basic">Basic Membership (₹1000)</option>
                <option value="standard">Standard Membership (₹2000)</option>
                <option value="premium">Premium Membership (₹3000)</option>
              </select>
            </div>

            {/* Amount Input */}
            <div>
              <label htmlFor="renewal-amount" className="block text-sm font-medium mb-1 text-gray-300">
                Amount (₹) *
              </label>
              <input
                type="number"
                id="renewal-amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                min="0"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Discount Input */}
            <div>
              <label htmlFor="renewal-discount" className="block text-sm font-medium mb-1 text-gray-300">
                Discount (₹)
              </label>
              <input
                type="number"
                id="renewal-discount"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                placeholder="Enter discount"
                min="0"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
              />
            </div>

            {/* Balance Display (read-only) */}
            <div>
              <label htmlFor="renewal-balance" className="block text-sm font-medium mb-1 text-gray-300">
                Balance (₹)
              </label>
              <input
                type="number"
                id="renewal-balance"
                name="balance"
                value={formData.balance.toFixed(2)}
                readOnly
                className="p-4 w-full bg-[#2E2A2D] rounded-lg border border-[#3E3A3D] cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Form Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2.5 border border-[#3E3A3D] rounded-lg text-gray-300 hover:bg-[#2E2A2D] transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Renewal
          </button>
        </div>
      </form>
    </div>
  );
}
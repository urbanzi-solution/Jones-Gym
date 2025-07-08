"use client";
import { useState, useEffect } from 'react';

export default function PlanFormSection() {
  const [plans, setPlans] = useState([
    { plan: '', trainer: '', amount: '', discount: '', balance: 0, days: '', includeDays: false }
  ]);

  const handleAddPlan = () => {
    setPlans([...plans, { plan: '', trainer: '', amount: '', discount: '', balance: 0, days: '', includeDays: false }]);
  };

  const handlePlanChange = (index, field, value) => {
    const updatedPlans = [...plans];
    updatedPlans[index][field] = value;
    
    if (field === 'amount' || field === 'discount') {
      const amount = parseFloat(updatedPlans[index].amount) || 0;
      const discount = parseFloat(updatedPlans[index].discount) || 0;
      updatedPlans[index].balance = Math.max(0, amount - discount);
    }
    
    setPlans(updatedPlans);
  };

  const handleToggleDays = (index) => {
    const updatedPlans = [...plans];
    updatedPlans[index].includeDays = !updatedPlans[index].includeDays;
    if (!updatedPlans[index].includeDays) {
      updatedPlans[index].days = '';
    }
    setPlans(updatedPlans);
  };

  const handleRemovePlan = (index) => {
    if (plans.length > 1) {
      const updatedPlans = plans.filter((_, i) => i !== index);
      setPlans(updatedPlans);
    }
  };

  return (
    <div className="">
      <h3 className="text-lg font-medium mb-4 text-gray-300">Membership Plans</h3>
      
      {plans.map((plan, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 items-end">
          {/* Plan Dropdown */}
          <div>
            <label htmlFor={`plan-${index}`} className="block text-sm font-medium mb-1 text-gray-300">
              Plan
            </label>
            <select
              id={`plan-${index}`}
              value={plan.plan}
              onChange={(e) => handlePlanChange(index, 'plan', e.target.value)}
              className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
            >
              <option value="">Select Plan</option>
              <option value="basic">Basic Membership</option>
              <option value="standard">Standard Membership</option>
              <option value="premium">Premium Membership</option>
              <option value="custom">Custom Plan</option>
            </select>
          </div>

          {/* Amount Input */}
          <div>
            <label htmlFor={`amount-${index}`} className="block text-sm font-medium mb-1 text-gray-300">
              Amount (₹)
            </label>
            <input
              type="number"
              id={`amount-${index}`}
              value={plan.amount}
              onChange={(e) => handlePlanChange(index, 'amount', e.target.value)}
              placeholder="Amount"
              min="0"
              className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
            />
          </div>

          {/* Discount Input */}
          <div>
            <label htmlFor={`discount-${index}`} className="block text-sm font-medium mb-1 text-gray-300">
              Discount (₹)
            </label>
            <input
              type="number"
              id={`discount-${index}`}
              value={plan.discount}
              onChange={(e) => handlePlanChange(index, 'discount', e.target.value)}
              placeholder="Discount"
              min="0"
              className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
            />
          </div>

          {/* Balance Display */}
          <div>
            <label htmlFor={`balance-${index}`} className="block text-sm font-medium mb-1 text-gray-300">
              Balance (₹)
            </label>
            <input
              type="number"
              id={`balance-${index}`}
              value={plan.balance.toFixed(2)}
              readOnly
              className="p-4 w-full bg-[#2E2A2D] rounded-lg border border-[#3E3A3D] cursor-not-allowed"
            />
          </div>

          {/* Trainer Dropdown */}
          <div className="md:col-span-4">
            <label htmlFor={`trainer-${index}`} className="block text-sm font-medium mb-1 text-gray-300">
              Assigned Trainer
            </label>
            <select
              id={`trainer-${index}`}
              value={plan.trainer}
              onChange={(e) => handlePlanChange(index, 'trainer', e.target.value)}
              className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
            >
              <option value="">Select Trainer</option>
              <option value="john">John Doe</option>
              <option value="jane">Jane Smith</option>
              <option value="mike">Mike Johnson</option>
              <option value="sarah">Sarah Williams</option>
            </select>
          </div>

          {/* Days Section - Optional */}
          <div className="md:col-span-4 flex items-center gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`include-days-${index}`}
                checked={plan.includeDays}
                onChange={() => handleToggleDays(index)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor={`include-days-${index}`} className="ml-2 block text-sm text-gray-300">
                Include Days
              </label>
            </div>
            
            {plan.includeDays && (
              <div className="flex-1">
                <label htmlFor={`days-${index}`} className="block text-sm font-medium mb-1 text-gray-300">
                  Days (optional)
                </label>
                <input
                  type="number"
                  id={`days-${index}`}
                  value={plan.days}
                  onChange={(e) => handlePlanChange(index, 'days', e.target.value)}
                  placeholder="Number of days"
                  min="1"
                  className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                />
              </div>
            )}
          </div>

          {/* Remove Button (only shown if there are multiple plans) */}
          {plans.length > 1 && (
            <div className="md:col-span-4 flex justify-end">
              <button
                type="button"
                onClick={() => handleRemovePlan(index)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                Remove Plan
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Add Plan Button */}
      <div className="flex justify-start mt-4">
        <button
          type="button"
          onClick={handleAddPlan}
          className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Add Another Plan
        </button>
      </div>
    </div>
  );
}
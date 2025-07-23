// src\components\Balance_form.jsx
"use client";
import { useState, useEffect } from 'react';

export default function Balance_form({ user_id, membershipPlans, onCancel }) {
  const [selectedPlan, setSelectedPlan] = useState(membershipPlans[0]?.plan_name || '');
  const [newAmountReceived, setNewAmountReceived] = useState(0);
  const [formData, setFormData] = useState({
    amountPaid: membershipPlans[0]?.amount || 0,
    discount: membershipPlans[0]?.discount || 0,
    bill_no: membershipPlans[0]?.bill_no || '',
    trainer: membershipPlans[0]?.trainer || '',
  });

  // console.log("formData", formData)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [trainers, setTrainers] = useState([]);

  const selectedPlanData = membershipPlans.find(p => p.plan_name === selectedPlan) || {};
  const totalPlanAmount = (selectedPlanData.amount || 0) + (selectedPlanData.discount || 0) + (selectedPlanData.balance || 0);

  const balance = Math.max(0, totalPlanAmount - (formData.amountPaid || 0) - (formData.discount || 0) - (newAmountReceived || 0));
  
  const totalAmountReceived = (formData.amountPaid || 0) + (newAmountReceived || 0);

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
          setTrainers(data); // Expecting array of { trainer_id, name }
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
  }, [])

  useEffect(() => {
    const plan = membershipPlans.find(p => p.plan_name === selectedPlan) || membershipPlans[0] || {};
    setFormData({
      amountPaid: plan.amount || 0,
      discount: plan.discount || 0,
      bill_no: plan.bill_no || '',
      trainer: plan.trainer || '',
    });
    setNewAmountReceived(0);
    setMessage({ text: '', type: '' });
  }, [selectedPlan, membershipPlans]);

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numValue = name === 'bill_no' || name === 'trainer' ? value : parseFloat(value) || 0;

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
          totalAmountReceived,
          discount: formData.discount,
          balance, 
          trainer: formData.trainer,
        }),
      });

      if (response.ok) {
        console.log('Form submitted:', { 
          selectedPlan, 
          bill_no: formData.bill_no,
          trainer: formData.trainer,
          ...formData, 
          newAmountReceived,
          totalAmountReceived,
          balance
        });
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
    // Reset form data to original values
    const plan = membershipPlans.find(p => p.plan_name === selectedPlan) || membershipPlans[0] || {};
    setFormData({
      amountPaid: plan.amount || 0,
      discount: plan.discount || 0,
      bill_no: plan.bill_no || '',
      trainer: plan.trainer || '',
    });
    setNewAmountReceived(0);
    setMessage({ text: '', type: '' });
    
    // Close the component by calling the onCancel prop
    if (onCancel) {
      onCancel();
    }
  };

  const handleWriteOff = () => {
    console.log('Write off initiated for balance:', balance);
    setMessage({ text: 'Write off logged to console', type: 'success' });
  };

  // Validate membershipPlans
  if (!membershipPlans || membershipPlans.length === 0) {
    return <div className="p-4 sm:p-6 text-gray-300">No membership plans available.</div>;
  }

  return (
    <div className="p-4 sm:p-6 border-t border-[#3E3A3D]">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-300">Edit Balance</h2>
      
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
            {membershipPlans.map((plan) => (
              <option key={plan.plan_name} value={plan.plan_name}>
                {plan.plan_name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3 sm:mb-4">
          <label htmlFor="bill_no" className="block text-sm font-medium mb-1 text-gray-300">
            Bill Number
          </label>
          <input
            type="text"
            id="bill_no"
            name="bill_no"
            value={formData.bill_no}
            onChange={handleChange}
            placeholder="Enter bill number"
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
            readOnly
          />
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Select the trainer
          </label>
          <select 
            name="trainer"
            value={formData.trainer || ''} // Bind to formData.trainer to reflect the selected plan's trainer
            onChange={handleChange}
            className="w-full p-2 sm:p-3 bg-[#2E2A2D] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
          >
            {/*{membershipPlans.map((plan, index) => (
              <option key={`plan-${index}-${plan.trainer}`} value={plan.trainer}>
                {plan.trainer} ({plan.plan_name}) 
              </option>
            ))}*/}

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
            value={formData.amountPaid}
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
            value={formData.discount}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
          />
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium mb-1 text-gray-400">
            Balance Amount (₹)
          </label>
          <input
            value={balance}
            readOnly
            className="w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base text-gray-400"
          />
        </div>

        <div className="mb-3 sm:mb-4">
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

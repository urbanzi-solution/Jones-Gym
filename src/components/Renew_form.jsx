"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RenewalFormSection({ user_id }) {
  const [formData, setFormData] = useState({
    bill_no: '',
    plan: '',
    amount: '',
    discount: '',
    balance: 0,
    transaction_type: '',
    trainer_id: '', // Changed from trainer_name to trainer_id
    expiry_date: ''
  });
  const [plans, setPlans] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  // Fetch plans and trainers data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch plans
        const plansResponse = await fetch('/api/fetch_plans');
        if (!plansResponse.ok) throw new Error('Failed to fetch plans');
        const plansData = await plansResponse.json();
        setPlans(plansData);

        // Fetch trainers
        const trainersResponse = await fetch('/api/fetch_trainers');
        if (!trainersResponse.ok) throw new Error('Failed to fetch trainers');
        const trainersData = await trainersResponse.json();
        setTrainers(trainersData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  // Update amount and expiry_date when plan changes
  useEffect(() => {
    if (formData.plan) {
      const selectedPlan = plans.find(plan => plan.name === formData.plan);
      if (selectedPlan) {
        const currentDate = new Date();
        const expiryDate = new Date(currentDate);
        expiryDate.setDate(expiryDate.getDate() + parseInt(selectedPlan.duration));
        const expiryDateFormatted = expiryDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

        setFormData(prev => ({
          ...prev,
          amount: selectedPlan.amount.toString(),
          expiry_date: expiryDateFormatted,
          balance: Math.max(0, selectedPlan.amount - (parseFloat(prev.discount) || 0)).toFixed(2)
        }));
      }
    }
  }, [formData.plan, plans]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === 'amount' || name === 'discount') {
        const selectedPlan = plans.find(plan => plan.name === newData.plan);
        const planAmount = selectedPlan ? parseFloat(selectedPlan.amount) : 0;
        const amount = parseFloat(newData.amount) || 0;
        const discount = parseFloat(newData.discount) || 0;
        newData.balance = Math.max(0, planAmount - (amount + discount)).toFixed(2); // Fixed calculation
      }
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
      const dataToSubmit = {
        user_id,
        plan_name: formData.plan,
        bill_no: formData.bill_no,
        amount: formData.amount ? parseFloat(formData.amount) : null, // Changed to parseFloat
        discount: formData.discount ? parseFloat(formData.discount) : null, // Changed to parseFloat
        balance: formData.balance ? parseFloat(formData.balance) : null, // Changed to parseFloat
        trans_type: formData.transaction_type,
        trainer_id: formData.trainer_id, // Changed to trainer_id
        date: currentDate,
        exp_date: formData.expiry_date
      };

      console.log("🚀 Sending data to backend:", dataToSubmit);

      const response = await fetch('/api/renew-membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Failed to submit renewal data');
      }

      const result = await response.json();
      setSuccess('Renewal saved successfully!');
      // Reset form
      setFormData({
        bill_no: '',
        plan: '',
        amount: '',
        discount: '',
        balance: 0,
        transaction_type: '',
        trainer_id: '', // Changed to trainer_id
        expiry_date: ''
      });
      // Refresh the page
      router.refresh();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancel = () => {
    setFormData({
      bill_no: '',
      plan: '',
      amount: '',
      discount: '',
      balance: 0,
      transaction_type: '',
      trainer_id: '', // Changed to trainer_id
      expiry_date: ''
    });
  };

  return (
    <div className="mt-8 border-t pt-6 border-[#3E3A3D]">
      <h3 className="text-lg font-medium mb-4 text-gray-300">Renew Membership</h3>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="bill_no" className="block text-sm font-medium mb-1 text-gray-300">
                Bill No
              </label>
              <input
                type="text"
                id="bill_no"
                name="bill_no"
                value={formData.bill_no}
                onChange={handleChange}
                placeholder="Enter bill number"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
              />
            </div>

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
                {plans.map((plan) => (
                  <option key={plan.id} value={plan.name}>
                    {plan.name} (₹{plan.amount})
                  </option>
                ))}
              </select>
            </div>

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
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="renewal-balance" className="block text-sm font-medium mb-1 text-gray-300">
                Balance (₹)
              </label>
              <input
                type="number"
                id="renewal-balance"
                name="balance"
                value={formData.balance}
                readOnly
                className="p-4 w-full bg-[#2E2A2D] rounded-lg border border-[#3E3A3D] cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="transaction_type" className="block text-sm font-medium mb-1 text-gray-300">
                Transaction Type
              </label>
              <select
                id="transaction_type"
                name="transaction_type"
                value={formData.transaction_type}
                onChange={handleChange}
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
              >
                <option value="">Select Type</option>
                <option value="GPay">GPay</option>
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="trainer_name" className="block text-sm font-medium mb-1 text-gray-300">
                Trainer for the Member
              </label>
              <select
                id="trainer_name"
                name="trainer_id" // Changed to trainer_id
                value={formData.trainer_id}
                onChange={handleChange}
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
              >
                <option value="">Select Trainer</option>
                {trainers.map((trainer) => (
                  <option key={trainer.trainer_id} value={trainer.trainer_id}>
                    {trainer.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="expiry_date" className="block text-sm font-medium mb-1 text-gray-300">
                Expiry Date
              </label>
              <input
                type="date"
                id="expiry_date"
                name="expiry_date"
                value={formData.expiry_date}
                readOnly
                className="p-4 w-full bg-[#2E2A2D] rounded-lg border border-[#3E3A3D] cursor-not-allowed"
              />
            </div>
          </div>
        </div>
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
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition Játransition-colors"
          >
            Save Renewal
          </button>
        </div>
      </form>
    </div>
  );
}
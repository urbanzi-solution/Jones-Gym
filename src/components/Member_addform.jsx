// src\components\Member_addform.jsx

"use client";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Member_addpage() {
  const [availablePlans, setAvailablePlans] = useState([]);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/members');
        const data = await response.json();
        console.log(data);
        if (data.plans && data.trainers) {
          setAvailablePlans(data.plans);
          setTrainers(data.trainers);
        }
      } catch (error) {
        console.error('Error fetching plans and trainers:', error);
      }
    };
    fetchData();
  }, []);

  console.log(availablePlans);

  const router = useRouter();
  const [formData, setFormData] = useState({
    gym_id: '',
    fullName: '',
    gender: '',
    dob: '',
    location: '',
    phone_no: '',
    whatsapp_no: '',
    join_date: '',
    profilePicture: null,
  });
  const [includeMembership, setIncludeMembership] = useState(false);
  const [plans, setPlans] = useState([
    {
      plan: '',
      amount: '',
      discount: '',
      balance: 0,
      transaction_type: '',
      bill_no: '',
      trainer: '',
      includeDays: false,
      days: '',
    },
  ]);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handlePlanChange = (index, field, value) => {
    setPlans((prevPlans) => {
      const newPlans = [...prevPlans];
      newPlans[index] = { ...newPlans[index], [field]: value };

      if (field === 'amount' || field === 'discount') {
        const amount = parseFloat(newPlans[index].amount) || 0;
        const discount = parseFloat(newPlans[index].discount) || 0;
        newPlans[index].balance = Math.max(0, amount - discount);
      }

      return newPlans;
    });
  };

  const handleToggleDays = (index) => {
    setPlans((prevPlans) => {
      const newPlans = [...prevPlans];
      newPlans[index] = {
        ...newPlans[index],
        includeDays: !newPlans[index].includeDays,
        days: !newPlans[index].includeDays ? newPlans[index].days : '',
      };
      return newPlans;
    });
  };

  const handleAddPlan = () => {
    setPlans((prevPlans) => [
      ...prevPlans,
      {
        plan: '',
        amount: '',
        discount: '',
        balance: 0,
        transaction_type: '',
        trainer: '',
        includeDays: false,
        days: '',
      },
    ]);
  };

  const handleRemovePlan = (index) => {
    if (plans.length > 1) {
      setPlans((prevPlans) => prevPlans.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!/^\d{10}$/.test(formData.phone_no)) {
      setError('Phone number must be 10 digits');
      setIsSubmitting(false);
      return;
    }
    if (!/^\d{10}$/.test(formData.whatsapp_no)) {
      setError('WhatsApp number must be 10 digits');
      setIsSubmitting(false);
      return;
    }

    try {
      const dataToSubmit = {
        gym_id: formData.gym_id,
        full_name: formData.fullName,
        gender: formData.gender,
        dob: formData.dob,
        location: formData.location,
        phone: formData.phone_no,
        whatsapp: formData.whatsapp_no,
        join_date: formData.join_date,
        ...(includeMembership && { membership_plans: plans }),
      };

      if (formData.profilePicture) {
        console.warn('Profile picture selected but not uploaded (no storage configured)');
        // Future: Add cloud storage upload (e.g., Cloudinary) and include URL
        // const imageUrl = await uploadImage(formData.profilePicture);
        // dataToSubmit.profile_picture = imageUrl;
      }

      const response = await fetch('/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      const result = await response.json();
      console.log('Success:', result);
      router.push('/members');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="box">
      <div className="flex justify-between items-center text-xl pb-2 border-b md:text-2xl">
        <h2>Add Member</h2>
        <GrClose
          className="cursor-pointer hover:scale-90 hover:bg-black"
          onClick={() => router.back()}
        />
      </div>

      <form onSubmit={handleSubmit} className="mt-5">
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            Error: {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="gym_id" className="block text-sm font-medium mb-1 text-gray-300">
                Gym ID *
              </label>
              <input
                type="text"
                id="gym_id"
                value={formData.gym_id}
                onChange={handleChange}
                placeholder="Enter Gym ID"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1 text-gray-300">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium mb-1 text-gray-300">
                Gender *
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium mb-1 text-gray-300">
                Date of Birth *
              </label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1 text-gray-300">
                Location *
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter the location"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="phone_no" className="block text-sm font-medium mb-1 text-gray-300">
                Phone Number *
              </label>
              <input
                type="text"
                id="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
                placeholder="Enter the phone number"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="whatsapp_no" className="block text-sm font-medium mb-1 text-gray-300">
                WhatsApp Number *
              </label>
              <input
                type="text"
                id="whatsapp_no"
                value={formData.whatsapp_no}
                onChange={handleChange}
                placeholder="Enter the WhatsApp number"
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="join_date" className="block text-sm font-medium mb-1 text-gray-300">
                Joining Date *
              </label>
              <input
                type="date"
                id="join_date"
                value={formData.join_date}
                onChange={handleChange}
                className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Profile Picture (Optional)
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#3E3A3D] rounded-lg cursor-pointer bg-[#232024] hover:bg-[#2E2A2D]">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="text-sm text-gray-400">Click to upload image</p>
                  </div>
                  <input
                    type="file"
                    id="profilePicture"
                    onChange={handleChange}
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <input
            type="checkbox"
            id="includeMembership"
            checked={includeMembership}
            onChange={(e) => setIncludeMembership(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="includeMembership" className="text-sm text-gray-300">
            Include Membership Plan?
          </label>
        </div>

        {includeMembership && (
          <div className="mt-8 border-t border-[#6e6e6e] pt-4">
            <h3 className="text-lg font-medium mb-4 text-gray-300">Membership Plans</h3>
            
            {plans.map((plan, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 items-end">
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
                    {availablePlans.map((planName) => (
                      <option key={planName.plan_name} value={planName.plan_name}>
                        {planName.plan_name}
                      </option>
                    ))}
                  </select>
                </div>

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

                <div>
                  <label htmlFor={`balance-${index}`} className="block text-sm font-medium mb-1 text-gray-300">
                    Balance (₹)
                  </label>
                  <input
                    type="number"
                    id={`balance-${index}`}
                    value={plan.balance.toFixed(2)}
                    readOnly
                    className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor={`transaction_type-${index}`} className="block text-sm font-medium mb-1 text-gray-300">
                    Transaction Type
                  </label>
                  <select
                    id={`transaction_type-${index}`}
                    value={plan.transaction_type}
                    onChange={(e) => handlePlanChange(index, 'transaction_type', e.target.value)}
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
                  <label htmlFor={`bill_no-${index}`} className="block text-sm font-medium mb-1 text-gray-300">
                    Bill No
                  </label>
                  <input
                    type="text"
                    id={`bill_no-${index}`}
                    value={plan.bill_no}
                    onChange={(e) => handlePlanChange(index, 'bill_no', e.target.value)}
                    placeholder="Bill No"
                    min="0"
                    className="p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]"
                  />
                </div>

                <div className="md:col-span-5">
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
                    {trainers.map((trainer) => (
                      <option key={trainer.trainer_id} value={trainer.trainer_id}>
                        {trainer.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-5 flex items-center gap-4">
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

                {plans.length > 1 && (
                  <div className="md:col-span-5 flex justify-end">
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
          </div>
        )}

        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2.5 border border-[#3E3A3D] rounded-lg text-gray-300 hover:bg-[#2E2A2D] transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
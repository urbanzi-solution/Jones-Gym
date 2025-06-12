"use client";
import { IoPerson } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export default function DashboardActivePlans() {
  const router = useRouter();
  
  // Mock data for active plans - in a real app, this would come from your backend
  const activePlans = [
    { id: 1, name: "Basic Gym", price: 2500, members: 8, duration: 30, status: "active" },
    { id: 2, name: "Premium Plan", price: 4000, members: 5, duration: 60, status: "active" },
    { id: 3, name: "Student Special", price: 1800, members: 12, duration: 30, status: "active" },
  ];

  return (
    <div className="box">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-2xl">Active Plans</h2>
        <button 
          onClick={() => router.push('/plans/add')} // Link to your add plan form
          className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
        >
          Add Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {activePlans.map((plan) => (
          <div 
            key={plan.id}
            className="flex flex-col w-full gap-3 bg-[#232024] p-5 rounded-lg items-center justify-center sm:text-xl hover:bg-[#2E2A2D] transition-colors cursor-pointer"
            onClick={() => router.push(`/plans/${plan.id}`)} // Link to plan details
          >
            <h4 className="text-center font-medium">{plan.name}</h4>
            <h3 className="text-[#FFDD4A] font-semibold">{plan.price.toLocaleString()}/-</h3>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="flex items-center gap-1">
                <IoPerson className="text-[#FFDD4A]" />
                {plan.members}
              </span>
              <span>•</span>
              <span>{plan.duration} days</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Renew_form from "./Renew_form";
import { GrClose } from "react-icons/gr";
import Balance_form from "./Balance_form";

export default function MemberlistProfile({ member }) {
  const [renewBox, setRenewBox] = useState(false);
  const [balanceBox, setBalanceBox] = useState(false);

  const toggleRenewBox = () => {
    setRenewBox(!renewBox);
    if (balanceBox) setBalanceBox(false);
  };

  const toggleBalanceBox = () => {
    setBalanceBox(!balanceBox);
    if (renewBox) setRenewBox(false);
  };

  // Calculate days until expiry (assuming 1-year membership)
  const joiningDate = new Date(member.joining_date);
  const expiryDate = new Date(joiningDate);
  expiryDate.setFullYear(joiningDate.getFullYear() + 1);
  const today = new Date();
  const daysUntilExpiry = Math.max(
    0,
    Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24))
  );

  // Format expiry date
  const formattedExpiry = expiryDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).split('/').join('-');

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 p-4 md:p-6 lg:p-10 gap-4 md:gap-10">
      {/* Profile Image Section */}
      <div className="relative">
        <img
          className="object-cover w-full h-full rounded-lg aspect-[3/4] md:max-h-80 lg:max-h-150"
          src="/images/user2.jpg"
          alt="User profile"
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
          <p className="text-white font-medium text-sm md:text-lg">#{member.user_id}</p>
          <p className="text-white font-bold text-lg md:text-2xl">{member.name}</p>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="flex flex-col text-center justify-center gap-4 md:gap-6 lg:gap-8">
        {/* Paid Button */}
        <div className="relative">
          <button
            onClick={toggleBalanceBox}
            className="w-full bg-[#71CA35] flex gap-2 justify-center items-center rounded-lg text-black font-semibold px-4 py-2 text-xl md:text-3xl md:py-4"
          >
            Paid <FaRegCheckCircle />
          </button>
          
          {/* Balance Form Modal */}
          {balanceBox && (
            <div className="absolute top-full left-0 right-0 z-50 mt-4 bg-[#0a0a0a] rounded-xl shadow-lg p-4 md:p-8 text-center border border-[#6e6e6e]">
              <div className="flex justify-end items-center mb-4 pb-2 border-b border-[#6e6e6e]">
                <GrClose
                  onClick={toggleBalanceBox}
                  className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
                  size={28}
                />
              </div>
              <Balance_form />
            </div>
          )}
        </div>

        {/* Membership Info */}
        <div className="bg-[#FFDD4A] text-black px-4 py-2 rounded-lg gap-2 flex flex-col items-center md:py-4">
          <h3 className="text-xl font-semibold md:text-2xl">Basic Gym</h3>
          <p className="text-sm md:text-lg">Expiry in {daysUntilExpiry} Days</p>
          <p className="text-sm font-semibold md:text-lg">{formattedExpiry}</p>
        </div>

        {/* Renew Button */}
        <div className="relative">
          <button
            onClick={toggleRenewBox}
            className="w-full bg-[#2B2E32] px-4 py-2 font-semibold rounded-lg text-[#FFDD4A] border-2 border-[#FFDD4A] md:py-4 md:text-2xl"
          >
            Renew
          </button>
          
          {/* Renew Form Modal */}
          {renewBox && (
            <div className="absolute top-full left-0 right-0 z-50 mt-4 bg-[#0a0a0a] rounded-xl shadow-lg p-4 md:p-8 text-center border border-[#6e6e6e]">
              <div className="flex justify-end items-center mb-4 pb-2 border-b border-[#6e6e6e]">
                <GrClose
                  onClick={toggleRenewBox}
                  className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
                  size={28}
                />
              </div>
              <Renew_form />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
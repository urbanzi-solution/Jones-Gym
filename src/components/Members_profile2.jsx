// src\components\Members_profile2.jsx
"use client";
import { useState, useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Members_profile2({ member }) {
  
  // console.log(member);

  // Format joining date
  const formattedJoiningDate = new Date(member.joining_date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).split('/').join('-');

  // State for remark and blacklist status
  const [remark, setRemark] = useState('No Remarks');
  const [blacklistStatus, setBlacklistStatus] = useState('Not Black-listed');

  // Fetch remark and blacklist data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fetch_remark_blcklist');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Find the data for the current member
        const memberData = data.find(item => item.userId === member.user_id);
        if (memberData) {
          setRemark(memberData.remark || 'No Remarks');
          setBlacklistStatus(memberData.blacklistDescription ? 'Black-listed' : 'Not Black-listed');
        }
      } catch (error) {
        console.error('Error fetching remark and blacklist data:', error);
      }
    };
    fetchData();
  }, [member.user_id]);

  return (
    <div className='p-4 md:p-6 lg:p-10'>
        <div className="mb-5 md:mb-10 text-sm md:text-lg">
          <p className={remark === 'No Remarks' ? 'text-white' : 'text-yellow-600'}>Note: {remark}</p>
          <p className={blacklistStatus === 'Black-listed' ? 'text-red-600' : 'text-green-600'}>
            Blacklist Status: {blacklistStatus}
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 md:gap-8 md:text-2xl'>
            <h2 className="flex gap-2 items-center"><FaLocationDot className="text-[#FFDD4A]"/> {member.location}</h2>
            <h2 className="flex gap-2 items-center"><SiWhatsapp className="text-[#FFDD4A]"/> {member.whatsapp_no}</h2>
            <h2 className="flex gap-2 items-center"><FaPhoneAlt className="text-[#FFDD4A]"/> {member.phone_no}</h2>
            <h2 className="flex gap-2 items-center"><span className="text-[#FFDD4A] font-semibold">J.D</span> {formattedJoiningDate}</h2>
        </div>
        <div className='grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 md:text-2xl mt-10 md:mt-15'>
            <a
              className="bg-[#2B2E32] px-4 py-3 md:py-6 rounded-lg text-center flex items-center gap-2 justify-center"
              href={`https://wa.me/${member.whatsapp_no}`}
            >
              WhatsApp <BsWhatsapp />
            </a>
            <a
              className="bg-[#2B2E32] px-4 py-3 md:py-6 rounded-lg text-center flex items-center gap-2 justify-center"
              href={`tel:${member.phone_no}`}
            >
              Call <FaPhoneAlt />
            </a>
        </div>
    </div>
  );
}
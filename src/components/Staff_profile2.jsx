// src/components/Staff_profile2.jsx
import { FaLocationDot } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { query } from '@/lib/db'

export default function Staff_profile2({ trainer }) {

  const formattedJoiningDate = new Date(trainer.joining_date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).split('/').join('-');

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <div className="grid grid-cols-2 gap-4 md:gap-8 md:text-2xl">
        <h2 className="flex gap-2 items-center">
          <FaLocationDot className="text-[#FFDD4A]" /> {trainer.location || 'Location Not Available'}
        </h2>
        <span className="flex gap-1 md:gap-2 items-center">
          <IoPerson className="text-[#FFDD4A]" />
          <h2>{trainer.count || 'Nobody Allocated'}</h2>
        </span>
        <h2 className="flex gap-2 items-center">
          <FaPhoneAlt className="text-[#FFDD4A]" /> {trainer.phone_no || 'Phone-No Not Available'}
        </h2>
        <h2 className="flex gap-2 items-center">
          <span className="text-[#FFDD4A] font-semibold">J.D</span>
          {formattedJoiningDate || "Joining Date Not Available"}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 md:text-2xl mt-10 md:mt-15">
        <a
          className="bg-[#2B2E32] px-4 py-3 md:py-6 rounded-lg text-center flex items-center gap-2 justify-center"
          href={`https://wa.me/${trainer.phone_no?.replace('+', '') || ''}`}
        >
          WhatsApp <BsWhatsapp />
        </a>
        <a
          className="bg-[#2B2E32] px-4 py-3 md:py-6 rounded-lg text-center flex items-center gap-2 justify-center"
          href={`tel:${trainer.phone_no || ''}`}
        >
          Call <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
}
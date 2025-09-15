//src\components\Staff_profile.jsx
import { FaArrowRight } from 'react-icons/fa6';
import TrainerProfileAvatar from "@/components/TrainerProfileAvatar";

export default function Staff_profile({ trainer }) {

  return (
    <div className="grid grid-cols-2 p-4 md:p-6 lg:p-10 gap-4 md:gap-10">
      <div className="relative">

        {/* <TrainerProfileAvatar trainer={member} /> */}
        
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
          <p className="text-white font-medium text-sm md:text-lg">{trainer?.trainer_id || '124'}</p>
          <p className="text-white font-bold text-lg md:text-2xl">{trainer?.name || 'User2'}</p>
        </div>
      </div>
      <div className="flex flex-col text-center justify-center gap-4 md:gap-6 lg:gap-10">
        <a
          href={
            trainer?.trainer_id
              ? `/pt-attendance?trainer_id=${trainer.trainer_id}&name=${encodeURIComponent(trainer.name || 'Unknown')}`
              : '#'
          }
          className={`bg-[#2B2E32] flex gap-2 justify-center items-center rounded-lg text-white font-semibold px-4 py-2 text-xl md:text-3xl md:py-4 lg:py-6 hover:bg-[#3B3E42] transition-colors ${
            !trainer?.trainer_id ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          PT Attendance <FaArrowRight />
        </a>
        <a
          href={
            trainer?.trainer_id
              ? `/staff-attendance?trainer_id=${trainer.trainer_id}&name=${encodeURIComponent(trainer.name || 'Unknown')}`
              : '#'
          }
          className={`bg-[#FFDD4A] hover:bg-[#c2a836] px-4 py-2 font-semibold rounded-lg text-black border-2 md:py-4 lg:py-6 md:text-2xl ${
            !trainer?.trainer_id ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Staff Attendance
        </a>
        
      </div>
    </div>
  );
}
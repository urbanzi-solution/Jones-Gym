'use client';
import { useSearchParams } from 'next/navigation';
import PTAttendanceTable from '@/components/pt_attendance_table';

export default function PTAttendance() {
  const searchParams = useSearchParams();
  const trainerId = searchParams.get('trainer_id');
  const name = searchParams.get('name');

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <PTAttendanceTable trainerId={trainerId} name={name} />
    </div>
  );
}
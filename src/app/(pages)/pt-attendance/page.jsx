'use client';
import PTAttendanceTable from '@/components/pt_attendance_table';
import { useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic'

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
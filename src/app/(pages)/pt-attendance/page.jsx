'use client';

import PTAttendanceTable from '@/components/pt_attendance_table';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

// This component actually uses the search params
function PTAttendanceContent() {
  const searchParams = useSearchParams();
  const trainerId = searchParams.get('trainer_id');
  const name = searchParams.get('name');

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <PTAttendanceTable trainerId={trainerId} name={name} />
    </div>
  );
}

// Top-level page just renders the content inside Suspense
export default function PTAttendance() {
  return (
    <Suspense fallback={<div>Loading Attendance...</div>}>
      <PTAttendanceContent />
    </Suspense>
  );
}
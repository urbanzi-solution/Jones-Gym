'use client';

import Detailed_transations from "@/components/Detailed_transations";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

function TransactionsContent() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  // console.log("just consoling", userId);

  return (
    <div>
      {/* <Inpage_header title='Transations of' /> */}
      <Detailed_transations userId={userId} />
      <div className="h-20"></div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransactionsContent />
    </Suspense>
  );
}
'use client';
// import Inpage_header from "@/components/Inpage_header"
import Detailed_transations from "@/components/Detailed_transations"
import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function Page() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  // console.log("just consoling", userId);

  return (
    <div>
      {/* <Inpage_header title='Transations of' /> */}
      <Detailed_transations userId={userId} />
      <div className="h-20"></div>
    </div>
  )
}
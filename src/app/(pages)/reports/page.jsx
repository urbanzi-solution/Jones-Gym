// src\app\(pages)\reports\page.jsx
import Inpage_header from "@/components/Inpage_header"
import Report_filter from "@/components/Report_filter"
import Recent_tansation from '@/components/Report_Rencent_transation'

export const dynamic = 'force-dynamic'

export default function page() {
  return (
    <div>
      {/* <Inpage_header title='Reports' /> */}
      <h2 className = "text-center text-4xl font-bold">Recent Tansation</h2>
      <Report_filter />
      <Recent_tansation />
      <div className="h-20"></div>
    </div>
  )
}

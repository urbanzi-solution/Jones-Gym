// src\app\(pages)\report-transations\page.jsx
import Detailed_transations from "@/components/Report_detailed_transation"

export const dynamic = 'force-dynamic'

export default function page() {
  return (
    <div>
      <Detailed_transations />
      <div className="h-20"></div>
    </div>
  )
}


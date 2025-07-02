// src\app\(pages)\report-transations\page.jsx
import Inpage_header from "@/components/Inpage_header"
import Detailed_transations from "@/components/Report_detailed_transation"

export default function page() {
  return (
    <div>
      {/* <Inpage_header title='Transations' /> */}
      <h2 className = "text-center text-4xl font-bold">Detailed Transactions</h2>
      <Detailed_transations />
      <div className="h-20"></div>
    </div>
  )
}


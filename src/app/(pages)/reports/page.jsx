import Inpage_header from "@/components/Inpage_header"
import Report_filter from "@/components/Report_filter"


export default function page() {
  return (
    <div>
      <Inpage_header title='Reports' />
      <Report_filter />
      <div className="h-20"></div>

    </div>
  )
}

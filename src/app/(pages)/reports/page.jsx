import Inpage_header from "@/components/Inpage_header"
import Report_filter from "@/components/Report_filter"
import Recent_tansation from '@/components/Report_Rencent_transation'


export default function page() {
  return (
    <div>
      <Inpage_header title='Reports' />
      <Report_filter />
      <Recent_tansation />
      <div className="h-20"></div>

    </div>
  )
}

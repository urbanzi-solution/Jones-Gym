import Inpage_header from "@/components/Inpage_header"
import Staff_searchfilter from "@/components/Staff_searchfilter"
import Staff_listbox from "@/components/Staff_listbox"

export default function Staff() {
  return (
    <div>
      <Inpage_header title='Staff List' />
      <Staff_searchfilter />
      <Staff_listbox/>
      <div className="h-20"></div>
    </div>
  )
}


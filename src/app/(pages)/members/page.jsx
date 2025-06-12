import Inpage_header from "@/components/Inpage_header";
import MemberSearchFilter from "@/components/Member_searchFilter";
import Memberlist_boxes from "@/components/Memberlist_boxes";
import Dashboardgreeting from "@/components/Dashboard_greeting";

export default function Members() {
  return (
    <div>
      <Dashboardgreeting />
      <Inpage_header title='Members List' />
      <MemberSearchFilter />
      <Memberlist_boxes className='z-0' />
      <div className="h-20">

      </div>
    </div>
  );
}

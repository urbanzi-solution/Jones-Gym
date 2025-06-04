import Inpage_header from "@/components/Inpage_header";
import MemberSearchFilter from "@/components/Member_searchFilter";
import Memberlist_boxes from "@/components/Memberlist_boxes";
import Add_member from "@/components/Add_member";

export default function Members() {
  return (
    <div>
      <Inpage_header title='Members List' />
      <MemberSearchFilter />
      <Memberlist_boxes />
      <Add_member value="Member" />
      <div className="h-20">

      </div>
    </div>
  );
}

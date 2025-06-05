import Inpage_header from "@/components/Inpage_header_3dot";
import Memberlist_profile from "@/components/memberlist_profile";
import Members_profile2 from "@/components/Members_profile2";
import Recent_transations from "@/components/Recent_transations";



export default function MemberProfile() {
  return (
    <div>
      <Inpage_header title='Member Profile' />
      <Memberlist_profile />
      <Members_profile2 />
      <Recent_transations />
      <div className="h-20">

      </div>
    </div>
  );
}

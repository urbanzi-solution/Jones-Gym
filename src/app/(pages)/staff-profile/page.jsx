import Inpage_header from "@/components/Inpage_header_3dot";
import Staff_profile from "@/components/Staff_profile";
import Staff_profile2 from "@/components/Staff_profile2";
import Person_understaff from "@/components/Person_understaff";



export default function MemberProfile() {
  return (
    <div>
      <Inpage_header title='Stff Profile' />
      <Staff_profile />
      <Staff_profile2 />
      <Person_understaff />
      
      
      <div className="h-20">

      </div>
    </div>
  );
}

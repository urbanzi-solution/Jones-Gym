import Inpage_header from "@/components/Inpage_header";
import MemberSearchFilter from "@/components/Member_searchFilter";
import Gallery_image from "@/components/Gallery_image";


export default function Gallery() {
  return (
    <div>
      <Inpage_header title='Gallery' />
      <MemberSearchFilter />
      <Gallery_image />
      <div className="h-20">

      </div>
    </div>
  );
}

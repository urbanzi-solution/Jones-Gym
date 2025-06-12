import { FiPlusCircle } from "react-icons/fi";




export default function Add_member({value, Link}) {

  

  return (
    <div>
        <a href={Link} className="text-center w-full flex gap-1 items-center justify-center bg-[#FFDD4A] text-black p-4 md:px-6 md:py-4 rounded-full md:text-2xl mx-auto my-4 md:mb-8 lg:mb-10 md:w-1/2">Add {value}<FiPlusCircle className="size-6"/></a>
    </div>
  )
}

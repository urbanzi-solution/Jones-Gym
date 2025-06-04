import { FiPlusCircle } from "react-icons/fi";


export default function Add_member({value}) {
  return (
    <div>
        <a href="" className="flex gap-1 items-center justify-center bg-[#FFDD4A] text-black px-4 py-2 md:px-6 md:py-4 rounded-full md:text-2xl w-1/2 mx-auto mb-4 md:mb-8 lg:mb-10">Add {value}<FiPlusCircle className="size-6"/></a>
    </div>
  )
}

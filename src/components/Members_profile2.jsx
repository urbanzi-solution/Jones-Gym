import { FaLocationDot } from "react-icons/fa6";
import { SiTrainerroad } from "react-icons/si";
import { FaPhoneAlt  } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";





export default function Members_profile2() {
  return (
    <div className='p-4 md:p-6 lg:p-10'>
        <div className='grid grid-cols-2 gap-4 md:gap-8 md:text-2xl'>
            <h2 className="flex gap-2 items-center"><FaLocationDot className="text-[#FFDD4A]"/> Thampanoor</h2>
            <h2 className="flex gap-2 items-center"><SiTrainerroad className="text-[#FFDD4A]"/> Rithwik J</h2>
            <h2 className="flex gap-2 items-center"><FaPhoneAlt className="text-[#FFDD4A]"/> +91 987654321</h2>
            <h2 className="flex gap-2 items-center"><span className="text-[#FFDD4A] font-semibold">J.D</span>20-12-2022</h2>
        </div>
        <div className='grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 md:text-2xl mt-10 md:mt-15'>
            <a className="bg-[#2B2E32] px-4 py-3 md:py-6 rounded-lg text-center flex items-center gap-2 justify-center" href="">WhatsApp <BsWhatsapp/></a>
            <a className="bg-[#2B2E32] px-4 py-3 md:py-6 rounded-lg text-center flex items-center gap-2 justify-center" href="">Call <FaPhoneAlt/></a>
            
        </div>
    </div>
  )
}

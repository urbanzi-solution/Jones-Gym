import { IoPersonSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";



export default function Header() {
    return(
        <header className="flex justify-between p-5 text-[#FFDD4A] text-[24px] md:text-[32px] lg:text-[40px] md:p-10 lg:px-20">
            <a href="/" className="righteous-font">JONES GYM</a>
            <div className="flex gap-5 md:gap-10 items-center">
                <a className="w-full text-[24px] md:text-[30px] lg:text-[40px]" href="/notification"><IoNotifications/></a>
                <a className="w-full text-[24px] md:text-[30px] lg:text-[40px]" href=""><IoPersonSharp/></a>
            </div>

        </header>
    )
}
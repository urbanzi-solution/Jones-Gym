import { FaArrowRight } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { CiCreditCard1 } from "react-icons/ci";



export default function Recent_transations() {
  return (
    <div className="box">
      <div className="flex justify-between items-center text-lg md:text-xl font-semibold lg:text-2xl">
        <h2 className="">Recent Transactions</h2>
        <a href="/transations"><FaArrowRight /></a>
      </div>

      <div className="flex justify-between items-center bg-[#181818] px-4 py-2 rounded-lg my-5 md:px-8 md:py-4">
        <div className="flex gap-2 items-center md:gap-5">
          <FaCcAmazonPay className="size-8 md:size-12" />
          <div className="md:text-xl">
            <h2>Basic Gym</h2>
            <p>01-01-2026</p>
          </div>
        </div>
        <p className="text-lg text-[#71CA35] md:text-xl">2500</p>
        <p className="text-lg text-[#B30000] md:text-xl">0</p>
      </div>

      <div className="flex justify-between items-center bg-[#181818] px-4 py-2 rounded-lg my-5 md:px-8 md:py-4">
        <div className="flex gap-2 items-center md:gap-5">
          <HiOutlineCash className="size-8 md:size-12" />
          <div className="md:text-xl">
            <h2>Basic Gym</h2>
            <p>01-01-2026</p>
          </div>
        </div>
        <p className="text-lg text-[#71CA35] md:text-xl">2500</p>
        <p className="text-lg text-[#B30000] md:text-xl">0</p>
      </div>

      <div className="flex justify-between items-center bg-[#181818] px-4 py-2 rounded-lg my-5 md:px-8 md:py-4">
        <div className="flex gap-2 items-center md:gap-5">
          <CiCreditCard1 className="size-8 md:size-12" />
          <div className="md:text-xl">
            <h2>Basic Gym</h2>
            <p>01-01-2026</p>
          </div>
        </div>
        <p className="text-lg text-[#71CA35] md:text-xl">2500</p>
        <p className="text-lg text-[#B30000] md:text-xl">0</p>
      </div>
    </div>
  );
}

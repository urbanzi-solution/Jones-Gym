import { SlCalender } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa6";

export default function Detailed_transations() {
  return (
    <div className="box">
      <div className="flex justify-between items-center md:text-xl">
        <h3 className="flex items-center">
          Today <FaCaretDown />
        </h3>
        <SlCalender />
      </div>

      <div className="flex flex-col gap-2 mt-10 md:text-xl">
        <h2 className="flex gap-1">
          Full name: <span className="font-semibold">Rithwik</span>
        </h2>
        <h2 className="flex gap-1">
          Gym ID: <span className="font-semibold">#123</span>
        </h2>
      </div>

      {/* Transactions Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full text-center">
          <thead>
            <tr className="text-center font-bold md:text-lg text-sm">
              <th className="p-3 bg-[#303336]  border-r">Bill Number</th>
              <th className="p-3 bg-[#303336]  border-r">Plan</th>
              <th className="p-3 bg-[#303336]  border-r">Amount Paid</th>
              <th className="p-3 bg-[#303336]  border-r">Discount</th>
              <th className="p-3 bg-[#303336]  border-r">Balance</th>
              <th className="p-3 bg-[#303336]  border-r ">Date</th>
              <th className="p-3 bg-[#303336]  rounded-tr-lg border-l">
                Payment Method
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="group text-sm">
              <td className="p-3 py-6 bg-[#404346] text-white rounded-l-lg group-hover:bg-[#505356] border-r">
                #982
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                Basic Gym
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                $80
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                $5
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                $0
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                2023-09-01
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white rounded-r-lg group-hover:bg-[#505356] borderl">
                Cash
              </td>
            </tr>

            <tr className="group">
              <td className="p-3 py-6 bg-[#303336] text-white rounded-l-lg group-hover:bg-[#404346] border-r">
                #876
              </td>
              <td className="p-3 py-6 bg-[#303336] text-white group-hover:bg-[#404346] border-r">
                PT
              </td>
              <td className="p-3 py-6 bg-[#303336] text-white group-hover:bg-[#404346] border-r">
                $80
              </td>
              <td className="p-3 py-6 bg-[#303336] text-white group-hover:bg-[#404346] border-r">
                $0
              </td>
              <td className="p-3 py-6 bg-[#303336] text-white group-hover:bg-[#404346] border-r">
                $0
              </td>
              <td className="p-3 py-6 bg-[#303336] text-white group-hover:bg-[#404346] border-r">
                2023-08-15
              </td>
              <td className="p-3 py-6 bg-[#303336] text-white rounded-r-lg group-hover:bg-[#404346]">
                Debit Card
              </td>
            </tr>

            <tr className="group">
              <td className="p-3 py-6 bg-[#404346] text-white rounded-l-lg group-hover:bg-[#505356] border-r">
                #765
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                TP
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                $120
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                $10
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                $0
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                2023-07-10
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white rounded-r-lg group-hover:bg-[#505356]">
                UPI
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

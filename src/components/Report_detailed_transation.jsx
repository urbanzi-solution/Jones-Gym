// components/transactions/DetailedTransactions.jsx
'use client';

import { SlCalender } from "react-icons/sl";
import { FaCaretDown, FaEllipsisV } from "react-icons/fa";

export default function DetailedTransactions() {
  // Function to handle edit action
  const handleEdit = (billNumber) => {
    console.log(`Edit transaction with Bill Number: ${billNumber}`);
    // You can replace this with actual edit logic
  };

  // Function to handle delete action
  const handleDelete = (billNumber) => {
    console.log(`Delete transaction with Bill Number: ${billNumber}`);
    // You can replace this with actual delete logic
  };

  return (
    <div className="box">
      <div className="flex justify-between items-center md:text-xl">
        <h3 className="flex items-center">
          Today <FaCaretDown />
        </h3>
        <SlCalender />
      </div>

      {/* Transactions Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full text-center">
          <thead>
            <tr className="text-center font-bold md:text-lg text-sm">
              <th className="p-3 bg-[#303336] border-r">Bill Number</th>
              <th className="p-3 bg-[#303336] border-r">Plan</th>
              <th className="p-3 bg-[#303336] border-r">Amount Paid</th>
              <th className="p-3 bg-[#303336] border-r">Discount</th>
              <th className="p-3 bg-[#303336] border-r">Balance</th>
              <th className="p-3 bg-[#303336] border-r">Date</th>
              <th className="p-3 bg-[#303336] border-r">Payment Method</th>
              <th className="p-3 bg-[#303336] rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="group text-sm">
              <td className="p-3 py-6 bg-[#404346] text-white border-r group-hover:bg-[#505356]">
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
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                Cash
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] relative">
                <div className="dropdown">
                  <button className="text-white hover:text-gray-300">
                    <FaEllipsisV />
                  </button>
                  <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-[#404346] rounded-md shadow-lg z-10 hidden group-hover:block">
                    <button
                      onClick={() => handleEdit(982)}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#505356]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(982)}
                      className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#505356]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="group">
              <td className="p-3 py-6 bg-[#303336] text-white border-r group-hover:bg-[#404346]">
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
              <td className="p-3 py-6 bg-[#303336] text-white group-hover:bg-[#404346] border-r">
                Debit Card
              </td>
              <td className="p-3 py-6 bg-[#303336] text-white group-hover:bg-[#404346] relative">
                <div className="dropdown">
                  <button className="text-white hover:text-gray-300">
                    <FaEllipsisV />
                  </button>
                  <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-[#303336] rounded-md shadow-lg z-10 hidden group-hover:block">
                    <button
                      onClick={() => handleEdit(876)}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#404346]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(876)}
                      className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#404346]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="group">
              <td className="p-3 py-6 bg-[#404346] text-white border-r group-hover:bg-[#505356]">
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
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r">
                UPI
              </td>
              <td className="p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] relative">
                <div className="dropdown">
                  <button className="text-white hover:text-gray-300">
                    <FaEllipsisV />
                  </button>
                  <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-[#404346] rounded-md shadow-lg z-10 hidden group-hover:block">
                    <button
                      onClick={() => handleEdit(765)}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#505356]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(765)}
                      className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#505356]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
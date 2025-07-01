"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuUndo2 } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import Addmembership from "@/components/Add-membership_form";
import RemarksForm from "@/components/Remarks_form";
import BlacklistForm from "@/components/Blacklist_form";
import EditUserData from "@/components/edit_user_data";

export default function Inpage_header({ title, member_id }) {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);
  const [addMembershipShow, setAddMembershipShow] = useState(false);
  const [remarksShow, setRemarksShow] = useState(false);
  const [blacklistShow, setBlacklistShow] = useState(false);
  const [editUserDataShow, setEditUserDataShow] = useState(false);

  const toggleOptions = () => setShowOptions(!showOptions);

  const openAddMembership = () => {
    setAddMembershipShow(true);
    setRemarksShow(false);
    setBlacklistShow(false);
    setEditUserDataShow(false);
    setShowOptions(false);
  };

  const openRemarks = () => {
    setRemarksShow(true);
    setAddMembershipShow(false);
    setBlacklistShow(false);
    setEditUserDataShow(false);
    setShowOptions(false);
  };

  const openBlacklist = () => {
    setBlacklistShow(true);
    setAddMembershipShow(false);
    setRemarksShow(false);
    setEditUserDataShow(false);
    setShowOptions(false);
  };

  const openEditUserData = () => {
    setEditUserDataShow(true);
    setAddMembershipShow(false);
    setRemarksShow(false);
    setBlacklistShow(false);
    setShowOptions(false);
  };

  const closeAllModals = () => {
    setAddMembershipShow(false);
    setRemarksShow(false);
    setBlacklistShow(false);
    setEditUserDataShow(false);
  };

  return (
    <div className="relative flex text-2xl md:text-4xl p-4 md:p-6 lg:p-10 justify-between items-center">
      <a href="">
        <LuUndo2 onClick={() => router.back()} className="text-[#FFDD4A]" />
      </a>
      <h1 className="text-center w-full">{title}</h1>
      <button onClick={toggleOptions}>
        <SlOptionsVertical className="text-[#ffffff]" />
      </button>

      {showOptions && (
        <div className="absolute top-full right-2 z-50 bg-[#0a0a0a] rounded-xl shadow-lg p-4 md:p-8 text-center md:w-1/2 border border-[#6e6e6e]">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-medium md:text-2xl">Options</h2>
            <GrClose
              onClick={toggleOptions}
              className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
              size={28}
            />
          </div>
          <ul className="space-y-2 flex flex-col p-3 text-sm md:text-xl text-center">
            <button
              onClick={openEditUserData}
              className="bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]"
            >
              Edit Data
            </button>
            <button
              onClick={openBlacklist}
              className="bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]"
            >
              Blacklist
            </button>
            <button
              onClick={openRemarks}
              className="bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]"
            >
              Remarks
            </button>
            <button
              onClick={openAddMembership}
              className="bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]"
            >
              Add membership
            </button>
          </ul>
        </div>
      )}

      {/* Add Membership Form */}
      {addMembershipShow && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/80 flex justify-center items-center overflow-y-auto p-4">
          <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-[#6e6e6e] rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="sticky top-0 z-10 bg-[#0a0a0a] p-4 border-b border-[#6e6e6e] flex justify-end">
              <GrClose
                onClick={closeAllModals}
                className="cursor-pointer text-gray-400 hover:text-white hover:scale-90 transition-transform"
                size={28}
              />
            </div>
            <div className="overflow-y-auto p-4 md:p-8 text-sm md:text-base">
              <Addmembership />
            </div>
            <div className="sticky bottom-0 bg-[#0a0a0a] p-4 border-t border-[#6e6e6e] z-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={closeAllModals}
                  className="w-full bg-transparent text-white font-bold py-3 px-6 rounded-lg border border-gray-500 hover:bg-[#1a1a1a] transition-colors text-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="membership-form"
                  className="w-full bg-[#FFDD4A] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#ffd700] transition-colors text-lg"
                >
                  Save Membership
                </button>
              </div>
            </div>
            <div className="h-20" />
          </div>
        </div>
      )}

      {/* Remarks Form */}
      {remarksShow && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/80 flex justify-center items-center overflow-y-auto p-4">
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-[#6e6e6e] rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="sticky top-0 z-10 bg-[#0a0a0a] p-4 border-b border-[#6e6e6e] flex justify-end">
              <GrClose
                onClick={closeAllModals}
                className="cursor-pointer text-gray-400 hover:text-white hover:scale-90 transition-transform"
                size={28}
              />
            </div>
            <div className="overflow-y-auto p-4 md:p-6 text-sm md:text-base">
              <RemarksForm user_id={member_id} onSave={closeAllModals} onCancel={closeAllModals} />
            </div>
            <div className="h-20" />
          </div>
        </div>
      )}

      {/* Blacklist Form */}
      {blacklistShow && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/80 flex justify-center items-center overflow-y-auto p-4">
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-[#6e6e6e] rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="sticky top-0 z-10 bg-[#0a0a0a] p-4 border-b border-[#6e6e6e] flex justify-end">
              <GrClose
                onClick={closeAllModals}
                className="cursor-pointer text-gray-400 hover:text-white hover:scale-90 transition-transform"
                size={28}
              />
            </div>
            <div className="overflow-y-auto p-4 md:p-6 text-sm md:text-base">
              <BlacklistForm
                user_id={member_id}
                onSave={(data) => {
                  console.log("Blacklisted:", data);
                  closeAllModals();
                }}
                onCancel={closeAllModals}
              />
            </div>
            <div className="h-20" />
          </div>
        </div>
      )}

      {/* Edit User Data Form */}
      {editUserDataShow && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/80 flex justify-center items-center overflow-y-auto p-4">
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-[#6e6e6e] rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="sticky top-0 z-10 bg-[#0a0a0a] p-4 border-b border-[#6e6e6e] flex justify-end">
              <GrClose
                onClick={closeAllModals}
                className="cursor-pointer text-gray-400 hover:text-white hover:scale-90 transition-transform"
                size={28}
              />
            </div>
            <div className="overflow-y-auto p-4 md:p-6 text-sm md:text-base">
              <EditUserData
                user_id={member_id}
                onSave={(data) => {
                  console.log("User Data Edited:", data);
                  closeAllModals();
                }}
                onCancel={closeAllModals}
              />
            </div>
            <div className="h-20" />
          </div>
        </div>
      )}
    </div>
  );
}
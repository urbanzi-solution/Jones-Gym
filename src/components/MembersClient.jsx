"use client";
import { useState } from "react";
import MemberSearchFilter from "@/components/Member_searchFilter";
import Memberlist_boxes from "@/components/Memberlist_boxes";
import * as XLSX from 'xlsx';
import Inpage_header from "@/components/Inpage_header";

export default function MembersClient({ members }) {
  const [filters, setFilters] = useState({
    inactive: false,
    searchQuery: "",
    gender: "",
    status: "",
    payment: "",
    plan: "",
    expiryWithin: "",
    startDate: null,
    endDate: null,
  });

  const exportToExcel = async () => {
    // Prepare data for Excel
    const data = members.map(member => ({
      UserID: member.user_id || "N/A",
      Name: member.name || "N/A",
      Gender: member.gender || "N/A",
      Date_of_birth: member.date_of_birth ? new Date(member.date_of_birth).toISOString().split('T')[0] : "N/A",
      Location: member.location || "N/A",
      Phone_No: member.phone_no || "N/A",
      Whatsapp_no: member.whatsapp_no || "N/A",
      Joining_Date: member.joining_date ? new Date(member.joining_date).toISOString().split('T')[0] : "N/A",
    }));

    // Create worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Members");

    // Set column widths
    worksheet['!cols'] = [
      { wch: 15 }, // UserID
      { wch: 20 }, // Name
      { wch: 10 }, // Gender
      { wch: 15 }, // Date_of_birth
      { wch: 15 }, // Location
      { wch: 15 }, // Phone_No
      { wch: 15 }, // Whatsapp_no
      { wch: 15 }, // Joining_Date
    ];

    // Generate and download Excel file
    XLSX.writeFile(workbook, "Members_List.xlsx");
  };

  return (
    <>
      <Inpage_header title="Members List" onExport={exportToExcel} />
      <MemberSearchFilter setFilters={setFilters} />
      <Memberlist_boxes members={members} filters={filters} className="z-0" />
    </>
  );
}
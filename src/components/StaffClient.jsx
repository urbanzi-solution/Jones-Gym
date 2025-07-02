// src\components\StaffClient.jsx
"use client";
import Staff_searchfilter from "@/components/Staff_searchfilter";
import Staff_listbox from "@/components/Staff_listbox";
// import { useState } from "react";
import * as XLSX from 'xlsx';
import Inpage_header from "@/components/Inpage_header";

export default function StaffClient({ initialStaff }) {

  const exportToExcel = async () => {
      // Prepare data for Excel
      const data = initialStaff.map(initialStaff => ({
        Trainer_ID: initialStaff.trainer_id || "N/A",
        Name: initialStaff.name || "N/A",
        Gender: initialStaff.gender || "N/A",
        Date_of_birth: initialStaff.date_of_birth ? new Date(initialStaff.date_of_birth).toISOString().split('T')[0] : "N/A",
        Location: initialStaff.location || "N/A",
        Phone_No: initialStaff.phone_no || "N/A",
        Whatsapp_no: initialStaff.whatsapp_number || "N/A",
        Joining_Date: initialStaff.joining_date ? new Date(initialStaff.joining_date).toISOString().split('T')[0] : "N/A",
      }));
  
      // Create worksheet and workbook
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Members");
  
      // Set column widths
      worksheet['!cols'] = [
        { wch: 15 }, // Trainer_ID
        { wch: 20 }, // Name
        { wch: 10 }, // Gender
        { wch: 15 }, // Date_of_birth
        { wch: 15 }, // Location
        { wch: 15 }, // Phone_No
        { wch: 15 }, // Whatsapp_no
        { wch: 15 }, // Joining_Date
      ];
  
      // Generate and download Excel file
      XLSX.writeFile(workbook, "Trainers_List.xlsx");
    };

  return (
    <div>
      <Inpage_header title="Trainers List" onExport={exportToExcel} />
      <Staff_searchfilter />
      <Staff_listbox staff={initialStaff} />
    </div>
  );
}
"use client";
import { useState } from "react";
import MemberSearchFilter from "@/components/Member_searchFilter";
import Memberlist_boxes from "@/components/Memberlist_boxes";
import Inpage_header from "@/components/Inpage_header_memb_exp";

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

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    // Add your export logic here
    console.log("Exporting data...");
    // For example, export to CSV, Excel, etc.
  };

  return (
    <>
      <Inpage_header 
        title="Members List" 
        onPrint={handlePrint}
        onExport={handleExport}  // Add this prop
      />
      <MemberSearchFilter setFilters={setFilters} />
      <Memberlist_boxes members={members} filters={filters} className="z-0" />
    </>
  );
}
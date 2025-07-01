// src\components\MembersClient.jsx
"use client";
import { useState } from "react";
import MemberSearchFilter from "@/components/Member_searchFilter";
import Memberlist_boxes from "@/components/Memberlist_boxes";

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

  return (
    <>
      <MemberSearchFilter setFilters={setFilters} />
      <Memberlist_boxes members={members} filters={filters} className="z-0" />
    </>
  );
}
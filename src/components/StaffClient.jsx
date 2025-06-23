"use client";
import Staff_searchfilter from "@/components/Staff_searchfilter";
import Staff_listbox from "@/components/Staff_listbox";

export default function StaffClient({ initialStaff }) {
  return (
    <div>
      <Staff_searchfilter />
      <Staff_listbox staff={initialStaff} />
    </div>
  );
}
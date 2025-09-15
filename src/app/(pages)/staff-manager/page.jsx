// src\app\(pages)\staff-manager\page.jsx
'use client';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Dashboardgreeting from "@/components/Dashboard_greeting";
import StaffListBoxManager from "@/components/Staff_listbox_manager";

export default function StaffManager({ searchParams }) {
  const { redirectIfNotAllowed } = useAuth();

  useEffect(() => {
    // This will redirect if the user doesn't have access
    redirectIfNotAllowed('/staff-manager');
  }, []);

  return (
    <div>
      <Dashboardgreeting />
      <StaffListBoxManager />
      <div className="h-20"></div>
    </div>
  );
}

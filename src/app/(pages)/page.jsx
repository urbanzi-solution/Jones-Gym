// src\app\(pages)\page.jsx
import DashboardGeneral from "@/components/Dashboard_general";
import DashboardMembers from "@/components/Dashboard_members";
import DashboardStaff from "@/components/Dashborad_staff";
import Dashboardgreeting from "@/components/Dashboard_greeting";
import DashboardPlan from "@/components/Dashboard_plan";
import ProtectedRoute from "@/components/ProtectedRoute";
import { SessionManager } from "@/utils/sessionManager";
import RoleProtectedRoute from '@/components/RoleProtectedRoute';

export const dynamic = 'force-dynamic'

export default function Dashboard() {
  return (
    <RoleProtectedRoute>
      <div>
        <Dashboardgreeting />
        <DashboardGeneral />
        <DashboardMembers />
        <DashboardStaff />
        <DashboardPlan />
        <div className="h-20"></div>
      </div>
    </RoleProtectedRoute>
  );
}

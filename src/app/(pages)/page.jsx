import DashboardGeneral from "@/components/Dashboard_general";
import DashboardMembers from "@/components/Dashboard_members";
import DashboardStaff from "@/components/Dashborad_staff";
import Dashboardgreeting from "@/components/Dashboard_greeting";
import DashboardPlan from "@/components/Dashboard_plan";

export const dynamic = 'force-dynamic'

export default function Dashboard() {
  return (
    <div>
      <Dashboardgreeting />
      <DashboardGeneral />
      <DashboardMembers />
      <DashboardStaff />
      <DashboardPlan />
      <div className="h-20"></div>
    </div>
  );
}

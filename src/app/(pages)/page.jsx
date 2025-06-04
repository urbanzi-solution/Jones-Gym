import DashboardGeneral from "@/components/Dashboard_general";
import DashboardMembers from "@/components/Dashboard_members";
import DashboardStaff from "@/components/Dashborad_staff";
import DashboardGymplan  from "@/components/Dashborad_gymplan";
import Dashboardgreeting from "@/components/Dashboard_greeting";

export default function Dashboard() {
  return (
    <div>
      <Dashboardgreeting />
      <DashboardGeneral />
      <DashboardMembers />
      <DashboardStaff />
      <DashboardGymplan />
      <div className="h-20"></div>
    </div>
  );
}

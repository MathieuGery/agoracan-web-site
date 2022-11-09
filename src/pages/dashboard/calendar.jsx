import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { UserCalendar } from "@/components/dashboard/UserCalendar";

export default function Calendar() {

  return (
    <>
      <DashboardLayout current="Profile">
        <UserCalendar/>
      </DashboardLayout>
    </>
  )
}

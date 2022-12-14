import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { UserProfile } from "@/components/dashboard/UserProfile";

export default function Profile() {

  return (
    <>
      <DashboardLayout current="Profile">
        <UserProfile/>
      </DashboardLayout>
    </>
  )
}

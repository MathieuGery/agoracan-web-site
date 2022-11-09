import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Profile() {

  return (
    <>
      <DashboardLayout current="Profile">
        <UserProfile/>
      </DashboardLayout>
    </>
  )
}

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Profile() {

  return (
    <>
      <DashboardLayout current="Profile">
        <div> profile </div>
      </DashboardLayout>
    </>
  )
}

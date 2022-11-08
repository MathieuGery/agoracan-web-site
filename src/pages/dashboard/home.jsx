import { NavBar } from "@/components/dashboard/NavBar";
import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import logo from '../../images/logos/mini.jpg';

export default function Home() {

  const user = useUser()
  return (
    <>
      {user ?
      <NavBar /> : <div>caca</div>}
    </>
  )
}

import 'focus-visible'
import '@/styles/tailwind.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default function App({ Component, pageProps }) {
  // const router = useRouter()
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
        </SessionContextProvider>
    </>
  )
}

import 'focus-visible'
import '@/styles/tailwind.css'
import { Auth } from '@supabase/ui'
import { supabase } from '@/lib/initSupabase'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </>
  )
}

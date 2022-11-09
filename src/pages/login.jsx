import Head from 'next/head'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'


export default function Login() {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (email, password) => {
    console.log("user", user)
    console.log(password)
    try {
      const { error } = await supabaseClient.auth.signInWithPassword({ email, password })
      if (error) throw error
      else {
        router.push('/dashboard/home')
      }
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  return (
    <>
      <Head>
        <title>Sign In - Agoracan</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-primary-600 hover:underline"
              >
                Sign up
              </Link>{' '}
              for a free trial.
            </p>
          </div>
        </div>
        <form className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div>
            <button
              // type="submit"
              onClick={e =>(e.preventDefault(), handleLogin(email, password))}
              variant="solid"
              color="primary"
              className="w-full"
            >
              <span>
                Sign in <span aria-hidden="true">&rarr;</span>
              </span>
            </button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}

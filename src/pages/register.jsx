import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { userAgent } from 'next/server'
import { useRouter } from 'next/router'

export default function Register() {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleRegister = async (email) => {
    try {
      const { error } = await supabaseClient.auth.signUp({ email, password })
      if (error) throw error
      if (!error) {
        const updates = {
          id: user.id,
          first_name: firstName,
          last_name: lastName
        }
        console.log(updates)
        const { err } = await supabaseClient.from('profiles').upsert(updates)
        console.log(err)
        if (err) {
          throw err
        }
        else {
          alert('Account successfully created!')
          router.push('/login')
        }
      }
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up - AgoraCan</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-primary-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
        </div>
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            onChange={e => setLastName(e.target.value)}
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="w-full"
              onClick={e => (e.preventDefault(), handleRegister(email))}
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}

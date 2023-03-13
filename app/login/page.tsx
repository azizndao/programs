import { Button } from '~/components/button/button'
import { GoogleIcon } from '~/components/icons/google'
import React from 'react'
import Link from 'next/link'
import LoginForm from '~/app/login/login-form'

export default function Login() {
  return (
    <div className="grid place-content-center h-screen ">
      <div className="flex flex-col gap-8 w-[550px]  mx-auto bg-white px-6 p-20 rounded-3xl items-center">
        <h1 className="text-4xl font-bold">Global</h1>

        <p className="self-center text-gray-500">
          Login in order to have full access
        </p>

        <Button
          color="neutral"
          type="button"
          className="w-5/6"
          alignIcon="start"
          icon={<GoogleIcon  className="w-5 h-5 fill-current"/>}
        >
          Connect with Google
        </Button>

        <section className="w-5/6 flex gap-6 items-center">
          <hr className="grow"/>
          <span className="font-bold">OR</span>
          <hr className="grow"/>
        </section>

        <LoginForm/>

        <Link href="/register" className="no-underline hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  )
}

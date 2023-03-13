'use client'

import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '~/components/button/button'
import { Input } from '~/components/input'
import { useSupabase } from '~/components/supabase-provider'

interface LoginFields {
  email: string
  password: string
}

export default function LoginForm() {
  const { supabase } = useSupabase()

  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<LoginFields>()

  const router = useRouter()

  const onSubmit: SubmitHandler<LoginFields> = async ({ email, password }) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (!error) {
      router.replace('/dashboard')
    }

    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-5/6 self-center"
    >
      <fieldset className="flex gap-2 flex-col">
        <label htmlFor="email" className="font-medium">
          Email address
        </label>
        <Input
          type="email"
          required
          placeholder="Email adresse"
          register={register('email')}
        />
      </fieldset>

      <fieldset className="flex gap-2 flex-col">
        <label htmlFor="password" className="font-medium">
          Your password
        </label>
        <Input
          type="password"
          required
          placeholder="Password"
          register={register('password')}
        />
      </fieldset>

      <Button
        type="submit"
        className="w-1/2 self-center  mt-3"
        loading={isSubmitted}
      >
        Login
      </Button>
    </form>
  )
}

import { Button } from '~/components/button/button'
import { Input } from '~/components/input'
import { useSupabase } from '~/components/supabase-provider'

export default function Register() {

  const {} = useSupabase()

  return (
    <form className="flex flex-col gap-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <Input type="text" name="name" required placeholder="Display name"/>
      <Input type="email" name="email" required placeholder="Email adresse"/>
      <Input type="password" name="password" required placeholder="Password"/>
      <Button type="submit" className="self-start" >
        Submit
      </Button>
    </form>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { Profile } from '~/utils/supabase/database.types'
import { createClientOnServer } from '~/utils/supabase/supabase-server'

export default async function NotificationLayout({
  children,
}: {
  children: ReactNode
}) {
  const { profile, user, users } = await loadData()

  return (
    <div className="h-full divide-x">
      <aside className="w-[24rem] sticky top-0 bottom-0 left-0 h-full overflow-y-auto">
        <h4 className="font-bold text-2xl p-4">Notifications</h4>
        <div>
          {users?.map((user) => (
            <UserListItem user={user} key={user.id} />
          ))}
        </div>
      </aside>
      <section className="ml-24rem">{children}</section>
    </div>
  )
}

async function loadData() {
  const supabase = createClientOnServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data } = await supabase.from('profiles').select('*')

  const profile = data?.find((p) => p.id === user?.id)

  return {
    user,
    profile,
    users: data?.filter((p) => p.id !== user?.id),
  }
}

const UserListItem: FC<{ user: Profile }> = ({ user }) => {
  return (
    <Link href={`/notifications/${user.id}`} key={user.id} className="">
      <div className="flex gap-2 px-4 py-2 hover:bg-slate-100 transition-colors">
        <Image
          src={user.image_url ?? ''}
          alt={user.email}
          height={48}
          width={48}
          className="rounded-full "
        />
        <section>
          <h4 className="font-medium">
            {user.first_name} {user.last_name}
          </h4>
          <h6>{user.email}</h6>
        </section>
      </div>
    </Link>
  )
}

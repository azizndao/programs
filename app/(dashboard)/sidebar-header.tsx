'use client'

import Link from 'next/link'
import { QwikLogo } from '~/components/icons/qwik'
import { useProfile } from '~/components/supabase-provider'

export const SideBarHeader = () => {
  const user = useProfile()

  return (
    <Link href="/me">
      <div className="flex flex-col items-center gap-2 my-6">
        <QwikLogo />
        <h3 className="text-3xl font-medium mt-4">
          {user?.first_name} {user?.last_name}
        </h3>
        <h6 className="mb-4">{user?.email}</h6>
      </div>
    </Link>
  )
}

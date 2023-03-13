'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useProfile } from '~/components/supabase-provider'

export const UserUser = () => {
  const profile = useProfile()
  return (
    <Link href="/me" className={'flex gap-4 items-center'}>
      {profile?.email}
      <span className="h-12 w-12 rounded-full bg-slate-300 overflow-hidden">
        <Image
          src={profile?.image_url ?? ''}
          alt={profile?.email ?? ''}
          height={48}
          width={48}
          className="object-cover"
        />
      </span>
    </Link>
  )
}

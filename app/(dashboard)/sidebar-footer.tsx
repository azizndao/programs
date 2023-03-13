'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useSupabase } from '~/components/supabase-provider'

export const SideBarFooter: FC<JSX.IntrinsicElements['section']> = (props) => {
  const { profile } = useSupabase()

  return (
    <section className="flex flex-col items-center justify-center mt-4 mb-2">
      <span className="mb-6 p-1 border-4 border-slate-400 rounded-full relative">
        <Link href="/me">
          <Image
            src={profile?.image_url ?? ''}
            alt={profile?.last_name ?? profile?.email ?? ''}
            height={90}
            width={90}
            className="rounded-full"
          />
        </Link>
        <span className="w-6 h-6 rounded-full bg-red-600 border-4 border-white absolute top-3/4 left-3/4" />
      </span>
      <h3 className="text-xl font-medium">
        {profile?.first_name} {profile?.last_name}
      </h3>
      <small className="font-medium">{profile?.email}</small>
    </section>
  )
}

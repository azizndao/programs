import 'server-only'

import { Poppins } from 'next/font/google'
import React from 'react'
import {
  SupabaseListener,
  SupabaseProvider,
} from '~/components/supabase-provider'
import { createClientOnServer } from '~/utils/supabase/supabase-server'
import './globals.css'
import { Profile } from '~/utils/supabase/database.types'

export const revalidate = 0

const poppin = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClientOnServer()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session?.user.id)
    .single()

  return (
    <html lang="en" className={poppin.className}>
      <head />
      <body>
        <SupabaseProvider initialSession={session} initialProfile={profile}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}

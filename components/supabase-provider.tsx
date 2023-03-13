'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { AuthSession } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { Database, Profile } from '~/utils/supabase/database.types'
import { createClientOnBrowser } from '~/utils/supabase/supabase-browser'

type SupabaseContext = {
  supabase: SupabaseClient<Database>
  session: AuthSession | null
  profile: Profile | null
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export function SupabaseProvider({
  children,
  initialSession,
  initialProfile,
}: {
  children: React.ReactNode
  initialSession: AuthSession | null
  initialProfile: Profile | null
}) {
  const [supabase] = useState(() => createClientOnBrowser())
  const [session, setSession] = useState(initialSession)
  const [profile, setProfile] = useState(initialProfile)

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [supabase, initialSession])

  useEffect(() => {
    const profiles = supabase
      .channel('user-profile-channel')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles',
          filter: `column_name=eq.${session?.user.id}`,
        },
        (payload) => console.log(payload)
      )
      .subscribe()

    return () => {
      profiles.unsubscribe()
    }
  }, [supabase, session])

  return (
    <Context.Provider value={{ supabase, session, profile }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  let context = useContext(Context)
  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  } else {
    return context
  }
}

export const useSession = () => useContext(Context)?.session

export const useUser = () => useContext(Context)?.session?.user

export const useProfile = () => useContext(Context)?.profile

export function SupabaseListener({
  serverAccessToken,
}: {
  serverAccessToken?: string
}) {
  const { supabase } = useSupabase()
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        router.refresh()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [serverAccessToken, router, supabase])

  return null
}

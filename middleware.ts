import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '~/utils/supabase/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const pathname = req.nextUrl.pathname

  if (pathname.includes('/dashboard') || pathname.includes('/me')) {
    if (!session) {
      await supabase.auth.signOut()

      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  return res
}

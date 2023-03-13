import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from './database.types'

export const createClientOnServer = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '~/utils/supabase/database.types'

export const createClientOnBrowser = () => createBrowserSupabaseClient<Database>()
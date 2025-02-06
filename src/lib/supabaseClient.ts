import { SUPABASE_KEY } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = 'https://gwlfrznyzyntrvtvfiae.supabase.co'
const supabaseKey: string = SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
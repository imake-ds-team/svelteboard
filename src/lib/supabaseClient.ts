import { PROJECT_URL, SUPABASE_KEY } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = PROJECT_URL
const supabaseKey: string = SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
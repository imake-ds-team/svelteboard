/**
 * @author eskaliert680
 * @description This is where everything in /routes accesses Supabase info from. I wouldn't touch this unless you **really** knew what you were doing!
 */

import { PROJECT_URL, SUPABASE_KEY } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = PROJECT_URL
const supabaseKey: string = SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
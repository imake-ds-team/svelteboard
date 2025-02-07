import { error, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from '../$types';
import { supabase } from '$lib/supabaseClient';

export const prerender = true;
export const ssr = true;
export const csr = false;

export const load: PageServerLoad = async ({ params }) => {
    console.log(params.thread_id);
    return {}
}
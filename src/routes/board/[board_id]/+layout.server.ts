//@ts-nocheck
import { error, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const prerender = true;
export const ssr = true;
export const csr = false;

export const load: PageServerLoad = async ({ params, url }) => {
    const given_board_abbr = params.board_id;
    const error_code = url.searchParams.get('error');
    const { data, error } = await supabase.from('boards').select().eq('abbreviation', given_board_abbr).single();
    if (data == null) { throw redirect(307, '/') } // board doesn't exist
    if (error) { console.error(error) }
    return {
        board_name: data.name,
        board_abbr: data.abbreviation,
        board_description: data.description,
        error: error_code
    }
}
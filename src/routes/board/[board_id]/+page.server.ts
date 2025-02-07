import {error, redirect} from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const prerender = true;
export const ssr = true;
export const csr = false;

export const load: PageServerLoad = async({params}) => {
    const given_board_abbr = params.board_id;
    const {data,error} = await supabase.from('boards').select().eq('abbreviation',given_board_abbr).single();
    //console.log(data)
    if (data==null) { redirect(404, '/') } // board doesn't exist
    if (error) { console.error(error) } 
    const {data:boards_data,error:boards_error} = await supabase.from('boards').select();
    if (boards_data==null || boards_error) { redirect(500,'/')};
    console.log(boards_data)
    return {
        board_name: data.name,
        board_abbr: data.abbreviation,
        board_description: data.description,
        board_threads: data.threads,
    }
}
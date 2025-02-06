import {error, redirect} from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const prerender = true;

export const load: PageServerLoad = async({params}) => {
    const given_board_abbr = params.board_id;
    const {data,error} = await supabase.from('boards').select().eq('abbreviation',given_board_abbr).single();
    console.log(data)
    if (data==null) { redirect(404, '/') } // board doesn't exist
    if (error) { console.error(error) } 
    return {
        board_name: data.name,
        board_abbr: data.abbreviation,
        board_description: data.description,
    }
}
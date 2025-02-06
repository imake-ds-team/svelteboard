import {error} from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
import { IMAGEBOARD_DESCRIPTION, IMAGEBOARD_NAME } from '$env/static/private';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async({params}) => {
    const {data,error} = await supabase.from('boards').select()
    console.log(data)
    if (error) { console.error(error) } 
    return {
        global_name: IMAGEBOARD_NAME,
        global_description: IMAGEBOARD_DESCRIPTION,
        global_boards: data
    }
}
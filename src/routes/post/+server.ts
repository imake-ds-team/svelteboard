import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import tripcode from 'tripcode';
import { supabase } from '$lib/supabaseClient';

export const POST: RequestHandler = async ({ url, request }) => {
    let body = await request.formData();

    const title = body.get("title");
    const content = body.get("content");
    const tripcode_password = body.get("tripcode-password");
    if(title == null || content == null || tripcode_password == null) {return new Response()}
    let generated_tripcode = tripcode(tripcode_password);
    
    const {data,error} = await supabase.from('boards').select().eq('abbreviation',given_board_abbr).single();

    return new Response();
};
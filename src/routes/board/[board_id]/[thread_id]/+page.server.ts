import { error, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const prerender = false;
export const ssr = true;
export const csr = false;

export const load: PageServerLoad = async ({ params }) => {
    const given_board_abbr = params.board_id;
    const thread_id = params.thread_id;
    const { data, error } = await supabase.from('boards').select().eq('abbreviation', given_board_abbr).single();
    if (data == null) { throw redirect(307, '/') } // board doesn't exist
    if (error) { console.error(error) }
    const { data: threads_data, error: threads_error } = await supabase.from('threads').select().eq("id", thread_id).maybeSingle();
    if (threads_data == null || threads_error) { throw redirect(303, '/') };
    //console.log(threads_data)
    const { data: posts_data, error: posts_error } = await supabase.from('posts').select().eq("parent_thread_id",thread_id);
    if (posts_data == null || posts_error) { console.log(posts_error); throw redirect(303, '/') };
    return {
        board_name: data.name,
        board_abbr: data.abbreviation,
        board_description: data.description,
        thread: threads_data,
        thread_id: thread_id,
        posts: posts_data
    }
}
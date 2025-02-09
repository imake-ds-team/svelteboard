import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';
import { IMAGEBOARD_DESCRIPTION, IMAGEBOARD_NAME, IMAGEBOARD_WELCOME_MESSAGE } from '$env/static/private';

export const prerender = false;
export const ssr = true;
export const csr = false;

export const load: PageServerLoad = async ({ }) => {
    const { data, error } = await supabase.from('boards').select()
    if (error) { console.error(error.message) }

    const { data: new_threads_data, error: new_threads_error } = await supabase.from('threads').select().order('inserted_at', { ascending: false }).limit(10);
    if (new_threads_error) { console.error(new_threads_error.message) }

    const { data: new_posts_data, error: new_posts_error } = await supabase.from('posts').select().order('inserted_at', { ascending: false }).limit(10);
    if (new_posts_error) { console.error(new_posts_error.message) }

    return {
        global_name: IMAGEBOARD_NAME,
        global_description: IMAGEBOARD_DESCRIPTION,
        global_welcome_message: IMAGEBOARD_WELCOME_MESSAGE,
        global_boards: data,
        global_new_threads: new_threads_data,
        global_new_posts: new_posts_data
    }
}
// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import tripcode from 'tripcode';
import { supabase } from '$lib/supabaseClient';
import { decode } from 'base64-arraybuffer'
import { ADMIN_PASSWORD } from '$env/static/private'

export const POST: RequestHandler = async ({ url, request }) => {
    let body = await request.formData();
    const tripcode_password = body?.get("tripcode-password");
    const image = body?.get("image-content") as File;
    const id = url.searchParams.get("id");
    const { data: thread_data, error: thread_error } = await supabase.from('threads').select().eq('id', id).single();
    if (thread_data == null) { throw redirect(303, '/') }
    if (thread_data.id != id) { throw redirect(303, '/') }

    const board = thread_data.board;
    if (thread_data.gtripcode != tripcode(tripcode_password) && tripcode_password != ADMIN_PASSWORD) { throw redirect(303, `/board/${board}/?error=4`) }
    const image_file_name = thread_data.image_url.split('/').pop();
    const response = await supabase.from('threads').delete().eq('id', id).single();
    const { data: image_deletion_data, error: image_deletion_error } = await supabase
        .storage
        .from('threads-uploads')
        .remove([`${image_file_name}`])
    if (image_deletion_error) { console.error(image_deletion_error.message); throw redirect(303, `/board/${board}/?error=3`) }
    const { data: posts_data, error: posts_error } = await supabase.from('posts').delete().eq('parent_thread_id', id);
    if (posts_error) { console.error(posts_error.message); throw redirect(303, `/board/${board}/?error=3`) }
    throw redirect(303, `/board/${board}`)
};
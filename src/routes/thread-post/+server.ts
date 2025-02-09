// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import tripcode from 'tripcode';
import { supabase } from '$lib/supabaseClient';
import { decode } from 'base64-arraybuffer'


export const POST: RequestHandler = async ({ url, request }) => {
    const board = url.searchParams.get("board");

    let body = await request.formData();
    const title = body?.get("title");
    const content = body?.get("content");
    const tripcode_password = body?.get("tripcode-password");
    const image = body?.get("image-content") as File;
    let extension = image.name.split('.').pop();

    if (image.size == 0) {
        throw redirect(303,`/${board}/?error=2`)
    }

    if (image.size > 10 * 1024 * 1024) {
        throw redirect(303,`/${board}/?error=1`)
    }

    const { data: allBuckets, error: allBucketsError } = await supabase
        .storage
        .listBuckets()

    if (allBuckets == null) { // Means we'll have to create a bucket for images to go into. HAWK TUAH!!!
        console.warn("threads-uploads bucket does not exist! Creating now...");
        const { data, error } = await supabase
            .storage
            .createBucket('threads-uploads', {
                public: true,
                allowedMimeTypes: ['image/*'],
                fileSizeLimit: 8096
            })
            .then(() => {
                console.log("threads-uploads bucket created! Continuing...")
            })
    }

    

    if (title == null || content == null || tripcode_password == null) { throw redirect(303,`/${board}/?error=2`) }
    let generated_tripcode = tripcode(tripcode_password);

    const { data, error } = await supabase
        .from('threads')
        .insert({ title: title, content: content, gtripcode: generated_tripcode, board: board, image_url: "" })
        .select()
        .single()

    const { data: bucket_upload_data, error: bucket_upload_error } = await supabase
        .storage
        .from('threads-uploads')
        .upload(`thread-image-${data.id}.${extension}`, image, {
            contentType: 'image/png'
        })

    if (bucket_upload_error) {
        console.error(bucket_upload_error);
        throw redirect(303,`/${board}/?error=3`)
    }

    const { data: bucket_url_data } = supabase
        .storage
        .from('threads-uploads')
        .getPublicUrl(bucket_upload_data?.path)

    const { error: thread_update_error } = await supabase
        .from('threads')
        .update({ image_url: bucket_url_data.publicUrl })
        .eq('id', data.id)

    if(thread_update_error) {
        throw redirect(303,`/${board}/?error=2`)
    }
    throw redirect(303,`/board/${data.board}/`);
};
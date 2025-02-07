// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import tripcode from 'tripcode';
import { supabase } from '$lib/supabaseClient';


export const POST: RequestHandler = async ({ url, request }) => {
    let body = await request.formData();

    const title = body.get("title");
    const content = body.get("content");
    const tripcode_password = body.get("tripcode-password");
    const image = body.get("image-content");

    if (image.size > 10 * 1024 * 1024) {
        return new Response({status:403});
    }

    const reader = new FileReader();
    reader.readAsDataURL(image)

    console.log(image)

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
        .then(()=>{
            console.log("threads-uploads bucket created! Continuing...")
        })
    }

    const board = url.searchParams.get("board");

    if (title == null || content == null || tripcode_password == null) { return new Response({status:403}) }
    let generated_tripcode = tripcode(tripcode_password);

    const { data, error } = await supabase
        .from('threads')
        .insert({ title: title, content: content, replies: {}, gtripcode: generated_tripcode, board: board })
        .select()

    console.log(data);
    console.log(error);

    return new Response({status:303});
};
import {error} from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
import { IMAGEBOARD_DESCRIPTION, IMAGEBOARD_NAME } from '$env/static/private';

export const prerender = true;

export const load: PageServerLoad = async({params}) => {
    return {
        global_name: IMAGEBOARD_NAME,
        global_description: IMAGEBOARD_DESCRIPTION
    }
}
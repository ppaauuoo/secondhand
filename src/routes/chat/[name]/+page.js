import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export function load({ params }) {
    if (params.name) {
        return {
            title: params.name,
            content: 'dog'
        };
    }

    throw error(404, 'Not found');
}
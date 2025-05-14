import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Path } from '$env/static/private';

export const POST: RequestHandler = async ({ request, cookies}) => {
	const data = await request.json();
	if (!data.username) {
		throw error(400, 'Username est requis');
	}
	if (!data.password) {
		throw error(400, 'Password est requis');
	}

	cookies.set('token','token_value', { path: '/' , secure : true});

	return json({ name: data.username, id: 1 });
};
// import { error, redirect } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';
// import { SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_CLIENT_SECRET, BASE_URL } from '$env/static/private';

// export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
// 	const code = url.searchParams.get('code') || null;
// 	const state = url.searchParams.get('state') || null;

// 	const storedState = cookies.get('spotify_auth_state') || null;
// 	const storedChallengeVerifier = cookies.get('spotify_auth_challenge_verifier') || null;

// 	if (state === null || state !== storedState) {
// 		throw error(400, 'State Mismatch!');
// 	}

// 	const response = await fetch('https://accounts.spotify.com/api/token', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 			Authorization: `Basic ${Buffer.from(
// 				`${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}`
// 			).toString('base64')}`
// 		},
// 		body: new URLSearchParams({
// 			code: code || '',
// 			redirect_uri: `${BASE_URL}/api/auth/callback`,
// 			grant_type: 'authorization_code',
// 			code_verifier: storedChallengeVerifier || '',
// 			client_id: SPOTIFY_APP_CLIENT_ID
// 		})
// 	});
// 	const responseJSON = await response.json();

// 	if (responseJSON.error) {
// 		throw error(400, responseJSON.error_description);
// 	}

// 	// cookies.delete('spotify_auth_state');
// 	// cookies.delete('spotify_auth_challenge_verifier');

//     cookies.delete('spotify_auth_state', { path: '/' });
//     cookies.delete('spotify_auth_challenge_verifier', { path: '/' });
// 	cookies.set('refresh_token', responseJSON.refresh_token, { path: '/' });
// 	cookies.set('access_token', responseJSON.access_token, { path: '/' });

// 	throw redirect(303, '/');
// };



// vu que que il y'q certqin module que je n'utilse pqs je retire es import pour eviter les ligne rouge
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SPOTIFY_APP_CLIENT_ID, BASE_URL } from '$env/static/private';


export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
    const code = url.searchParams.get('code') || null;
    const state = url.searchParams.get('state') || null;

    const storedState = cookies.get('spotify_auth_state') || null;
    const storedVerifier = cookies.get('spotify_auth_challenge_verifier') || null;

    // Debug logs (à supprimer en production)
    console.log('State comparison:', { received: state, stored: storedState });
    console.log('Code verifier exists:', !!storedVerifier);

    if (!state || !storedState || state !== storedState) {
        console.error('State mismatch or missing');
        throw error(400, 'Invalid state parameter');
    }

    if (!storedVerifier) {
        console.error('Missing code verifier');
        throw error(400, 'Missing authentication challenge');
    }

    const tokenParams = new URLSearchParams();
    tokenParams.append('grant_type', 'authorization_code');
    tokenParams.append('code', code || '');
    tokenParams.append('redirect_uri', `${BASE_URL}/api/auth/callback`);
    tokenParams.append('client_id', SPOTIFY_APP_CLIENT_ID);
    tokenParams.append('code_verifier', storedVerifier);

    try {
        //Marche Mais Moins securiser

        // const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Authorization': `Basic ${Buffer.from(
        //             `${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}`
        //         ).toString('base64')}`
        //     },
        //     body: tokenParams
        // });


        //Plus securiser
		const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: tokenParams
		});
		

        const data = await tokenResponse.json();

		if (!tokenResponse.ok) {
			console.error('Spotify token error:', {
				status: tokenResponse.status,
				statusText: tokenResponse.statusText,
				data
			});
			throw error(tokenResponse.status, data.error_description || 'Failed to get access token');
		}

        // je fais le Cleanup
        cookies.delete('spotify_auth_state', { path: '/' });
        cookies.delete('spotify_auth_challenge_verifier', { path: '/' });

        // Change token/ Set tokens
        cookies.set('refresh_token', data.refresh_token, { 
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30 // 30 days
        });
        
        cookies.set('access_token', data.access_token, {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: data.expires_in || 3600 // 1 hour
        });

        // throw redirect(303, '/'); // Me retourne un 500 il faut recharger et demander la route manuellement

		// je change l'approche de redirection 
        return new Response(null, {
            status: 303,
            headers: {
                location: '/'
            }
        });

    } catch (err) {
        console.error('Callback error:', err);
        // throw error(500, 'Authentication failed');
		return new Response(JSON.stringify({ error: 'Authentication failed' }), {
            status: 500
        });
    }
};
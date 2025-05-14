import type { RequestHandler } from './$types';
import { SPOTIFY_BASE_URL } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch, cookies, params, url }) => {
  const accessToken = cookies.get('access_token');
  const spotifyUrl = `${SPOTIFY_BASE_URL}/${params.path}${url.search}`;
  console.log('Requête Spotify:', spotifyUrl);
  const response = await fetch(spotifyUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    signal: AbortSignal.timeout(30000), // Timeout de 30s au lieu de 10s
  });
  console.log('Réponse Spotify:', { status: response.status, statusText: response.statusText });
  if (!response.ok) {
    try {
      const responseJSON = await response.json();
      if (responseJSON.error) {
        throw error(responseJSON.error.status, responseJSON.error.message);
      }
    } catch {
      throw error(response.status, `Échec de la requête Spotify: ${response.statusText}`);
    }
  }
  const responseJSON = await response.json();
  return json(responseJSON);
};


//sans log pour debug 

// import type { RequestHandler } from './$types';
// import { SPOTIFY_BASE_URL } from '$env/static/private';
// import { error, json } from '@sveltejs/kit';

// export const GET: RequestHandler = async ({ fetch, cookies, params, url }) => {
// 	const accessToken = cookies.get('access_token');

// 	const response = await fetch(`${SPOTIFY_BASE_URL}/${params.path}${url.search}`, {
// 		headers: {
// 			Authorization: `Bearer ${accessToken}`
// 		}
// 	});
// 	const responseJSON = await response.json();
// 	if (responseJSON.error) {
// 		throw error(responseJSON.error.status, responseJSON.error.message);
// 	}
// 	return json(responseJSON);
// };
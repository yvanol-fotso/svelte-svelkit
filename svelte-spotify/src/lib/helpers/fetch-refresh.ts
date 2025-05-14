import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

export default async function fetchRefresh(
  fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>,
  path: string
) {
  console.log('fetchRefresh: Requête', path);
  const req = fetch(path);
  if (!browser) return req;
  const res = await req;
  console.log('fetchRefresh: Réponse', path, { status: res.status, statusText: res.statusText });
  if (res.status === 401) {
    if (!window.refreshPromise) {
      window.refreshPromise = fetch('/api/auth/refresh').finally(() => {
        window.refreshPromise = null;
      });
    }
    const refreshRes = await window.refreshPromise;
    console.log('fetchRefresh: Réponse refresh', {
      status: refreshRes.status,
      statusText: refreshRes.statusText,
    });
    if (!refreshRes.ok) throw error(401, 'Session Expired!');
    const retryRes = await fetch(path);
    console.log('fetchRefresh: Réponse retry', path, {
      status: retryRes.status,
      statusText: retryRes.statusText,
    });
    return retryRes;
  } else {
    return res;
  }
}



//sans log pour debug

// import { browser } from '$app/environment';
// import { error } from '@sveltejs/kit';

// export default async function fetchRefresh(
// 	fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>,
// 	path: string
// ) {
// 	const req = fetch(path);
// 	if (!browser) return req;
// 	const res = await req;
// 	if (res.status === 401) {
// 		if (!window.refreshPromise) {
// 			window.refreshPromise = fetch('/api/auth/refresh').finally(() => {
// 				window.refreshPromise = null;
// 			});
// 		}
// 		const refreshRes = await window.refreshPromise;
// 		if (!refreshRes.ok) throw error(401, 'Session Expired!');
// 		return fetch(path);
// 	} else {
// 		return res;
// 	}
// }
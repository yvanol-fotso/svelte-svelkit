// import type { PageLoad } from './$types';
// import { fetchRefresh } from '$helpers';

// export const load: PageLoad = async ({ fetch: _fetch, parent }) => {
//     const fetch = (path: string) => fetchRefresh(_fetch, path);
//     const { user } = await parent();
//     console.log('User info:', user);

//     const newReleases = fetch('/api/spotify/browse/new-releases?limit=6');
//     const featuredPlaylists = fetch('/api/spotify/browse/featured-playlists'); // propre coe sur la doc mais appament mon pay n'est pas dispo 
//     const userPlaylists = fetch(`/api/spotify/users/${user?.id}/playlists?limit=6`);

//     const catsRes = await fetch(`api/spotify/browse/categories`);
//     const catsResJSON: SpotifyApi.MultipleCategoriesResponse | undefined = catsRes.ok
//         ? await catsRes.json()
//         : undefined;

//     const randomCats = catsResJSON?.categories.items
//         ?.sort(() => 0.5 - Math.random())
//         .slice(0, 3) || [];

//     const randomCatsPromises = randomCats.map((cat) =>
//         fetch(`/api/spotify/browse/categories/${cat.id}/playlists?limit=6`)
//     );

//     const [newReleasesRes, featuredPlaylistsRes, userPlaylistsRes, ...randomCatsRes] =
//         await Promise.all([newReleases, featuredPlaylists, userPlaylists, ...randomCatsPromises]);

//     console.log('newReleases OK ?', newReleasesRes.ok);
//     console.log('featuredPlaylists OK ?', featuredPlaylistsRes.ok);
//     console.log('userPlaylists OK ?', userPlaylistsRes.ok);
//     console.log('featuredPlaylists OK ?', featuredPlaylistsRes.ok, featuredPlaylistsRes.status);
//     randomCatsRes.forEach((res, i) => {
//         console.log(`Playlists pour "${randomCats[i]?.name}" OK ?`, res.ok, res.status, res.statusText);
//     });

//     const newReleasesData = newReleasesRes.ok ? await newReleasesRes.json() : undefined;
//     const featuredPlaylistsData = featuredPlaylistsRes.ok ? await featuredPlaylistsRes.json() : undefined;
//     const userPlaylistsData = userPlaylistsRes.ok ? await userPlaylistsRes.json() : undefined;
//     const categoriesPlaylistsData = await Promise.all(
//         randomCatsRes.map(async (res, i) => {
//             if (!res.ok) {
//                 console.warn(`Échec du chargement des playlists pour la catégorie "${randomCats[i]?.name}":`, {
//                     status: res.status,
//                     statusText: res.statusText,
//                 });
//                 return undefined;
//             }
//             return res.json();
//         })
//     );

//     console.log('New Releases Data:', newReleasesData);
//     console.log('Featured Playlists Data:', featuredPlaylistsData);
//     console.log('User Playlists Data:', userPlaylistsData);
//     console.log('Categories Playlists Data:', categoriesPlaylistsData);

//     return {
//         newReleases: newReleasesData,
//         featuredPlaylists: featuredPlaylistsData,
//         userPlaylists: userPlaylistsData,
//         homeCategories: randomCats,
//         categoriesPlaylists: categoriesPlaylistsData,
//     };
// };



//Marche deja sauf que jai passe les categories moi meme


import type { PageLoad } from './$types';
import { fetchRefresh } from '$helpers';

export const load: PageLoad = async ({ fetch: _fetch, parent }) => {
  const fetch = (path: string) => fetchRefresh(_fetch, path);
  const { user } = await parent();
  console.log('User info:', user);

  const newReleases = fetch('/api/spotify/browse/new-releases?limit=6');
  const featuredPlaylists = fetch('/api/spotify/search?type=playlist&q=afro&limit=6'); // Remplacé pour éviter 404
  const userPlaylists = fetch(`/api/spotify/users/${user?.id}/playlists?limit=6`);

//   const catsRes = await fetch(`api/spotify/browse/categories`);
//   console.log('Categories response status:', catsRes.status);
//   const catsResJSON: SpotifyApi.MultipleCategoriesResponse | undefined = catsRes.ok
//     ? await catsRes.json()
//     : undefined;

//   if (!catsRes.ok) {
//     const errorText = await catsRes.text();
//     console.warn('Échec du chargement des catégories:', errorText);
//   }

  const randomCats = [
    { id: '37i9dQZF1DX7e8TdeLL2yY', name: 'African Heat', href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX7e8TdeLL2yY' },
    { id: '37i9dQZF1DX0A8z5fYG2mM', name: 'Reggae Classics', href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0A8z5fYG2mM' },
    { id: '37i9dQZF1DXcNrTAQ5a0Of', name: 'World Music', href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXcNrTAQ5a0Of' },
  ];
  const randomCatsPromises = randomCats.map((cat) =>
    fetch(`/api/spotify/playlists/${cat.id}`)
  );

  const [newReleasesRes, featuredPlaylistsRes, userPlaylistsRes, ...randomCatsRes] =
    await Promise.all([newReleases, featuredPlaylists, userPlaylists, ...randomCatsPromises]);

  console.log('newReleases OK ?', newReleasesRes.ok);
  console.log('featuredPlaylists OK ?', featuredPlaylistsRes.ok);
  console.log('userPlaylists OK ?', userPlaylistsRes.ok);
  console.log('featuredPlaylists OK ?', featuredPlaylistsRes.ok, featuredPlaylistsRes.status);
  randomCatsRes.forEach((res, i) => {
    console.log(`Playlists pour "${randomCats[i].name}" OK ?`, res.ok, res.status, res.statusText);
  });

  const newReleasesData = newReleasesRes.ok ? await newReleasesRes.json() : undefined;
  const featuredPlaylistsData = featuredPlaylistsRes.ok ? await featuredPlaylistsRes.json() : undefined;
  const userPlaylistsData = userPlaylistsRes.ok ? await userPlaylistsRes.json() : undefined;
  const categoriesPlaylistsData = await Promise.all(
    randomCatsRes.map(async (res, i) => {
      if (!res.ok) {
        console.warn(`Échec du chargement des playlists pour la catégorie "${randomCats[i]?.name}":`, {
          status: res.status,
          statusText: res.statusText,
        });
        return undefined;
      }
      return res.json();
    })
  );

  console.log('New Releases Data:', newReleasesData);
  console.log('Featured Playlists Data:', featuredPlaylistsData);
  console.log('User Playlists Data:', userPlaylistsData);
  console.log('Categories Playlists Data:', categoriesPlaylistsData);

  return {
    newReleases: newReleasesData,
    featuredPlaylists: featuredPlaylistsData,
    userPlaylists: userPlaylistsData,
    homeCategories: randomCats,
    categoriesPlaylists: categoriesPlaylistsData,
  };
};










//on va mettre sur pied les helper pour suivre nos fetch

// import type { PageLoad } from './$types';

// export const load: PageLoad = async ({ fetch, parent }) => {
// 	const { user } = await parent();
// 	const newReleases = fetch('/api/spotify/browse/new-releases?limit=6');
// 	const featuredPlaylists = fetch('/api/spotify/browse/featured-playlists?limit=6');
// 	const userPlaylists = fetch(`/api/spotify/users/${user?.id}/playlists?limit=6`);

// 	const catsRes = await fetch(`api/spotify/browse/categories`);
// 	const catsResJSON: SpotifyApi.MultipleCategoriesResponse | undefined = catsRes.ok
// 		? await catsRes.json()
// 		: undefined;

// 	const randomCats = catsResJSON
// 		? catsResJSON.categories.items.sort(() => 0.5 - Math.random()).slice(0, 3)
// 		: [];

// 	const randomCatsPromises = randomCats.map((cat) =>
// 		fetch(`/api/spotify/browse/categories/${cat.id}/playlists?limit=6`)
// 	);

// 	const [newReleasesRes, featuredPlaylistsRes, userPlaylistsRes, ...randomCatsRes] =
// 		await Promise.all([newReleases, featuredPlaylists, userPlaylists, ...randomCatsPromises]);

// 	return {
// 		newReleases: newReleasesRes.ok
// 			? (newReleasesRes.json() as Promise<SpotifyApi.ListOfNewReleasesResponse>)
// 			: undefined,
// 		featuredPlaylists: featuredPlaylistsRes.ok
// 			? (featuredPlaylistsRes.json() as Promise<SpotifyApi.ListOfFeaturedPlaylistsResponse>)
// 			: undefined,
// 		userPlaylists: userPlaylistsRes.ok
// 			? (userPlaylistsRes.json() as Promise<SpotifyApi.ListOfUsersPlaylistsResponse>)
// 			: undefined,
// 		homeCategories: randomCats,
// 		categoriesPlaylists: Promise.all(
// 			randomCatsRes.map((res) =>
// 				res.ok ? (res.json() as Promise<SpotifyApi.CategoryPlaylistsResponse>) : undefined
// 			)
// 		)
// 	};
// };
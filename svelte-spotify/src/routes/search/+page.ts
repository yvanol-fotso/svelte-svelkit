// import type { PageLoad } from './$types';

// export const load: PageLoad = () => {
// 	return {
// 		title: 'Search'
// 	};
// };



import { fetchRefresh } from '$helpers';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, url }) => {

    const query = url.searchParams.get('q');
	if (query) {
		throw redirect(307, `/search/${query}`);
	}

    // Étape 1 : Lancer la requête pour récupérer les catégories avec fetchRefresh
    const catsRes = await fetchRefresh(fetch, `/api/spotify/browse/categories?limit=50`);

    // Étape 2 : Résoudre la promesse pour les catégories
    let categories: SpotifyApi.MultipleCategoriesResponse | undefined = undefined;
    if (catsRes.ok) {
        categories = await catsRes.json(); // Résoudre la promesse ici
    }

    // Étape 3 : Retourner les données avec les types corrects
    return {
        title: 'Recherche', // Titre traduit en français
        categories // Catégories résolues (SpotifyApi.MultipleCategoriesResponse | undefined)
    };
};
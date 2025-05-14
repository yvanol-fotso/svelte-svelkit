//Marche bien mais je prefere celle du bas

// import { error } from '@sveltejs/kit';

// export const load = async ({ params }) => {
// 	const id = params.id;
// 	const res = await fetch(`https://dummyjson.com/products/${id}`);

// 	if (!res.ok) {
// 		throw error(res.status, 'Produit non trouvé');
// 	}

// 	const product = await res.json();
// 	return { product };
// };


import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

async function fetchArticle(id: string) {
	const response = await fetch(`https://dummyjson.com/products/${id}`);
	if (!response.ok) {
		if (response.status === 404) {
			throw error(404, { message: 'Produit / Article non trouvé' }); // Passe un objet avec la propriété 'message'
		} else {
			const errorJSON = await response.json();
			throw error(response.status, { message: errorJSON.message }); // Assure-toi que errorJSON a une propriété 'message'
		}
	}
	return await response.json();
}

export const load: PageServerLoad = async ({ params }) => {
	const product = await fetchArticle(params.id);
	return { product };
};
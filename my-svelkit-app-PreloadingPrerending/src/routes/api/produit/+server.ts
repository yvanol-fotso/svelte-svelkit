// deployement et protection des url via les CLE declarer dans nos variable d'env

import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { API_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch }) => {
	// const response = await fetch(`${API_URL}/products?limit=6`); //test deployement adaptater node
	const response = await fetch(`https://dummyjson.com/products?limit=6`);
	if (response.ok) {
		const resJSON = await response.json();
		return json(resJSON, {
			status: 200
		});
	}
	throw error(response.status, response.statusText);
};




// ================== Marche proprememnt mais on v aborder le deployement ==========


// import { json, error } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';

// export const GET: RequestHandler = async () => {
//     const products = await (await import('$lib/components/donneefictif.json')).default;

//     // Si l'utilisateur n'est pas autorisé, retourner une erreur
//     // throw error(401, 'Non Autoriser'); // si je ne commente pas sa sera toujours executer

//     // Retourner les données produits avec un statut OK (200)
//     return json(products, { status: 200 });
// };


// export const POST: RequestHandler = async ({ request }) => {
// 	const product = await request.json();

// 	if (!product.title) {
// 		throw error(400, 'Le titre du produit est requis');
// 	}

// 	return json({ id: 1313, title: product.title });
// };
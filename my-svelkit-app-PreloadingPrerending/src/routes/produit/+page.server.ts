import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { fetch, depends, locals } = event;

	console.log('/products load function', locals);

	const response = await fetch('/api/produit');
	depends('app:productsServerLoad');

	if (response.ok) {
		const productsData = await response.json();
		return {
			products: productsData
		};
	}

	const errorJSON = await response.json();
	throw error(response.status, errorJSON.message);
};

export const ssr = true; //uniquement cote server on ne peut pas tester les csr car c'est client il faut mettre dansn un ficheir .page.ts

// export const prerender = true;

// =============== Pour la Notion de enhance() on a mis a false =====================

export const prerender = false;




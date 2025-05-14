import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const products = await (await import('$lib/components/donneefictif.json')).default;
	const product = products.products.find((p) => p.id === +params.id);

	if (!product) {
		// throw redirect(301, '/products');
		throw error(404, 'Product not found!');
	}

	return {
		product,
		title: product.title,
		description: product.description
	};
};


// +page.server.ts récupère et prépare les données côté serveur
//  avant de les envoyer à la page via la fonction load(). 
//  Ces données sont ensuite stockées dans le store $page, 
//  permettant un accès dynamique et leur utilisation dans 
//  le layout .svelte pour personnaliser 
//  l'affichage, comme le titre ou la description. 
//  Ce processus sépare clairement la logique serveur 
//  (récupération des données) et la logique client 
//  (affichage dynamique des données).
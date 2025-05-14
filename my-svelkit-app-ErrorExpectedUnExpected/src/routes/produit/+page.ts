import type { PageLoad } from './$types';

//si je ne decommente pas l'importation du fichier secret j'aurais un message bien expliquer dans ma vue

//import { secret } from '$lib/server/secrets'; // j'importe mais ne use pas cest juste pour illustrer le mecanisme toujours de cle qui s;ecute uniquement cote server..

export const load: PageLoad = async ({ data, fetch, depends }) => {
	fetch('https://dummyjson.com/products');
	fetch('https://dummyjson.com/users');
	depends('app:products');
	return {
		products: data.products,
		title: 'Products List'
	};
};
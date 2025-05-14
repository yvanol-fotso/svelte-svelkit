import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Variables d’environnement
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { API_KEY } from '$env/static/private';
import { PUBLIC_KEY } from '$env/static/public';

console.log(env.API_KEY); // dynamique privé
console.log(publicEnv.PUBLIC_KEY); // dynamique public
console.log(API_KEY); // statique privé
console.log(PUBLIC_KEY); // statique public

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



// Variables d’environnement dans SvelteKit
// Dans une application, on peut avoir besoin de valeurs sensibles (comme des clés API) ou simplement de config côté client. SvelteKit fournit quatre façons d’accéder à ces variables :

// Contexte à expliquer à l’oral :
// Dans SvelteKit, les variables d’environnement sont soit publiques (accessibles au navigateur), soit privées (uniquement côté serveur).
// Elles peuvent aussi être dynamiques (évaluées à l'exécution) ou statiques (injectées au moment du build).



// Rappel des cas d’usage : où est accessible quoi ?

// Type	Contexte d’évaluation	Accessibilité	Exemple
// $env/static/private	Build time	Serveur uniquement	✅ dans page.server.ts
// $env/static/public	Build time	Serveur + client	✅ dans +page.ts ou .svelte
// $env/dynamic/private	Runtime	Serveur uniquement	✅ dans page.server.ts
// $env/dynamic/public	Runtime	Serveur + client	✅ dans +page.ts ou .svelte

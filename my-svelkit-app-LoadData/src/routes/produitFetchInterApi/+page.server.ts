import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ fetch }) => {
	const réponse = await fetch('/api/produit');

	if (réponse.ok) {
		return { produits: réponse.json() };
	}

	const erreur = await réponse.json();
	throw error(réponse.status, erreur.message);
};



// Dans une application SvelteKit, on peut être amené à créer une API interne pour plusieurs raisons : centraliser la logique d’accès aux données (lecture depuis une base de données ou appel vers une API externe), réutiliser ces données dans différentes pages ou composants de l’application, ou encore cacher des informations sensibles (comme des clés API) côté serveur.

// Une API interne dans SvelteKit se crée facilement à l’aide d’un fichier comme src/routes/api/products/+server.ts, qui expose des données sous forme de réponse HTTP, exactement comme une API REST. Mais contrairement à une API publique, cette API est interne car elle est utilisée exclusivement par les composants ou pages de l’application SvelteKit elle-même.

// Dans notre exemple, nous allons consommer cette API via le fichier +page.server.ts de la route /products, pour charger les données côté serveur et les rendre disponibles dans la page cliente.


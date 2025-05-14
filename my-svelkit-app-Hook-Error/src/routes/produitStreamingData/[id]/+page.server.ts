import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const productRes = await fetch(`https://dummyjson.com/products/${params.id}`);

	if (!productRes.ok) {
		throw error(productRes.status, 'Erreur du chargement du produit');
	}

	const product = await productRes.json();

	const commentaires = fetch('https://dummyjson.com/comments').then((res) => res.json());

	return {
		product,
		title: product.title,
		description: product.description,
		nested: {
			commentaires
		}
	};
};


// C'est quoi une promesse (promise) en JavaScript ?
// Une promesse est un objet qui représente une valeur 
// u’on aura plus tard. C’est une façon de gérer des 
// opérations asynchrones, comme un fetch().

// fetch() retourne une promesse.
//  .then(...) retourne aussi une promesse, qui contiendra les données quand elles arriveront.

// Donc ici, commentaires est une promesse. Tu ne reçois pas les commentaires tout de suite, mais plus tard, quand le serveur aura répondu.

// On crée un objet nested pour regrouper des données secondaires, comme ici les commentaires.
// nested est un groupe de données imbriquées, moins prioritaires.

// On l’utilise souvent pour les données chargées en parallèle, comme ici avec une promesse.


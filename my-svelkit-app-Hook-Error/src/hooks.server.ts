import type { Handle, HandleFetch } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle1: Handle = async ({ event, resolve }) => {
	const { locals, cookies, url } = event;

	if (!url.pathname.startsWith('/api')) {
		const token = cookies.get('token');

		locals.user = token ? { name: 'yvanol', id: 1 } : undefined;
	}

	const response = await resolve(event);

	return response;
};

export const handle = sequence(handle1);

export const handleFetch: HandleFetch = ({ request, event, fetch }) => {
	if (request.url.startsWith('https://dummyjson.com/')) {
		const cookie = event.request.headers.get('cookie');
		if (cookie) {
			request.headers.set('cookie', cookie);
		}
	}
	return fetch(request);
};


// ┌───────────────────────────────────┐
// │  **HOOKS DANS SVELTEKIT**         │
// ├───────────────────────────────────┤
// │ 1. handle:                        │
// │    - Vérifie les cookies          │
// │    - Remplit event.locals         │
// │                                   │
// │ 2. handleFetch:                   │
// │    - Ajoute des headers aux API   │
// │                                   │
// │ [Capture hooks.server.ts]         │
// └───────────────────────────────────┘



// Pour que les données que je place dans locals dans le fichier hooks.server.ts soient reconnues et bien typées dans tout le projet, j’ai dû déclarer une interface Locals dans le fichier src/app.d.ts. C’est une exigence de SvelteKit pour pouvoir accéder à ces données partout dans le code avec l’autocomplétion et sans erreur de typage TypeScript.

// Dans mon cas, j’ai défini l’interface Locals avec un objet user qui contient un id et un name. Ce sont les données que je récupère après vérification du cookie de session, et que je rends disponibles globalement.

// Concrètement, dès qu’un utilisateur est connecté, ses informations sont accessibles via event.locals.user, et je peux les utiliser dans mes layouts, mes pages, ou même dans mes endpoints, sans avoir à refaire la logique de décodage à chaque fois.


// Ces éléments sont centralisés dans le fichier hooks.server.ts. 
// Il me permet de gérer globalement l’authentification, de partager 
// des données entre les composants via locals, et de modifier ou intercepter 
// les requêtes HTTP sortantes grâce à handleFetch. C’est un point d’entrée 
// unique pour tout ce qui concerne la logique transversale à l'application

// Dans mon application, j’ai centralisé certaines logiques clés dans le fichier hooks.server.ts. Ce fichier agit comme un middleware global. À chaque fois qu’une requête arrive, il me permet d’intercepter cette requête avant qu’elle atteigne une page spécifique.

// L’un des rôles principaux de ce hook est la gestion de l’authentification. Par exemple, je vérifie si un cookie de session est présent. Si oui, je peux en extraire des informations utilisateur, comme l’ID ou le nom, et je les stocke dans locals. Ce locals, c’est un espace de mémoire partagé uniquement côté serveur, que je peux ensuite retrouver dans n’importe quel load de page ou de layout.

// Grâce à ça, je peux par exemple conditionner l’accès à certaines pages en fonction de l’état de connexion, ou afficher dynamiquement des contenus liés à l’utilisateur.

// D’un autre côté, j’utilise aussi handleFetch dans ce même fichier. Il me permet de modifier ou compléter les appels fetch que le serveur va faire — par exemple en ajoutant automatiquement un header, ou en réinjectant un cookie quand je fais une requête vers une API externe.

// Tout cela permet d’éviter la duplication de logique dans chaque composant ou page, et rend l'application plus robuste et cohérente.


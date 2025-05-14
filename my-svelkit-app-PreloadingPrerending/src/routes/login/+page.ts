import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
};


// La redirection conditionnelle est utile pour bloquer certains comportements indésirables, 
// comme un utilisateur connecté qui retourne sur /login.
// Grâce à la fonction redirect() de SvelteKit, on peut définir facilement la logique de 
// redirection, en l’intégrant dans la fonction load() de la page. Ici, si l’utilisateur 
// est déjà connecté, on le redirige automatiquement vers la page d’accueil.
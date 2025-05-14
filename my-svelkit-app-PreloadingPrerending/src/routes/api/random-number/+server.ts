import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	return new Response(String(Math.random() * 10));
};

export const prerender = true;






// Quand quelqu'un fait une requête GET sur /api/random-number, on renvoie un nombre aléatoire entre 0 et 10.

// Avec export const prerender = true;, SvelteKit va appeler cette API au moment du build et générer un fichier statique avec une réponse figée.

// Donc après npm run build, ce nombre ne change plus, même si tu rafraîchis. C’est figé dans le fichier statique !

// Pourquoi ? ➔ Parce que dans SvelteKit, quand prerender = true sur un endpoint, l'API est appelée pendant la génération du site, pas en live.
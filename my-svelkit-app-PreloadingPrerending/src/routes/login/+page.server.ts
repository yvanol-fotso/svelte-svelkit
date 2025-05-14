// ========================= Enhance() pour optimiser les formulaire ===========

import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request, cookies, url, locals }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');
		
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (!username) {
			return fail(400, { usernameMissing: true });
		}
		if (!password) {
			return fail(400, { passwordMissing: true, username });
		}

		// Création d'un cookie pour la session
		// cookies.set('token', 'token_value', {
		// 	path: '/'
		// });

		cookies.set('token', 'token_value', {
			path: '/',       
			httpOnly: true, 
			secure: true,    
			sameSite: 'strict',
		  });


		  cookies.set('token', 'token_value', {
			path: '/',      
			httpOnly: true, 
			secure: true,    
			sameSite: 'strict',
		  });


		
		locals.user = { name: 'Yvanol', id: 1 };

		
		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	},
	logout: ({ cookies, url, locals }) => {
		
		cookies.delete('token', { path: '/' });
		locals.user = undefined;

		
		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	}
};


// ==============================2 redirection et name action =================

// 2 Avec les Redirecting et Name Actions


// import { fail, redirect, type Actions } from '@sveltejs/kit';

// export const actions: Actions = {
// 	login: async ({ request, cookies, url }) => {
// 		const form = await request.formData();
// 		const username = form.get('username');
// 		const password = form.get('password');

// 		if (!username) {
// 			return fail(400, { usernameMissing: true });
// 		}
// 		if (!password) {
// 			return fail(400, { passwordMissing: true });
// 		}

// 		cookies.set('token', 'token_value', {
// 			path: '/'
// 		});

// 		throw redirect(303, url.searchParams.get('redirectTo') || '/');
// 	},
// 	logout: ({ cookies, url }) => {
// 		cookies.delete('token', { path: '/' });
// 		throw redirect(303, url.searchParams.get('redirectTo') || '/');
// 	}
// };


// 1 =================================================== Marche mais pas de redirection ============

// import { fail, type Actions } from '@sveltejs/kit';

// export const actions: Actions = {
// 	default: async ({ request, cookies }) => {
// 		const form = await request.formData();
// 		const username = form.get('username');
// 		const password = form.get('password');

// 		if (!username) {
// 			return fail(400, { usernameMissing: true });
// 		}
// 		if (!password) {
// 			return fail(400, { passwordMissing: true });
// 		}

// 		cookies.set('token', 'token_value', {
// 			path: '/'
// 		});

// 		return { success: true };
// 	}
// };





// En SvelteKit, une Form Action est une fonction serveur spéciale qui traite automatiquement l'envoi d'un formulaire.

// L'idée, c'est de remplacer la création d'une API classique.
// Normalement, pour un formulaire, on créerait une route API /api/login, puis on ferait un fetch() en JavaScript.

// Avec Form Actions, on n'a pas besoin d'API :
// ➔ On exporte directement une fonction actions dans le fichier +page.server.ts.
// ➔ Et on utilise directement un formulaire <form method="POST"> dans le fichier +page.svelte.

// Quand l'utilisateur soumet le formulaire :

// Pas de fetch manuel.

// Pas d'appel API à écrire.

// SvelteKit intercepte l'envoi automatiquement, et appelle la bonne fonction d'action côté serveur.

// La réponse de cette action est ensuite disponible côté client dans une variable spéciale :
// ➔ $form ou bien via form: FormData dans les events.

// Donc dans la vue, on peut directement récupérer les résultats du traitement serveur sans faire d'appel réseau manuel.

// En résumé :

// La Form Action agit comme une mini-API cachée derrière le formulaire.

// C'est plus simple.

// C'est sécurisé (pas de JavaScript obligatoire, pas de fetch exposé au client).

// C'est intégré dans le cycle normal de navigation de SvelteKit.
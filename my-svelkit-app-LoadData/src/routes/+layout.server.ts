import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	// Accès aux cookies via le paramètre
	const token = cookies.get('token');

	// Exemple d'utilisateur simulé
	const user = { name: 'yvanol', id: 21 };

	return {
		user: token ? user : null
	};
};

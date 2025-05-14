import type { HandleServerError } from '@sveltejs/kit';

export const handleError: HandleServerError = ({ error, event }) => {
	console.error('Erreur inattendue :', error);
	
	return {
		message: 'Une erreur est survenue.',
		code: (error as App.Error).code || 500
	};
};


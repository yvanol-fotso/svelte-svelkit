// =======================Marche mais je fais un tracking de lordre d'execution des ficheir =======

console.log("4. hooks.client.ts - Exécution au démarrage client");

export const handle = () => {
    console.log("4. hooks.client.ts - handle client");
};


// =======================Marche mais je fais un tracking de lordre d'execution des ficheir =======

// import type { HandleClientError } from '@sveltejs/kit';

// export const handleError: HandleClientError = ({ error, event }) => {
// 	console.log('This is coming from handleError.');
// 	console.log(error, event); // Send to sentry or any error logging service.

// 	return {
// 		message: 'An unexpected error has occurred.',
// 		code: 'UNEXPECTED'
// 	};
// };
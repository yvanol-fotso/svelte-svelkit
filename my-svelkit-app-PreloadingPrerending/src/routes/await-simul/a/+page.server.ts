export async function load({ parent }) {
	console.log('DÉBUT DE A');
	const { user } = await parent(); // dépend de layout mon layout.server.ts
	await new Promise((r) => setTimeout(r, 5000)); // attend 5s
	console.log('FIN DE A');
	return { user, dataA: 'Résultat de A' };
}

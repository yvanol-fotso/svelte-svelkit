export async function load({ parent }) {
	console.log('DÉBUT DU LAYOUT DE A');
	const { user } = await parent();
	await new Promise((r) => setTimeout(r, 5000));
	console.log('FIN DU LAYOUT DE A');
	return { user, dataA: 'Résultat de A' };
}

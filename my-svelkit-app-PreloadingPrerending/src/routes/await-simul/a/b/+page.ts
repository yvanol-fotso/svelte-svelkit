export async function load({ parent }) {
	console.log('DÉBUT DE B');
	const { user, dataA } = await parent(); // dépend de layout + A
	await new Promise((r) => setTimeout(r, 8000)); // simule 8s
	console.log('FIN DE B ');
	return { user, dataA, dataB: 'Résultat de B' };
}

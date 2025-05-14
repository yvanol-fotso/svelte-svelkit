
export async function load({ parent }) {
	console.log('DÉBUT DE  C ');
	const { user } = await parent(); // dépend seulement du layout
	await new Promise((r) => setTimeout(r, 1000)); // simule 1s
	console.log(' DÉBUT DE  C ');
	return { user, dataC: 'Résultat de C' };
}

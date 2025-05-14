// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			products?:{id:number}[]   // Déclare que PageData peut contenir une liste de produits, chaque produit ayant un id
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

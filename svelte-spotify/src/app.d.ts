// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface PageData {
			user: SpotifyApi.CurrentUsersProfileResponse | null;
		}

	}
}




// declare interface Window {
// 	refreshPromise: Promise<Response> | null;
// } // il faut une delaration globale


declare global {
    interface Window {
      refreshPromise: Promise<Response> | null;
    }
  }



// Pourquoi ? : Le namespace App est réservé pour définir des types spécifiques à l’application SvelteKit, comme PageData, Locals, Error, etc. (voir la documentation SvelteKit). Les déclarations de modules externes, comme lucide-svelte, doivent être placées à la racine du fichier app.d.ts, en dehors de declare global.

// Déclaration pour étendre les types du module lucide-svelte
// But : Personnaliser les types des icônes pour supporter aria-hidden et focusable dans tout le projet
declare module 'lucide-svelte' {
    import type { SvelteComponent } from 'svelte';

    // Interface des props acceptées par les icônes
    // But : Définir toutes les props possibles, y compris celles pour l'accessibilité
    interface IconProps {
        size?: number | string; // Taille de l'icône (ex. 24, '24px')
        color?: string; // Couleur de l'icône (ex. 'red', '#fff')
        strokeWidth?: number | string; // Épaisseur du trait (ex. 2, '2px')
        absoluteStrokeWidth?: boolean; // Option pour gérer l'épaisseur absolue du trait
        class?: string; // Classes CSS appliquées à l'icône
        'aria-hidden'?: boolean | 'true' | 'false' | null | undefined; // Prop pour l'accessibilité ARIA
        focusable?: boolean | 'true' | 'false' | undefined        ; // Permet de désactiver le focus pour les icônes décoratives
    }

    // Type pour les icônes exportées (ex. Home, Menu, X)
    // But : Typer les icônes comme des composants Svelte compatibles avec <svelte:component>
    export type Icon = typeof SvelteComponent<IconProps>;
}


export {};

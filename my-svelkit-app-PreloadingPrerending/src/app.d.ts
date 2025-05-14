// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
			user?: {
				id: number;
				name: string;
			};
		}
		// interface Error {
		// 	message: string;
		// 	code?: number;
		//   }
		interface Error {
			code?: string;
		}
		interface LayoutData {
            user?: { id: number; name: string };
            navLinks?: { path: string; label: string }[];
        }
		// interface PageState {}
		// interface Platform {}


		//je add ceci 
		
		// interface LayoutData {
        //     user?: { id: number; name: string };
        //     navLinks?: { path: string; label: string }[];
        //     aboutTitle?: string;
        //     aboutInfo?: string; // Ajouter aboutInfo
        // }
        // interface PageData {
        //     user?: { id: number; name: string };
        //     navLinks?: { path: string; label: string }[];
        //     aboutTitle?: string;
        //     aboutInfo?: string;
        //     pageMessage?: string;
        //     posts?: { title: string }[]; // Ajouter posts
        // }
	}
}

export {};

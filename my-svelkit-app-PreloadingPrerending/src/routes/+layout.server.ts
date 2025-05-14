// =======================Marche mais je fais un tracking de lordre d'execution des ficheir =======

import type { enhance } from '$app/forms';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
    console.log("2. +layout.server.ts (racine) - Début chargement (1s)");
    console.log("2. +layout.server.ts (racine) - Fin chargement");
	const user = locals.user;
	return {
		user
	};
};


// ======================Marche mais je teste l'ordre dexecution des ficheir =============

// import type { enhance } from '$app/forms';
// import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = ({ locals }) => {
// 	const user = locals.user;
// 	return {
// 		user
// 	};
// };





// ============================== Notion de enhance() pour les formulaire je dois commcenter ceci ==========

// export const ssr = true;
// export const csr = true;
// export const trailingSlash = 'never';


// Dans SvelteKit, on peut contrôler le comportement de rendu et d'URL pour chaque page ou pour tout un ensemble de pages.
// Par exemple, en mettant ssr, csr, et trailingSlash dans un fichier +page.server.ts, on affecte seulement cette page.
// Mais si on veut appliquer la règle à plusieurs pages d'un coup, on déplace ces paramètres dans +layout.server.ts, qui est hérité automatiquement par toutes les pages enfants.
// C'est ce qu'on voit dans le tutoriel : d'abord ils sont définis localement, puis déplacés pour une meilleure gestion globale.
//  Ce ficheir n'existai pas je lais creer pour faire un tracking je fais un tracking sur l'ordre des chargement des fichier 


import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent }) => {
    console.log("3. +layout.ts (racine) - Début chargement (0.5s)");
    const parentData = await parent(); // Récupère les données de +layout.server.ts
    await new Promise(resolve => setTimeout(resolve, 500)); // 0.5 seconde
    console.log("3. +layout.ts (racine) - Fin chargement");
    return {
        ...parentData, // Propager user
        navLinks: [
            { path: '/', label: 'Accueil' },
            { path: '/about', label: 'À propos' }
        ]
    };
};
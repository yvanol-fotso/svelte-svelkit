import { fetchRefresh } from '$helpers';
import type { PageLoad } from '../$types';

// Définir explicitement l'interface PageData pour clarifier les types
//pas obliger car deja dans les fichiers generer
// export interface PageData {
//     user: { display_name?: string; images?: { url: string }[]; type?: string; followers?: { total: number } } | null;
//     color: string | null;
//     following: SpotifyApi.UsersFollowedArtistsResponse | undefined;
//     title?: string;
// }

export const load: PageLoad = async ({ fetch, parent }) => {
    // Étape 1 : Récupérer les données de l'utilisateur depuis la fonction parent
    const { user } = await parent();

    // Étape 2 : Lancer la requête pour les artistes suivis
    const followingReq = fetchRefresh(fetch, `/api/spotify/me/following?type=artist&limit=6`);

    // Étape 3 : Lancer la requête pour la couleur si une image de profil existe
    let colorReq;
    if (user?.images && user.images.length > 0) {
        colorReq = fetchRefresh(
            fetch,
            `/api/average-color?${new URLSearchParams({
                image: user.images[0].url
            }).toString()}`
        );
    }

    // Étape 4 : Attendre les réponses des deux requêtes
    const [followingRes, colorRes] = await Promise.all([followingReq, colorReq]);

    // Étape 5 : Résoudre la promesse pour la couleur
    let color: string | null = null;
    if (colorRes?.ok) {
        const colorData = await colorRes.json();
        color = colorData.color || null;
    }

    // Étape 6 : Résoudre la promesse pour les artistes suivis
    let following: SpotifyApi.UsersFollowedArtistsResponse | undefined = undefined;
    if (followingRes.ok) {
        following = await followingRes.json(); // Résoudre la promesse ici
    }

    // Étape 7 : Retourner les données avec les types corrects
    return {
        user, // Données de l'utilisateur
        title: user?.display_name, // Titre basé sur le nom d'affichage
        color, // Couleur résolue (string | null)
        following // Artistes suivis résolus (SpotifyApi.UsersFollowedArtistsResponse | undefined)
    };
};
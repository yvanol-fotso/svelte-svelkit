import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { fetchRefresh } from '$helpers';

export const load: PageLoad = async ({ fetch: _fetch, params, parent, depends, route }) => {
    // Étape 1 : Marquer la route comme dépendance pour permettre l'invalidation
    depends(`app:${route.id}`);

    // Étape 2 : Créer une fonction fetch wrappée avec fetchRefresh
    const fetch = (path: string) => fetchRefresh(_fetch, path);

    // Étape 3 : Récupérer les données de l'utilisateur depuis la fonction parent
    const { user } = await parent();

    // Étape 4 : Récupérer les informations de l'artiste
    const artistRes = await fetch(`/api/spotify/artists/${params.id}`);
    if (!artistRes.ok) {
        throw error(artistRes.status, 'Échec du chargement de l\'artiste !');
    }
    const artistResJSON: SpotifyApi.SingleArtistResponse = await artistRes.json();

    // Étape 5 : Lancer la requête pour la couleur si une image de l'artiste existe
    let colorReq;
    if (artistResJSON?.images?.length > 0) {
        colorReq = fetch(
            `/api/average-color?${new URLSearchParams({
                image: artistResJSON.images[0].url
            }).toString()}`
        );
    }

    // Étape 6 : Lancer toutes les requêtes en parallèle
    const [albumsRes, appearsOnRes, topTracksRes, relatedArtistsRes, colorRes] = await Promise.all([
        fetch(`/api/spotify/artists/${params.id}/albums?limit=6&include_groups=album,single`),
        fetch(`/api/spotify/artists/${params.id}/albums?limit=6&include_groups=appears_on`),
        fetch(`/api/spotify/artists/${params.id}/top-tracks?market=${user?.country}`),
        fetch(`/api/spotify/artists/${params.id}/related-artists`),
        colorReq
    ]);

    // Étape 7 : Résoudre la promesse pour la couleur
    let color: string | null = null;
    if (colorRes?.ok) {
        const colorData = await colorRes.json();
        color = colorData.color || null;
    }

    // Étape 8 : Résoudre la promesse pour les albums de l'artiste
    let artistAlbums: SpotifyApi.ArtistsAlbumsResponse | undefined = undefined;
    if (albumsRes.ok) {
        artistAlbums = await albumsRes.json();
    }

    // Étape 9 : Résoudre la promesse pour les apparitions de l'artiste
    let artistAppearsOn: SpotifyApi.ArtistsAlbumsResponse | undefined = undefined;
    if (appearsOnRes.ok) {
        artistAppearsOn = await appearsOnRes.json();
    }

    // Étape 10 : Résoudre la promesse pour les top tracks de l'artiste
    let artistTopTracks: SpotifyApi.ArtistsTopTracksResponse | undefined = undefined;
    if (topTracksRes.ok) {
        artistTopTracks = await topTracksRes.json();
    }

    // Étape 11 : Résoudre la promesse pour les artistes similaires
    let artistRelatedArtists: SpotifyApi.ArtistsRelatedArtistsResponse | undefined = undefined;
    if (relatedArtistsRes.ok) {
        artistRelatedArtists = await relatedArtistsRes.json();
    }

    // Étape 12 : Retourner les données avec les types corrects
    return {
        title: artistResJSON.name, // Nom de l'artiste
        artist: artistResJSON, // Données de l'artiste
        artistAlbums, // Albums résolus (SpotifyApi.ArtistsAlbumsResponse | undefined)
        artistAppearsOn, // Apparitions résolues (SpotifyApi.ArtistsAlbumsResponse | undefined)
        artistTopTracks, // Top tracks résolus (SpotifyApi.ArtistsTopTracksResponse | undefined)
        artistRelatedArtists, // Artistes similaires résolus (SpotifyApi.ArtistsRelatedArtistsResponse | undefined)
        color // Couleur résolue (string | null)
    };
};
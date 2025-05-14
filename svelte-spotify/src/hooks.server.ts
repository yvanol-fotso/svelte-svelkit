import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Ignorer la requête pour /.well-known/appspecific/com.chrome.devtools.json pour éviter les erreurs 404 dans le terminal ceci veint de mon navigateur Chrome pas de mon app
    if (event.url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
        return new Response(null, { status: 404 }); // Réponse silencieuse pour supprimer l'erreur
    }

    // Middleware pour le tracking : ajouter un cookie de test en environnement de développement
    if (process.env.NODE_ENV === 'development') {
        event.cookies.set('test_cookie', 'works', {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: false
        });
    }

    const response = await resolve(event);
    return response;
};
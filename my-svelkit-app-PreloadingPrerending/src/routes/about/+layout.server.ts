export const load = async ({ parent }) => {
    const parentData = await parent();
    console.log("6. +layout.server.ts (/about) - Début chargement (2s)");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("6. +layout.server.ts (/about) - Fin chargement");
    return { ...parentData, aboutInfo: "Informations spécifiques à /about" };
};
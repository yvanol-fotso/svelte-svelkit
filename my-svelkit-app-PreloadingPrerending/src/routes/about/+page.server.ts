export const load = async ({ parent }) => {
    const parentData = await parent();
    console.log("8. +page.server.ts (/about) - Début chargement (3s)");
    await new Promise(resolve => setTimeout(resolve, 3000));
    const response = await fetch('https://dummyjson.com/posts?limit=3');
    const posts = await response.json();
    console.log("8. +page.server.ts (/about) - Fin chargement");
    return { ...parentData, posts: posts.posts };
};
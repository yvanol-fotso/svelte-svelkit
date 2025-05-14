// export const load = async ({ parent }) => {
//     const parentData = await parent();
//     console.log("9. +page.ts (/about) - Début chargement (0.5s)");
//     await new Promise(resolve => setTimeout(resolve, 500)); // 0.5 seconde
//     console.log("9. +page.ts (/about) - Fin chargement");
//     return { ...parentData, pageMessage: "Bienvenue sur la page À Propos !" };
// };


export const load = async () => {
    console.log("9. +page.ts (/about) - Début chargement (0.5s)");
    await new Promise(resolve => setTimeout(resolve, 500)); 
    console.log("9. +page.ts (/about) - Fin chargement");

    const posts = [
        { title: "Article 1" },
        { title: "Article 2" },
        { title: "Article 3" }
    ];

    return {
        pageMessage: "Bienvenue sur la page À propos ",
        posts 
    };
};
// export const load = async ({ parent }) => {
//     const parentData = await parent();
//     console.log("7. +layout.ts (/about) - Début chargement (1s)");
//     await new Promise(resolve => setTimeout(resolve, 1000)); // 1 seconde
//     console.log("7. +layout.ts (/about) - Fin chargement");
//     return { ...parentData, aboutTitle: "À Propos de Nous" };
// };


export const load = async () => {
    console.log("7. +layout.ts (/about) - Début chargement (0.5s)");
    console.log("7. +layout.ts (/about) - Fin chargement");
    return {
        aboutTitle: "À propos de nous",
        aboutInfo: "Nous sommes une équipe passionnée par la technologie et l'innovation." 
    };
};
import type { PageServerLoad } from './$types';

export const load : PageServerLoad= async ({parent}) => {
    console.log('Fonction du chargement des produit');
    const parentData = await parent();
    console.log(parentData);
    const produit = await(await 
        import('$lib/components/donneefictif.json')
    ).default;
    // console.log(produit);
    return {
        produit
    };
}



// ou avec un seul await
// export const load = async () => {
//     const produit = await import('$lib/components/donneefictif.json');
//     return { produit: produit.default };
// };
  

// Dans SvelteKit, tout ce que je retourne depuis load() 
// sera accessible dans la page via la variable data. 
// Donc si je fais return { produit }, je récupérerai 
// ça avec data.produit.

 

//La fonction load utilisée dans SvelteKit est typée avec 
// PageLoad, ce qui te permet de charger et de retourner 
// des données pour la page. PageLoad est un type déjà défini 
// par SvelteKit et il attend que tu retournes des données 
// correspondant à l'interface PageData.


// =============================================

// Dans SvelteKit, la fonction load() 
// permet normalement de charger des données côté client. 
// Cependant, il arrive parfois que l'on souhaite que certaines 
// données ne soient chargées que côté serveur, par exemple pour
//  des raisons de sécurité, de performance, ou pour éviter d'exposer 
//  certaines données sensibles dans le client.

//  En remplaçant le fichier +page.ts par un fichier +page.server.ts, 
//  on peut charger des données uniquement sur le serveur et non pas 
//  côté client. Cela permet de sécuriser certaines données et de les 
//  rendre accessibles uniquement lors du rendu côté serveur.
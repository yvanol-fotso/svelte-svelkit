import type { PageLoad } from './$types';

export const load : PageLoad = ({data}) =>{
    // console.log(data);
    return {
        produit: data.produits, // c'est produit que je retourne depuis ma logique server
        title:"Titre des Produits"
    };
  }

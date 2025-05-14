import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends, locals }) => {
    console.log('/products load function', locals);
    const response = await fetch('/api/products');
    depends('app:productsServerLoad');
    
    if (response.ok) {
        const productsData = await response.json(); // Ajoutez await ici
        return {
            products: productsData // Maintenant ce sont les données directement
        };
    }
    const errorJSON = await response.json();
    throw error(response.status, errorJSON.message);
};
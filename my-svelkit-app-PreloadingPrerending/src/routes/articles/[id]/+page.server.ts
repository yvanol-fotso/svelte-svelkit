// export const load = async ({ fetch, params }) => {
//     const response = await fetch(`https://dummyjson.com/products/${params.id}`);
//     const product = await response.json();
//     return { product };
// };

// /src/routes/products/[id]/+page.server.ts
export const load = async ({ fetch, params, parent }) => {
    const parentData = await parent(); // Récupère { user, products }
    console.log("Début chargement /products/[id] (8s)...");
    await new Promise(resolve => setTimeout(resolve, 8000)); // 8 secondes
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    const product = await response.json();
    console.log("Fin chargement /products/[id]");
    return { ...parentData, product }; // Ajoute product, conserve user et products
};
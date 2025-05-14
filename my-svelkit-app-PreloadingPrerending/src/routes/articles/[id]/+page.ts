// export const load = async ({ fetch, params }) => {
//     const response = await fetch(`https://dummyjson.com/products/${params.id}`);
//     const product = await response.json();
//     return { product };
// };


export const load = async ({ fetch, params, parent }) => {
    const parentData = await parent(); // Récupère { user, products }
    console.log("Début rechargement client /products/[id] (8s)...");
    await new Promise(resolve => setTimeout(resolve, 8000)); // 8 secondes
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    const product = await response.json();
    console.log("Fin rechargement client /products/[id]");
    return { ...parentData, product };
};

export const load = async ({ fetch, params, parent }) => {
    const parentData = await parent(); // Récupère { user, products, product }
    console.log("Début rechargement client /products/[id]/status (1s)...");
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 seconde
    const response = await fetch(`https://dummyjson.com/products/${params.id}/status`);
    const status = await response.json();
    console.log("Fin rechargement client /products/[id]/status");
    return { ...parentData, status };
};
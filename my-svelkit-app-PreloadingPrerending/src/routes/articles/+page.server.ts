export const load = async ({ fetch }) => {
    console.log("Début chargement /products (5s)...");
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 secondes
    const response = await fetch('https://dummyjson.com/products/');
    const data = await response.json();
    console.log("Fin chargement /products");
    return { products: data.products };
};
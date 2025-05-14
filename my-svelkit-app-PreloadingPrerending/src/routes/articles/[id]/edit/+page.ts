export const load = async ({ fetch, params }) => {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    const product = await response.json();
    return { product };
};
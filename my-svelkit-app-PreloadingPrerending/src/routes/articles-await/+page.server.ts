// export const load = async ({ fetch }) => {
//     const response = await fetch('https://dummyjson.com/products');
//     const products = await response.json();
//     return { products };
// };

export const load = async ({ fetch }) => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return {
        products: data.products as { id: number; name: string }[],
        total: data.total as number,
        skip: data.skip as number,
        limit: data.limit as number
    };
};
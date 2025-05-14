
export const load = async ({ fetch, params }) => {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    const product = await response.json();
    return { product };
};

export const actions = {
    default: async ({ request, params }) => {
        const formData = await request.formData();
        const updatedProduct = {
            name: formData.get('name'),
            price: formData.get('price'),
            description: formData.get('description')
        };
        await fetch(`https://dummyjson.com/products/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedProduct),
            headers: { 'Content-Type': 'application/json' }
        });
        return { success: true };
    }
};
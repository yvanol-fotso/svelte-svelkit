<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>{data.product.name}</h1>
<p>Prix : {data.product.price} €</p>
<p>Description : {data.product.description}</p>
<a href={`/articles/${data.product.id}/edit`}>Éditer</a>

<script>
    /** @type {import('./$types').PageData} */
    export let data;

    console.log(data.products.products); 
</script>

<h1>Liste des Produits</h1>
<ul>
    {#each data.products.products as product}
        <li><a href={`/articles/${product.id}`}>{product.description}</a></li>
    {/each}
</ul>


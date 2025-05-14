<script>
    import { enhance } from '$app/forms';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Éditer {data.product.name}</h1>
<form method="POST" use:enhance>
    <label>
        Nom :
        <input type="text" name="name" value={data.product.name} />
    </label>
    <label>
        Prix :
        <input type="number" name="price" value={data.product.price} />
    </label>
    <label>
        Description :
        <textarea name="description">{data.product.description}</textarea>
    </label>
    <button type="submit">Enregistrer</button>
</form>
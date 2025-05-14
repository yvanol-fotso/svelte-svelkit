<script lang="ts">

    import type {PageData} from './$types'

    export let data: PageData;
    $: produit = data.produit.products;
    // $: console.log(produit);
  </script>

<!-- <h2>Liste de produits</h2> -->
<h2>{data.title}</h2>

{#if  produit && produit.length > 0}
<ul>
  {#each produit as prod }
    <li>
      <!-- <img src="{prod.thumbnail}" alt="{prod.title}"> -->
      <h3><a href="/produit/{prod.id}">{prod.title}</a></h3>
      <p>{prod.description}</p>
    </li>
    
  {/each}
</ul>
  
{/if}




<!-- si je use un autre name que data alors crash -->
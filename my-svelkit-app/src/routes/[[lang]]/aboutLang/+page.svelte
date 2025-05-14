<script>
  import { goto } from '$app/navigation';
  import {page} from '$app/stores';
  let name = 'yvan';

</script>


<h1>About {name}</h1>

{JSON.stringify($page.params)}


<button on:click={() => { goto('/'); } }>Go to produit page</button>


<style>

</style>
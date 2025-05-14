<script lang="ts">
	import type {LayoutData} from './$types';
	import { page } from '$app/stores';

	export let data:LayoutData;
	console.log(data.user)
</script>

<!-- test partage data depuis un new fichier page.server.ts de produits/[id] et recuperation -->
<svelte:head>
  <title>Website Name{$page.data.title ? ` - ${$page.data.title}` : ''}</title>
</svelte:head>



{#if  data.user}
  <p>Connecter sur {data.user.name}</p>
	
{/if}

<nav>
	<a href="/">Home</a>
	<a href="/produit">Produit</a>
	{#if  !data.user}
	  <a href="/login">Login</a>
	{/if}
</nav>

{#if data.user}
	<button
		on:click={() => {
			fetch('/api/logout', { method: 'POST' });
		}}
	>
		Logout
	</button>
{/if}


 

<slot />

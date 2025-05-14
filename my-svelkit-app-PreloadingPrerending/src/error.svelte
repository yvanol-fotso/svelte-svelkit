<script lang="ts">
    export let error;
    console.log("12. +error.svelte (/about) - Erreur spécifique dans ma page about");
  </script>
  
  <svelte:head>
    <title>Erreur {error?.status || 500}</title>
    
  </svelte:head>
  
  <h1>Oups !</h1>
  <p>Une erreur est survenue.</p>
  <p>Status : {error?.status}</p>
  <p>Message : {error?.message || 'Erreur inconnue.'}</p>
  
  <a href="/">Retour à l’accueil</a>
  


<!-- <script lang="ts">
	import type { error } from '@sveltejs/kit';
	export let data: Error;
</script>

<h1>Une erreur inattendue est survenue</h1>
{#if data?.message}
	<p>{data.message}</p>
{/if} -->
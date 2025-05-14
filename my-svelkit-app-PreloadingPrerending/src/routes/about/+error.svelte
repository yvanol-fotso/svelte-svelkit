<script lang="ts">
    export let error;
    console.log("12. +error.svelte (/about) - Erreur  pour ma spécifique about");
</script>

<svelte:head>
    <title>Erreur {error?.status || 500} - À Propos</title>
</svelte:head>

<h1>Erreur sur la page À Propos</h1>
<p>Status : {error?.status}</p>
<p>Message : {error?.message || 'Erreur inconnue.'}</p>
<a href="/about">Réessayer</a>
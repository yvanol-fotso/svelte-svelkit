<!-- <h1>Home</h1> -->


<script lang="ts">
	import { goto, preloadCode, preloadData } from '$app/navigation';
	import { onMount } from 'svelte';

	let dataDynamic: string[] = [];
	onMount(() => {
		setTimeout(() => {
			dataDynamic = ['Data 1', 'Data 2'];
		}, 1000);
		// console.log("vue");
	});

</script>

<h1>Home</h1>

{#if dataDynamic.length > 0}
	<ul>
		{#each dataDynamic as item}
			<li>{item}</li>
		{/each}
	</ul>
{/if}



<button
	on:focus={() => {}}
	on:mouseover={async () => {
		await preloadCode('/produit');
	}}
	on:click={() => {
		goto('/produit', {
			noScroll: true
		});
	}}
	>Products
</button>



<!-- Quand l'utilisateur survole (événement on:mouseover) le bouton "Products", la fonction preloadCode est appelée avec l'argument '/produit'.

Que fait preloadCode ? Il précharge le code JavaScript nécessaire pour la page /produit. Autrement dit, le code associé à la page /produit est téléchargé en arrière-plan, même avant que l'utilisateur n'arrive sur cette page. Cela permet de rendre la navigation entre les pages plus rapide et plus fluide, car le code est déjà en mémoire quand l'utilisateur clique sur le bouton.

goto('/produit', { noScroll: true }) :

Lorsque l'utilisateur clique sur le bouton "Products", l'événement on:click est déclenché. La fonction goto est utilisée pour naviguer vers la page /produit.

Que fait goto ? Cette fonction effectue la navigation vers la page /produit, mais avec une option { noScroll: true }, ce qui signifie qu'il n'y aura pas de défilement automatique vers le haut de la page lorsqu'on charge /produit. Cela peut être utile dans des situations où tu veux garder la position de scroll de l'utilisateur sur une page donnée, par exemple, si tu veux éviter que l'utilisateur perde sa place lorsqu'il clique sur un lien. -->
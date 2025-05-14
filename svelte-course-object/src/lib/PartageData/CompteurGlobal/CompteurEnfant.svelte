<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { getCount, increment, decrement, subscribe } from '$lib/PartageData/CompteurGlobal/Compteur.svelte';

	let currentValue = getCount();

	onMount(() => {
		const unsubscribe = subscribe(() => {
			currentValue = getCount();
		});
		onDestroy(unsubscribe);
	});
</script>

<div class="counter">
	<button onclick={decrement}>-</button>
	<span>{currentValue}</span>
	<button onclick={increment}>+</button>
</div>
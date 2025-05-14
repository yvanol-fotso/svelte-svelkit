<script lang="ts">
	import Compteur from '$lib/PartageData/ShareWithProps/Compteur.svelte';

	let sharedValue = 0;

	function inc() {
		sharedValue += 1;
	}

	function dec() {
		sharedValue -= 1;
	}
</script>

<h1>Compteurs avec props</h1>

<Compteur value={sharedValue} increment={inc} decrement={dec} />
<Compteur value={sharedValue} increment={inc} decrement={dec} />
<Compteur value={sharedValue} increment={inc} decrement={dec} />

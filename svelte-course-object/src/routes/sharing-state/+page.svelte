<script lang="ts">
    import Click from "$lib/Counter/Click.svelte";
    import Clickstore from "$lib/Counter/ClickStore.svelte";



</script>

<Click/>

<h1>Stores</h1>
<Clickstore/>
<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
		}
	}
</style>
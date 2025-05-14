<script lang="ts">
	export let value: number;
	export let increment: () => void;
	export let decrement: () => void;
</script>

<div class="counter">
	<button on:click={decrement}>-</button>
	<span>{value}</span>
	<button on:click={increment}>+</button>
</div>

<script lang="ts">
	import { sharedCount } from './counterStore';
</script>

<div class="counter">
	<button onclick={() => sharedCount.update(n => n - 1)}>-</button>
	<span>{$sharedCount}</span>
	<button onclick={() => sharedCount.update(n => n + 1)}>+</button>
</div>

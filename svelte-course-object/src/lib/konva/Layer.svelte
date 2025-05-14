<script lang="ts">
	import Konva from 'konva';
	import { onDestroy, type Snippet } from 'svelte';
	import { getStageContext } from './konvaContext';

	let { fils, ...props }: { fils?: Snippet } & Konva.LayerConfig = $props();

	const stage = getStageContext();
	const node = new Konva.Layer(props);
	stage.add(node);

	onDestroy(() => {
		node.destroy();
	});
</script>

{@render fils?.()}
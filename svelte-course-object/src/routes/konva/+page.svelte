<script lang="ts">
	import Konva from "konva";
    // import Stage from '$lib/konva/Stage.svelte'
    import {Stage,Layer,Rect} from '$lib/konva';

//   let container: HTMLDivElement;

//   $effect(() => {
// 		const stage = new Konva.Stage({
// 			container,
// 			width: 500,
// 			height: 500
// 		});
// 		const layer = new Konva.Layer();
// 		const rect1 = new Konva.Rect({
// 			x: 20,
// 			y: 20,
// 			width: 100,
// 			height: 60,
// 			fill: 'purple',
// 			stroke: 'white',
// 			strokeWidth: 4
// 		});
// 		layer.add(rect1);
// 		stage.add(layer);
// 	});


    
</script>

<!-- <div bind:this={container}></div> -->

<Stage width={500} height={500}>
    <Layer>
        
        <Rect
			width={200}
			height={200}
			x={20}
			y={40}
			fill="purple"
			stroke="yellow"
			strokeWidth={3}
			draggable
		/>
    </Layer>
</Stage>




<style>
    :global(body) {
        background-color: #53816e;
        color: #fff;
        margin: 0;
        padding: 0;
    }
</style>
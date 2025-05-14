<!-- Parent de Layer -->

<script lang="ts">
	import type { Snippet } from "svelte";
	import Konva from "konva";
	import { setStageContext } from "./konvaContext";

    let {fils,...props}:{fils?:Snippet} & Konva.StageConfig= $props();
    let container: HTMLDivElement;
    let stage:Konva.Stage;
    let isReady = $state(false);

    setStageContext(() =>stage);

    $effect(() =>{
        stage = new Konva.Stage({
            container,
            ...props
        });

        return () =>{
            stage.destroy();
        }
    })
</script>

<div bind:this={container}>

    {#if isReady}
    {@render fils?.()}
    {/if}
    
</div>
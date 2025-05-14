<script lang="ts">
    import Icon from '$lib/playerComponent/Icons.svelte';
    import VideosviewersDescendant from './VideosviewersDescendant.svelte';
	import IconsDescende from './IconsDescende.svelte';

    export let titre: string;
    
    export let logAction: (event: { message: string }) => void;


    function handleChildEvent(event: { message: string }) {
        logAction(event); 
        console.log('Message reçu depuis enfant :', event.message);
    }


</script>

<div style="padding: 20px; background: lightgray;">
    <h2>{titre}</h2>
    <VideosviewersDescendant logAction={handleChildEvent} />
    <IconsDescende logAction={handleChildEvent} />
</div>

<style>

    :global(body) {
      font-family: sans-serif;
      background-color: #686565;
      padding: 20px;
    }
  
  </style>
  
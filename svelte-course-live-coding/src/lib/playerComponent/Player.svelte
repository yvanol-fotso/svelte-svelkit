<script lang="ts">
    import Icon from '$lib/playerComponent/Icons.svelte';
    import Videosviewers from '$lib/playerComponent/Videosviewers.svelte';

    export let clickEvent: (event: { message: string }) => void;

    function handleChildEvent(event: { message: string }) {
        clickEvent(event); 
        console.log('Player dit Message reçu depuis enfant :', event.message);
    }
</script>

<div class="corp">
    <Videosviewers clickEvent={handleChildEvent} />
    <Icon clickEvent={handleChildEvent} />
</div>


<style>

    :global(body) {
      font-family: sans-serif;
      background-color: #686565;
      padding: 20px;
    }
  
  </style>
  
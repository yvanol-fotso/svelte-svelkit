<script lang="ts">
    import Child from '$lib/event-svelte-5/Enfant.svelte';
  
    function handleChildEvent(event: { message: string }) {
      console.log(event.message); // Affiche "Message de l'enfant"
    }
  </script>
  
  <Child click={handleChildEvent} />
  
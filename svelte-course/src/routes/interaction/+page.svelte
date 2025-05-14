<script lang="ts">
    import Child from '$lib/Interaction.svelte';
    let childRef: InstanceType<typeof Child>;
  </script>
  
  <Child bind:this={childRef} />
  <button on:click={() => childRef.reset()}>Réinitialiser l'enfant</button>
  
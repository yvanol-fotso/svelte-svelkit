<script>
    import Child from '$lib/event-svelte-4/Enfant.svelte';
  </script>
  
  <Child on:message={e => console.log(e.detail.content)} />
  
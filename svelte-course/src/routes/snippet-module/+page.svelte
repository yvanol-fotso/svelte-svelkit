<script>
    import { snippet } from '$lib/Snippet-module.svelte';
</script>
  
  <h1>Test du Snippet</h1>
  
  <!-- je use utilise la directive {@html} pour injecter le HTML généré par la fonction  dans le module lib de snippet -->
  {@html snippet("Bob")}
  {@html snippet("Charlie")}
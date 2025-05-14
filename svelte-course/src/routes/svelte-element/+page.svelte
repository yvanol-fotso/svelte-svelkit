<script>
    let tag = 'h2';
  </script>
  
  <svelte:element this={tag}>Titre dynamique</svelte:element>
  
  <select bind:value={tag}>
    <option value="h1">H1</option>
    <option value="h2">H2</option>
    <option value="p">P</option>
  </select>
  
<script>
    import { onMount } from 'svelte';
  
    let width = 0;
    let visibility = 'unknown';
  
    const handleResize = () => {
      width = window.innerWidth;
    };
  
    const handleVisibilityChange = () => {
      visibility = document.visibilityState;
    };
  
    onMount(() => {
      // Sûr : exécuté uniquement dans le navigateur
      width = window.innerWidth;
      visibility = document.visibilityState;
  
      window.addEventListener('resize', handleResize);
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    });
  </script>
  
  <!-- Utilisation des éléments spéciaux -->

  <svelte:window on:resize={handleResize} />
  <svelte:document on:visibilitychange={handleVisibilityChange} />
  
  <div style="padding: 1rem; border: 1px solid #ccc;">
    <h3>Éléments Spéciaux</h3>
    <p>Largeur de la fenêtre : {width}px</p>
    <p>Visibilité de l'onglet : {visibility}</p>
  </div>
  
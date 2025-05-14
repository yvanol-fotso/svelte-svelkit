<script lang="ts">
    import { browser } from '$app/environment';// sans ceci error // Vérifier si l'environnement est côté client
    import { MediaQuery } from '$lib/utils/MediaQuery'; // Importer la classe MediaQuery
    import { createSubscriber } from 'svelte/reactivity'; // Importer createSubscriber de Svelte
    
    let mediaQuery: MediaQuery;
    let isWideScreen = false;
    
    // Vérifier si on est dans un environnement côté client
    if (browser) {
      // Créer une instance de MediaQuery pour écouter la largeur d'écran
      mediaQuery = new MediaQuery('min-width: 600px');
      
      // Utiliser createSubscriber pour rendre la logique réactive
      const unsubscribe = createSubscriber((update) => {
        // Appeler update quand la media query change
        const stop = mediaQuery.subscribe(update);
      
        // Retourner une fonction de nettoyage
        return () => stop();
      });
    }
    
    // Mettre à jour isWideScreen lorsque la media query change
    $: isWideScreen = browser ? mediaQuery.current : false;
  </script>
  
  <style>
    .wide-screen {
      color: green;
    }
  
    .small-screen {
      color: red;
    }
  </style>
  
  <div class={isWideScreen ? 'wide-screen' : 'small-screen'}>
    {#if isWideScreen}
      <p>Vous êtes sur un écran large (plus de 600px) !</p>
    {:else}
      <p>Vous êtes sur un écran plus petit !</p>
    {/if}
  </div>

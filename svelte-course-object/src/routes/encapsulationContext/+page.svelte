<script lang="ts">
    import CounterProvider from '$lib/EncapsulationContext/CounterProvider.svelte';
    import CounterButton from '$lib/EncapsulationContext/CounterButton.svelte';
  </script>
  
  <h1>Avec Contexte Partagé</h1>
  <CounterProvider>
    <CounterButton />
    <CounterButton />
  </CounterProvider>
  
  <h1>Sans Contexte (indépendant)</h1>
  <CounterButton />





  <!-- RQ les conetxt ne sont pas Reactif par defaut c'est a nous de leur rendre reactif  soit avec les props , store.. -->
  
<!-- 
Avec contexte partagé : les deux boutons partagent le même compteur (réactif grâce au store Svelte dans le contexte).

Sans contexte : chaque bouton utilise son propre compteur local (writable(0)), indépendamment des autres.

L’utilisation du store rendre les changements réactifs, donc à chaque clic, la valeur du compteur sera mise à jour dans tous les composants qui l’utilisent, et les boutons s’afficheront correctement. -->
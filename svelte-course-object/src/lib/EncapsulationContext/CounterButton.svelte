<!-- un enfant qui consomme le contexte -->

<!-- Premier approche marche mais les boutton du context partager ne sont pas reactif -->

<!-- <script lang="ts">
    import {
      getCounterContext,
      hasCounterContext
    } from './CounterContext';
  
    type CounterLike = {
      value: number;
      increment: () => void;
    };
  
    let counter: CounterLike;
  
    if (hasCounterContext()) {
      counter = getCounterContext();
    } else {
      counter = {
        value: 0,
        increment: () => counter.value += 1
      };
    }
  </script>
  
  <button on:click={counter.increment}>
    Clicks: {counter.value}
  </button>
   -->

<!-- Approche avec les  stores  -->


  <script lang="ts">
    import {
      getCounterContext,
      hasCounterContext
    } from './CounterContext';
  
    import { writable, type Writable } from 'svelte/store';
  
    let counter: Writable<number>;
  
    if (hasCounterContext()) {
      counter = getCounterContext();
    } else {
      counter = writable(0);
    }
  </script>
  
  <button on:click={() => counter.update(n => n + 1)}>
    Clicks: {$counter}
  </button>
  






  <!-- Ce bouton s’adapte :

  Si un contexte est dispo → il l’utilise
  
  Sinon → il crée son propre compteur local -->
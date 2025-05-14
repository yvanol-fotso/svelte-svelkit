<!-- composant parent  qui fournit un état partagé à ses enfants via setContext. -->

<!-- Premier approche marche mais les Bouttons partager ne sont pas reactif -->
<!-- <script lang="ts">
    import { setCounterContext } from './CounterContext';
  
    let count = 0;
  
    const context = {
      get value() {
        return count;
      },
      increment() {
        count += 1;
      }
    };
  
    setCounterContext(context);
  </script>
  
  <slot /> -->
  

  
  <script lang="ts">
    import { setCounterContext } from './CounterContext';
    import { writable, type Writable } from 'svelte/store';
  
    const count: Writable<number> = writable(0); // store réactif pour count
  
    // On place le store dans le contexte
    setCounterContext(count);
  </script>
  
  <slot />
  
  
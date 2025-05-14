<script lang="ts">
    import { readable, derived } from 'svelte/store';

    export const timeStore = readable(new Date(), (set) => {
      const interval = setInterval(() => {
        set(new Date()); 
      }, 1000);
  
      return () => clearInterval(interval);
    });
  
    // Store dérivé qui formate l'heure
    export const formattedTimeStore = derived(timeStore, ($timeStore) => {
      return $timeStore.toLocaleTimeString();
    });
  
   
    let warningMessage = '';
  
    $: {
      if (formattedTimeStore instanceof Date) {
        warningMessage = 'Vous ne pouvez pas modifier directement un store dérivé.';
      }
    }
  </script>
  
  <p>L'heure actuelle est : {$formattedTimeStore}</p>
  
  {#if warningMessage}
    <div class="warning">{warningMessage}</div>
  {/if}
  
  <style>
    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  
    .warning {
      color: red;
      font-size: 1rem;
      font-weight: bold;
      margin-top: 10px;
    }
  </style>
  
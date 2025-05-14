<script lang="ts">
    import { slide,fly,fade } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    let visible = true;
    let items: string[] = ['A', 'B', 'C', 'D', 'E'];
    let nextCharCode = 70; // 'F'
  
    function log(event: CustomEvent) {
      const target = event.target;
      if (target instanceof HTMLElement) {
         console.log(event.type, target.textContent);
      }
    }

  
    function addItem() {
      if (nextCharCode <= 90) {
        items = [...items, String.fromCharCode(nextCharCode++)];
      }
    }
  
    function removeItem() {
      if (items.length > 0) {
        items = items.slice(0, -1);
        nextCharCode--;
      }
    }
  
    function moveUp(index: number) {
      if (index > 0) {
        [items[index - 1], items[index]] = [items[index], items[index - 1]];
        items = [...items]; // trigger reactive update
      }
    }
  
    function moveDown(index: number) {
      if (index < items.length - 1) {
        [items[index + 1], items[index]] = [items[index], items[index + 1]];
        items = [...items];
      }
    }
  </script>
  
  <label>
    <input type="checkbox" bind:checked={visible} />
    Afficher les boutons
  </label>
  
  <div style="margin-top: 1rem;">
    <button on:click={addItem}>➕ Ajouter</button>
    <button on:click={removeItem}>➖ Retirer</button>
  </div>
  
  <div style="margin-top: 1rem;">
    {#each items as label, i (label)}
      {#if visible}
        <div
          transition:slide
          on:introstart={log}
          on:introend={log}
          on:outrostart={log}
          on:outroend={log}
          style="display: flex; align-items: center; margin: 0.5rem 0;"
        >
          <button style="margin-right: 1rem;">{label}</button>
          <button on:click={() => moveUp(i)}>🔼</button>
          <button on:click={() => moveDown(i)}>🔽</button>
        </div>
      {/if}
    {/each}
  </div>
  
 <!-- pas tres doux cette aproche avec fly -->
  
   <!-- <div style="margin-top: 1rem;">
    {#each items as label, i (label)}
      {#if visible}
        <div
          in:slide={{ duration: 300 }}
          out:fly={{ y: 20, duration: 300 }}
          on:introstart={log}
          on:introend={log}
          on:outrostart={log}
          on:outroend={log}
          style="display: flex; align-items: center; margin: 0.5rem 0;"
        >
          <button style="margin-right: 1rem;">{label}</button>
          <button on:click={() => moveUp(i)}>🔼</button>
          <button on:click={() => moveDown(i)}>🔽</button>
        </div>
      {/if}
    {/each}
  </div> -->
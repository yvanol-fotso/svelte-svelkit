<script lang="ts">
    import { onMount } from 'svelte';
    import { flip } from 'svelte/animate';
    
    let items = [
      { id: 1, label: 'A' },
      { id: 2, label: 'B' },
      { id: 3, label: 'C' }
    ];
  
    function shuffle() {
      // Mélange aléatoire des éléments
      items = [...items].sort(() => Math.random() - 0.5);
    }
  </script>
  
  <style>
    .item {
      padding: 1rem;
      margin: 0.5rem 0;
      background-color: #f3f3f3;
      border-radius: 8px;
      font-size: 1.5rem;
      text-align: center;
      transition: box-shadow 0.3s;
    }
  
    .item:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  
    button {
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: #0077cc;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #005fa3;
    }
  </style>
  
  <button on:click={shuffle}>🔀 Mélanger</button>
  
  {#each items as item (item.id)}
    <div class="item" animate:flip>
      {item.label}
    </div>
  {/each}

  <!-- Tu appuies sur Mélanger → les lettres changent d’ordre → animate:flip détecte les mouvements → il les anime -->
  
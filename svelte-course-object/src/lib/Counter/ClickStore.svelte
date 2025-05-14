<script lang="ts">
    import { Counter } from '$lib/utils/CounterStore'; 
  
    const counter = new Counter();
  </script>
  
  <style>
    button {
      margin: 0.5rem;
      padding: 0.4rem 1rem;
      border: none;
      border-radius: 5px;
      background-color: #1e88e5;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #1565c0;
    }
  
    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  </style>
  

  <p>Valeur actuelle : {$counter}</p>
  
  <button onclick={() => counter.increment()}>Incrémenter</button>
  <button onclick={() => counter.reset()}>Réinitialiser</button>
  
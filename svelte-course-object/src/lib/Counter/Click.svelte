<script lang="ts">
    import { Counter } from '$lib/utils/Counter'; 
    import proxyCount from '$lib/utils/proxyCount.svelte'; 

    import {increment, reset } from '$lib/utils/proxyCount.svelte'; 

  
    const counter = new Counter();

    let valeur = $state(counter.value);

    $effect(() => {
      console.log('Valeur modifiée :', valeur);
    });
  
    function handleIncrement() {
      counter.increment();
      valeur = counter.value;
    }
  
    function handleReset() {
      counter.reset();
      valeur = counter.value;

    }
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
  
  <!-- ceci n'est pas reactif il faut declarer counter coe $state -->
  <!-- <p>Valeur actuelle : {counter.value}</p>  -->
  <p>Valeur actuelle : {valeur}</p> 

  
  <button onclick={handleIncrement}>Incrémenter</button>
  <button onclick={handleReset}>Réinitialiser</button>

  <h1> AVEC Proxy  plus besoin des getters et setters</h1>

  <h3>{proxyCount.value}</h3>
  <button onclick={() =>{
    proxyCount.value +=1;
  }}>Incrémenter</button>

  <button onclick={() =>{
    proxyCount.value = 0;
  }}>Réinitialiser</button>

<h1> AVEC Proxy  appel des fonction</h1>

<h3>{proxyCount.value}</h3>
<button onclick={increment}>Incrémenter</button>
<button onclick={reset}>Réinitialiser</button>


  <!-- <h1> Fonction exporter </h1> -->


  
<!-- Enfant.... -->

<!-- <script lang="ts">
	import { getContext } from 'svelte';

	let counter = getContext<{
		value: number;
		increment: () => void;
		reset: () => void;
	}>('count');
</script>

<div class="wrapper">
	<h2>{counter.value}</h2>
	<button on:click={counter.increment}>Increment</button>
	<button on:click={counter.reset}>Reset</button>
</div>

<style>
	.wrapper {
		text-align: center;
		background-color: #111;
		padding: 20px;
		border-radius: 10px;
		margin-bottom: 10px;
	}
	h2 {
		font-size: 60px;
		margin: 0 0 20px;
		line-height: 1;
	}
</style> -->



<!-- ================================ -->
<!-- Affichage avec les store -->
 
<script lang="ts">
    import { getContext } from 'svelte';
  
    // Définir le type du contexte attendu Pour eviter que celq ne soit souligner en rouge
    interface CounterContext {
      value: { subscribe: (run: (value: number) => void) => () => void };  // Le store
      increment: () => void;
      reset: () => void;
    }
  
    // Récupère le contexte avec le type défini
    const { value, increment, reset } = getContext<CounterContext>('count');
    console.log(value);  // Pour voir si le store est bien récupéré


    //recuperation cas des proxy  1

    // Récupère le contexte avec le type défini
    // let counter = getContext<{
    //   count:{value:number};
    //   increment:()=>void;
    //   reste:()=>void;
    // }>('count');
    // console.log(counter.count.value); 
    
    
    //recuperation cas des proxy  2


    let counter = getContext<{
      value:number;
      increment:()=>void;
      reste:()=>void;
    }>('count');

    console.log(counter.value);  


  </script>
  
  <div class="wrapper">
    <!-- Affichage Store -->
     <!-- il faut commenter le h2 ici car sinon svelte va essayer d'afficher or jai commenter son code dou erro $value (syntaxe de store) -->
    
     <h1>Store Pour la Reactivité</h1>
     <!-- <h2>{$value}</h2> --> 
    <button onclick={increment}>Incrémenter</button>
    <button onclick={reset}>Réinitialiser</button>
  </div>

  <div class="wrapper">
    <!-- Affichage  Proxy 1 -->
     <!-- <h1>Proxy 1 Pour la Reactivité</h1> -->
    <!-- <h2>{counter.count.value}</h2> -->
    <!-- <button onclick={increment}>Incrémenter</button> -->
    <!-- <button onclick={reset}>Réinitialiser</button> -->
  </div>

  <div class="wrapper">
    <!-- Affichage  Proxy 1 -->
     <h1>Proxy 2 Pour la Reactivité</h1>
    <h2>{counter.value}</h2>
    <button onclick={increment}>Incrémenter</button>
    <button onclick={reset}>Réinitialiser</button>
  </div>
  
  <style>
    .wrapper {
      text-align: center;
      background-color: #111;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 10px;
    }
  
    h2 {
      font-size: 60px;
      margin: 0 0 20px;
      line-height: 1;
    }
  </style>
  
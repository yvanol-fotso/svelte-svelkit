<!-- Parent.... -->

<!-- <script lang="ts">
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  // let { enfant }: { enfant: Snippet } = $props(); //vielle syntaxe
  import type { Component } from 'svelte';

  export let enfant: Component;

  const counter = {
      value: 0,
      increment: () => counter.value++,
      reset: () => counter.value = 0
  };

  setContext('count', counter);
</script> -->

<!-- cette synatxe avec render met l'erreur et dit n'existe pas  -->
<!-- {@render enfant()} --> 
<!-- <svelte:component this={enfant} /> -->

<!-- Ce composant va afficher et interagir avec le compteur -->
<!-- <slot /> -->





<!-- =================================================== -->
<!-- je le rend reactif avec le store Writable -->

<!-- <script lang="ts">
  import {setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Component } from 'svelte';

  export let enfant: Component;


  const counterValue = writable(0);

  const counter = {
    increment: () => counterValue.update(n => n + 1),
    reset: () => counterValue.set(0),
  };

 
  setContext('count', { value: counterValue, increment: counter.increment, reset: counter.reset });
</script>

<svelte:component this={enfant} /> -->


<!-- ============================================ -->
 <!-- affichage avec proxy  -->

 <script lang="ts">
	import { setContext } from 'svelte';
	import type { Component, Snippet } from 'svelte';

	// const { enfant } = $props<{ enfant: Component }>(); //Alternative un Snippet c'est egalement un Composant
	const { enfant } = $props<{ enfant: Snippet }>();


	// let count = $state({ value: 0 });

	// function increment() {
	// 	count.value += 1;
	// }

	// function reset() {
	// 	count.value = 0;
	// }
  // setContext<{
  //   count:{value:number};
  //   increment:()=>void;
  //   reset:() =>void;
  // }>('count',{
  //   count,
  //   increment,
  //   reset
  // });



 // =================== 2 =======================
 //ou avec un get value(){retunr count; } et remplcaer count .value

 let count = $state(0);

  setContext<{
    value:number;
    increment:()=>void;
    reset:() =>void;
  }>('count',{
    get value(){
      return count;
    },
    increment:() =>{
      count +=1;
    },
    reset:() =>{
      count = 0;
    }
  });


</script>

<!-- les anciennes methodes -->
<!-- <svelte:component this={enfant} /> -->

<!-- neouvelle -->
 <!-- Utilisation directe du composant -->
<!-- {enfant} -->

<!-- besoin de passer des props -->
{@render enfant({})}



<!-- =================== avec getter et setter manuelle  ====== -->

<!-- <script>
  let _count = 0;
  setContext('counter', {
    get count() { return _count; },
    increment: () => _count++,
    reset: () => _count = 0
  });
</script> -->


<!-- et dans le code enfant donc ContextApi.svelte -->

<!-- <script>
  const counter = getContext('counter');
</script>
<button onclick={counter.increment}>
  {counter.count} 
</button> -->



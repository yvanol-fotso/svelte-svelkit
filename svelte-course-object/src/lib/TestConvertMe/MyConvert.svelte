<script lang="ts">
  import tauxfictif from '$lib/utils/device'
  import { untrack } from 'svelte';

  let valeurBase: number|undefined= $state(1);
  let valeurBaseCourante = $state('xaf');
  let tauxEchange = $derived(tauxfictif[valeurBaseCourante]);
  let valeurCibleActuel = $state('xof');

   // good Marche 

  // let cibleValeur = $derived(
	// 	valeurBase && tauxEchange[valeurCibleActuel] && valeurBase * tauxEchange[valeurCibleActuel]
	// );

  // let cibleValeur: number|undefined = $state(); //syntaxe avec les $effect

  let cibleValeur: number|undefined = $state(calculerCible()); //syntaxe avec les callback

  
  // Maintenant la problematique avec svelte c'est quoi on peu etre tenter d'ecrire  / edit un derive value ce qui n'est posibble ?
  // si on veut calculer ou que a chaque changement du target sans le $derive on use les effect
  
  
  // $inspect(tauxEchange); //debug

  // $effect(() => {
	// 	cibleValeur = valeurBase && tauxEchange[valeurCibleActuel] && valeurBase * tauxEchange[valeurCibleActuel];
	// 	console.log(
	// 		'Calcule valeur cible',
	// 		untrack(() => cibleValeur)
	// 	);
	// });

	// $effect(() => {
	// 	valeurBase = cibleValeur && tauxEchange[valeurCibleActuel] && cibleValeur / tauxEchange[valeurCibleActuel];
	// 	console.log(
	// 		'Calculating Base',
	// 		untrack(() => valeurBase)
	// 	);
	// });


  //pas un ebonne approche avec les $effect car on a pas la main mise si un une change l'autre $effect change

  //on use les callback  retirer les bind

  function  calculerCible() {
    return valeurBase && tauxEchange[valeurCibleActuel] && valeurBase * tauxEchange[valeurCibleActuel]
  }
   
  function  calculerValeurBase() {
    return cibleValeur && tauxEchange[valeurCibleActuel] && cibleValeur / tauxEchange[valeurCibleActuel]
  }


  function  updateValeurBase(valeur : number) {
    valeurBase = valeur;
    cibleValeur = calculerCible();
    console.log('calul mise a jour valeur cible', cibleValeur);
  }

  
  function  updateCibleValeur(valeur : number) {
    cibleValeur = valeur;
    valeurBase = calculerValeurBase();
    console.log('calul mise a jour valeur de base', valeurBase);



  }


</script>

<div class="wrapper">
  
  <div class="base">

    <!-- marche avec les $effect -->
    <!-- <input
      type="number"
      bind:value={() => valeurBase, 
      (newVal) => {
        if (newVal && newVal < 0) {
          valeurBase = 1;
          return;
        }
        valeurBase = newVal;
      }}
    /> -->

    <!-- marche avec les callback -->
     <!-- la syntaxte +e.currentTarget.value recupere  La valeur actuelle de l’élément HTML qui a déclenché l’événement. + est un raccourci pour convertir une chaîne de caractères (string) en nombre (number). -->
    <input 
    type="number"
    value={valeurBase}
    oninput={(e)=>{updateValeurBase(+e.currentTarget.value)}}>
    <select bind:value={valeurBaseCourante}>
      <option value="xaf">Franc CFA (Afrique Centrale)</option>
      <option value="xof">Franc CFA (Afrique de l'Ouest)</option>
      <option value="ngn">Naira nigérian</option>
      <option value="zar">Rand sud-africain</option>
    </select>
  </div>

  <div class="target">
    <!-- marche avec les $effect  -->
    <!-- <input bind:value={cibleValeur} type="number" /> -->

    <!-- marche avec les callback -->
    <input 
    type="number"
    value={cibleValeur}
    oninput={(e)=>{updateCibleValeur(+e.currentTarget.value)}}>
    <select bind:value={valeurCibleActuel}>
      <option value="xof">Franc CFA (Afrique de l'Ouest)</option>
      <option value="ngn">Naira nigérian</option>
      <option value="zar">Rand sud-africain</option>
    </select>
  </div>
</div>

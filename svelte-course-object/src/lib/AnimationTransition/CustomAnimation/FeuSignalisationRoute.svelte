<!-- <script lang="ts">
    import { customCssTransition } from './CustomCssTransition';
    import { customJsTransition } from './CustomJsTransition';
    import { myFlipAnimation } from './MyFlipAnimation';
  
    let couleur = 'vert';
    let couleurs = ['vert', 'orange', 'rouge'];
    let index = 0;
  
    function suivant() {
      index = (index + 1) % couleurs.length;
      couleur = couleurs[index];
    }
  </script>
  
  <style>
    .feu {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: auto;
      transition: background-color 1s ease;
    }
    .vert {
      background-color: green;
    }
    .orange {
      background-color: orange;
    }
    .rouge {
      background-color: red;
    }
  </style>
  
  <button on:click={suivant}>Changer</button> -->

  <!-- L'erreur se produit parce que vous tentez d'utiliser plusieurs directives transition: sur un même élément dans Svelte. 
  Svelte ne permet pas cela. Vous devez combiner toutes vos transitions en une seule. -->
  
  <!-- <div
    class="feu {couleur}"
    transition:customJsTransition={{ duration: 800, spin: 2 }}
    transition:customCssTransition={{ duration: 1000 }}
    transition:myFlipAnimation={{ duration: 500 }}
  /> -->
  

  <script lang="ts">
    import { combinedTransition } from './combinedTransition'; // Importer la transition combinée
    import { customCssTransition } from './CustomCssTransition';
    import { customJsTransition } from './CustomJsTransition';
    import { myFlipAnimation } from './MyFlipAnimation';
  
    let couleur = 'vert';
    let couleurs = ['vert', 'orange', 'rouge'];
    let index = 0;
  
    function suivant() {
      index = (index + 1) % couleurs.length;
      couleur = couleurs[index];
    }
  </script>
  
  <style>
    .feu {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: auto;
      transition: background-color 1s ease;
    }
    .vert {
      background-color: green;
    }
    .orange {
      background-color: orange;
    }
    .rouge {
      background-color: red;
    }
  </style>
  
  <button onclick={suivant}>Changer</button>
  
<!-- Utiliser la transition combinée -->
<div
  class="feu {couleur}"
  transition:combinedTransition={{ duration: 800, spin: 2, durationCss: 1000, durationFlip: 500 }}
></div>

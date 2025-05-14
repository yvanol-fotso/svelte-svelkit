<!-- Documentation ne marche pas  -->

<!-- <script lang="ts">
    import { browser } from '$app/environment'; // Vérifie si on est dans un environnement côté client
    import { createSubscriber } from 'svelte/reactivity';
    import { on } from 'svelte/events';
  
    // Classe MediaQuery pour gérer les changements de la media query
    export class MediaQuery {
      #query;
      #subscribe;
  
      constructor(query: string) {
        this.#query = window.matchMedia(`(${query})`);
  
        // Utilisation de createSubscriber pour écouter les changements
        this.#subscribe = createSubscriber((update) => {
          const off = on(this.#query, 'change', () => update(this.#query.matches));
  
          // Retourner une fonction pour se désabonner lorsque tous les effets sont détruits
          return () => off();
        });
      }
  
      // Méthode pour obtenir l'état actuel de la media query
      get current() {
        this.#subscribe();
        return this.#query.matches;
      }
    }
  
    let isWideScreen = false; // Variable pour suivre l'état de la media query
    let mediaQuery: MediaQuery;
  
    // Vérification si on est dans un environnement côté client
    if (browser) {
      console.log("Côté client, abonnement à la media query");
  
      // Créer une instance de MediaQuery avec la query 'min-width: 600px'
      mediaQuery = new MediaQuery('min-width: 600px');
      console.log("État initial de la media query : ", mediaQuery.current);
  
      // Écouter les changements de la media query
      mediaQuery.#subscribe((matches) => {
        console.log("Media query a changé, état actuel : ", matches);
        isWideScreen = matches; // Mettre à jour la variable isWideScreen
        console.log("isWideScreen mis à jour : ", isWideScreen);
      });
    }
  </script>
  
  <style>
    .wide-screen {
      color: green;
    }
  
    .small-screen {
      color: red;
    }
  </style>
  
  <div class={isWideScreen ? 'wide-screen' : 'small-screen'}>
    {#if isWideScreen}
      <p>Vous êtes sur un écran large (plus de 600px) !</p>
    {:else}
      <p>Vous êtes sur un écran plus petit !</p>
    {/if}
  </div>
   -->



<script lang="ts">
    import { browser } from '$app/environment'; // Vérifier l'environnement côté client
  
    // Classe MediaQuery pour gérer les changements de la media query
    export class MediaQuery {
      #query;
  
      constructor(query: string) {
        this.#query = window.matchMedia(`(${query})`);
      }
  
      // Méthode pour obtenir l'état actuel de la media query
      get current() {
        return this.#query.matches;
      }
  
      // Méthode pour écouter les changements de la media query
      onChange(callback: (matches: boolean) => void) {
        this.#query.addEventListener('change', (e) => callback(e.matches));
      }
    }
  
    let isWideScreen = false; // Variable pour suivre l'état de la media query
    let mediaQuery: MediaQuery;
  
    // Vérification si l'on est dans un environnement côté client
    if (browser) {
      console.log("Côté client, abonnement à la media query");
  
      // Créer une instance de MediaQuery avec la query 'min-width: 600px'
      mediaQuery = new MediaQuery('min-width: 600px');
      console.log("État initial de la media query : ", mediaQuery.current);
  
      // Écouter les changements de la media query
      mediaQuery.onChange((matches) => {
        console.log("Media query a changé, état actuel : ", matches);
        isWideScreen = matches; // Mettre à jour la variable isWideScreen
        console.log("isWideScreen mis à jour : ", isWideScreen);
      });
    }
  </script>
  
  <style>
    .wide-screen {
      color: green;
    }
  
    .small-screen {
      color: red;
    }
  </style>
  
  <div class={isWideScreen ? 'wide-screen' : 'small-screen'}>
    {#if isWideScreen}
      <p>Vous êtes sur un écran large (plus de 600px) !</p>
    {:else}
      <p>Vous êtes sur un écran plus petit !</p>
    {/if}
  </div>
  
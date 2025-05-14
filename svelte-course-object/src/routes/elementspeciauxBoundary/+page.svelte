<script lang="ts">
    import SpecialElement from '$lib/SpecialElementBoundarie/SpecialElement.svelte';
    import BuggyComponent from '$lib/SpecialElementBoundarie/BuggyComponent.svelte';
	import type { Component } from 'svelte';
	

 
    let hasError = false;
    let showBuggy = false;
    // let buggyComponent; // non type va me generer les erreur 
    let buggyComponent: Component | null = null;
  
    function loadComponent() {
      try {
        buggyComponent = BuggyComponent; // je stocke le composant dans une variable
        showBuggy = true;
      } catch (e) {
        hasError = true;
      }
    }
  </script>
  
  <main>
    <h1>Démonstration : Éléments Spéciaux & Erreurs</h1>
  
    <SpecialElement />
  
    <hr />
  
    <h3>Gestion d'erreur personnalisée :</h3>
  
    <button on:click={loadComponent}>Charger le composant instable</button>
  
    {#if hasError}
      <p style="color: red;">Une erreur est survenue dans le composant enfant.</p>
    {:else if showBuggy}
      <svelte:component this={buggyComponent} />
    {/if}
  </main>
  

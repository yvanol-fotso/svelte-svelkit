<script lang="ts">
    import { fly,fade } from 'svelte/transition';
  
    let compteur = 0;
    let vitesse = 1000;
    // let intervalId: NodeJS.Timeout;
    let intervalId: ReturnType<typeof setInterval>;
  
    function demarrer() {
      arreter();
      intervalId = setInterval(() => {
        compteur += 1;
      }, vitesse);
    }
  
    function arreter() {
      clearInterval(intervalId);
    }
  
    function accelerer() {
      if (vitesse > 100) {
        vitesse -= 200;
        demarrer();
      }
    }
  
    function ralentir() {
      vitesse += 200;
      demarrer();
    }
  
    function reinitialiser() {
      arreter();
      compteur = 0;
    }
  </script>
  
  <style>
    .compteur {
      font-size: 2rem;
      font-weight: bold;
      margin: 1rem 0;
    }
  
    button {
      margin-right: 0.5rem;
    }
  </style>

  <!-- Marche mais @key n'est pas une syntaxe propre a svelte mais au animation.. -->
  <!-- <div class="compteur">
    {@key compteur}
      <div in:fly={{ y: -20, duration: 300 }} out:fly={{ y: 20, duration: 300 }}>
        {compteur}
      </div>
  </div> -->


  <!-- marche mais recreait l'element -->
  <!-- <div class="compteur">
    {#key compteur}
      <div in:fly={{ y: -20, duration: 300 }} out:fly={{ y: 20, duration: 300 }}>
        {compteur}
      </div>        
    {/key}  
  </div> -->

  <div class="compteur">
    <div transition:fade={{ duration: 200 }}>
      {compteur}
    </div>
  </div>
  
  <div>
    <button on:click={demarrer}>▶️ Démarrer</button>
    <button on:click={arreter}>⏸️ Pause</button>
    <button on:click={accelerer}>⏩ Accélérer</button>
    <button on:click={ralentir}>⏪ Ralentir</button>
    <button on:click={reinitialiser}>🔁 Réinitialiser</button>
  </div>
  
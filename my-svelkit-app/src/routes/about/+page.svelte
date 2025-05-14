<script>
  import { goto } from '$app/navigation';
  let name = 'yvan';
</script>

<h1>About {name}</h1>
<p>Bienvenue sur notre page "À propos" personnalisée</p>

<!-- Bouton utilisant le layout parent -->
<button on:click={() => goto('/')}>
  Retour à l'accueil (version SvelteKit)
</button>

<style>
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  button {
    background: white;
    color: #9C27B0;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
<script lang="ts">
import { afterNavigate, preloadData } from '$app/navigation';
import { IconButton } from '$components';
import { page } from '$app/stores';
import { ChevronLeft, ChevronRight } from 'lucide-svelte';

// Stocker l'historique de navigation
let backStack: string[] = []; // Tableau pour stocker les chemins des routes précédentes
let forwardStack: string[] = []; // Tableau pour stocker les chemins des routes suivantes
let navClicked = false; // Indique si la navigation a été déclenchée par les boutons précédent/suivant

// Gérer les événements de navigation
afterNavigate(({ from, to }) => {
  // Ignorer si la navigation provient de l'extérieur de l'application
  if (!from) return;

  // Ne pas restocker les routes lors de l'utilisation des boutons précédent/suivant
  if (navClicked) {
    navClicked = false;
    return;
  }

  // Stocker la route précédente dans la pile arrière et vider la pile avant
  backStack = [...backStack, from.url.pathname];
  forwardStack = [];
});
</script>

<!-- Bouton Précédent -->
<IconButton
  on:mouseover={() => {
    // Précharger la page précédente au survol si la pile arrière existe
    if (backStack.length === 0) return;
    const prevPage = backStack[backStack.length - 1];
    preloadData(prevPage).catch((error) => {
      console.error('Échec du préchargement de la page précédente :', error);
    });
  }}
  on:click={async () => {
    if (backStack.length === 0) return;
    navClicked = true;
    const currPage = $page.url.pathname;
    try {
      history.back();
      forwardStack = [...forwardStack, currPage];
      backStack = backStack.slice(0, -1);
    } catch (error) {
      console.error('Échec de la navigation arrière :', error);
      navClicked = false;
    }
  }}
  label="Retour"
  disabled={backStack.length === 0}
  icon={ChevronLeft}
  class="nav-button"
/>

<!-- Bouton Suivant -->
<IconButton
  on:mouseover={() => {
    // Précharger la page suivante au survol si la pile avant existe
    if (forwardStack.length === 0) return;
    const forwardPage = forwardStack[forwardStack.length - 1];
    preloadData(forwardPage).catch((error) => {
      console.error('Échec du préchargement de la page suivante :', error);
    });
  }}
  on:click={async () => {
    if (forwardStack.length === 0) return;
    navClicked = true;
    const currPage = $page.url.pathname;
    try {
      history.forward();
      backStack = [...backStack, currPage];
      forwardStack = forwardStack.slice(0, -1);
    } catch (error) {
      console.error('Échec de la navigation avant :', error);
      navClicked = false;
    }
  }}
  label="Suivant"
  disabled={forwardStack.length === 0}
  icon={ChevronRight}
  class="nav-button"
/>


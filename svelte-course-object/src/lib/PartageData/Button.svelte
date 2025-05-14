<script module lang="ts">
	let buttonCount = 0;

	// Fonction partagée entre instances
	export function getButtonsCount() {
		return buttonCount;
	}
</script>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Augmente/diminue le compteur à chaque instance
	onMount(() => {
		buttonCount += 1;
	});

	onDestroy(() => {
		buttonCount -= 1;
	});

	//export let children: any; // Permet le slot de contenu entre <Button>...</Button>
</script>

<button class="my-button">
    <!-- Tu peux directement mettre <slot /> pour afficher le contenu interne au composant. -->
	<slot />
</button>

<style>
	.my-button {
		background-color: #ff3e00;
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 4px;
		cursor: pointer;
		font-weight: bold;
		margin: 5px;
	}
</style>



<!-- Le secret est dans <script module></script>

buttonCount est une variable partagée (comme une "boîte" posée en dehors du monde, que tous les boutons peuvent voir).

getButtonsCount() est une fonction qu'on peut appeler de l'extérieur (par exemple depuis App.svelte) pour demander : "Combien de boutons sont là maintenant ?

Quand un bouton apparaît à l’écran, onMount() est déclenché → on ajoute 1 au compteur.

Quand un bouton disparaît, onDestroy() est déclenché → on retire 1 du compteur.

C’est comme si chaque bouton disait :

"Je viens d’arriver ! J’ajoute +1"

"Je m’en vais ! Je retire -1

Quand tu cliques ce bouton, il appelle la fonction getButtonsCount(), et elle renvoie le nombre total de <Button> actifs à l’écran (grâce au compteur partagé).
 -->

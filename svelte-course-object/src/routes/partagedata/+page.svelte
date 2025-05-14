<script lang="ts">
	import Button, { getButtonsCount } from '$lib/PartageData/Button.svelte';
	let showExtra = false;
</script>

<!-- Bouton pour afficher le nombre de composants Button -->
<button on:click={() => alert(getButtonsCount())}>
	<!-- Combien de <Button /> ? -->
    Combien de<strong>boutons</strong> ?
</button>

<!-- Checkbox pour afficher/masquer un <Button> -->
<input type="checkbox" bind:checked={showExtra} /> Afficher +1 bouton

<Button>Un</Button>
<Button>Deux</Button>

{#if showExtra}
	<Button>Trois</Button>
{/if}


<!-- Ce code montre comment, dans Svelte 5, plusieurs instances 
d’un composant partagent une même donnée. Ici, tous les <Button> 
modifient un compteur global défini dans <script module>. Quand un 
bouton s’affiche, il incrémente le compteur ; quand il est retiré, 
il le décrémente. Et on peut interroger ce compteur depuis n’importe 
où pour savoir combien de boutons sont actifs à l’écran.

Par exemple, ici je compte combien de boutons sont affichés à 
l’écran en temps réel, simplement en incrémentant une variable à 
chaque onMount et la décrémentant à chaque onDestroy. 
Et ce compteur est accessible partout avec une fonction exportée. -->
<script lang="ts">
	import CompteurEnfant from '$lib/PartageData/CompteurGlobal/CompteurEnfant.svelte';

</script>


<h1>Compteurs synchronisés</h1>

<p>Chaque composant <code>&lt;Compteur /&gt;</code> partage le même nombre.</p>

<CompteurEnfant />
<CompteurEnfant />
<CompteurEnfant />



<!-- Dans cet exemple, je montre comment plusieurs composants Compteur peuvent partager une même donnée grâce à la fonctionnalité <script module> de Svelte.

Ici, j’ai défini une variable globale sharedCount à l’intérieur du composant Compteur.svelte, qui sert de source de vérité partagée.

Chaque fois qu’un utilisateur clique sur un bouton + ou - dans une instance, la valeur globale est mise à jour. Et grâce à un système d’abonnement personnalisé (subscribe et notify), toutes les autres instances sont automatiquement notifiées et se mettent à jour en temps réel.

Ce mécanisme permet donc de synchroniser plusieurs instances sans utiliser de store, ni passer de props, ni utiliser de context.

Le résultat est un affichage cohérent entre toutes les instances, avec une architecture simple, modulaire et réactive. -->



<!-- Dans mon composant Compteur, j’ai mis en place un système d’abonnement maison, inspiré de ce que font les stores de Svelte.

La fonction subscribe(callback) permet d’enregistrer des fonctions à appeler quand la valeur du compteur change.

La fonction notify() se charge de prévenir tous les abonnés en appelant leurs callbacks.

Grâce à ça, chaque instance du composant CompteurEnfant peut s’abonner à l’évolution du compteur global, et se mettre à jour automatiquement dès que la valeur change.

C’est une sorte de mini-pub/sub (publish-subscribe) qu’on a codé nous-mêmes. -->
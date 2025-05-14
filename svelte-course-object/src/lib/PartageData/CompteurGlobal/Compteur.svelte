<script module lang="ts">
	
	let sharedCount = 0;

	export function getCount() {
		return sharedCount;
	}

	export function increment() {
		sharedCount += 1;
		notify();
	}

	export function decrement() {
		sharedCount -= 1;
		notify();
	}

	// Abonnés à notifier
	const subscribers = new Set<() => void>();

	export function subscribe(callback: () => void) {
		subscribers.add(callback);
		return () => subscribers.delete(callback);
	}

	function notify() {
		for (const fn of subscribers) fn();
	}
</script>


<!-- Dans mon composant Compteur, j’ai mis en place un système d’abonnement maison, inspiré de ce que font les stores de Svelte.

La fonction subscribe(callback) permet d’enregistrer des fonctions à appeler quand la valeur du compteur change.

La fonction notify() se charge de prévenir tous les abonnés en appelant leurs callbacks.

Grâce à ça, chaque instance du composant CompteurEnfant peut s’abonner à l’évolution du compteur global, et se mettre à jour automatiquement dès que la valeur change.

C’est une sorte de mini-pub/sub (publish-subscribe) qu’on a codé nous-mêmes. -->

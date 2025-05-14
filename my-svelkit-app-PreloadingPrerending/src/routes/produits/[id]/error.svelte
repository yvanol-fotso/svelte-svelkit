<script>
	export let error; // ou let data car par convention les load retourne les = data
</script>

<h1>Erreur {error?.code || 500}</h1>
<p>{error?.message || 'Une erreur est survenue lors de l’accès au produit.'}</p>






<!-- Dans SvelteKit, la gestion des erreurs repose sur deux grands axes : les erreurs qu’on attend et qu’on peut anticiper, comme un article non trouvé, et celles qui sont imprévues comme une panne serveur.
On utilise le composant +error.svelte pour afficher un message à l’utilisateur. Ce composant peut être global, ou spécifique à une route comme /article/[id].
Si l’utilisateur saisit un identifiant d’article inexistant, la fonction load() peut throw une erreur avec un code 404, que notre interface d’erreur personnalisée prendra en charge.
Enfin, toutes les erreurs peuvent être interceptées globalement dans handleError() depuis hooks.server.ts, ce qui permet de logguer ou de tracer ces anomalies pour l’analyse. -->


<!-- Gestion des Erreurs dans les Applications SvelteKit
Dans le développement d'une application web avec SvelteKit, il est inévitable de rencontrer des erreurs. Ces erreurs peuvent être de deux types principaux : attendues et inattendues.

Une erreur attendue pourrait être une ressource que l'utilisateur demande et qui n'existe pas, ou des données de formulaire invalides soumises par l'utilisateur. Ces situations sont prévisibles dans le flux normal de l'application.

À l'opposé, une erreur inattendue survient de manière impromptue, comme un problème de connexion au serveur, un bug dans notre logique de code, ou une réponse inattendue d'une API externe.

Pour offrir une expérience utilisateur optimale et maintenir la robustesse de notre application, SvelteKit fournit des mécanismes puissants pour gérer ces deux types d'erreurs.

2. Composants d’Erreur Dédiés : Une Expérience Utilisateur Contextuelle
Pour intercepter et afficher ces erreurs rencontrées, SvelteKit nous permet de créer des composants d'erreur dédiés.

Pour chaque route de notre application, il est possible de créer un fichier +error.svelte. Ce composant d'erreur local à cette route nous donne la flexibilité de fournir un retour visuel clair et personnalisé à l'utilisateur, en fonction du contexte spécifique où l'erreur s'est produite.

De plus, un fichier src/error.svelte situé à la racine de notre dossier src agit comme un composant d'erreur global. Il intercepte toutes les erreurs qui n'ont pas été gérées par un composant d'erreur local, assurant ainsi une gestion des erreurs à l'échelle de l'application.

3. handleError() : Centralisation et Personnalisation des Logs
Pour les erreurs plus inattendues qui pourraient survenir au sein de notre application, SvelteKit met à notre disposition le hook handleError(). Ce hook, que l'on implémente dans nos fichiers hooks.server.ts et hooks.client.ts, nous offre un point centralisé pour intercepter ces erreurs.

Grâce à handleError(), nous pouvons non seulement enregistrer (logger) ces erreurs pour le débogage et le suivi, mais aussi potentiellement modifier la réponse d'erreur par défaut avant qu'elle ne soit présentée à l'utilisateur.

4. Personnalisation des Interfaces d'Erreur via App.Error
SvelteKit nous donne également la possibilité de personnaliser la structure des informations d'erreur que nous manipulons dans notre application. En déclarant une interface pour App.Error dans notre fichier src/app.d.ts, nous pouvons définir précisément les types de données (comme des codes d'erreur spécifiques ou des détails supplémentaires) que nos erreurs peuvent contenir.

Cela permet d'avoir un typage plus précis et de faciliter l'accès à ces informations personnalisées dans nos composants d'erreur +error.svelte. -->
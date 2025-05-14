<script>
	import { page } from '$app/stores';
</script>

<h2>Search result for: {$page.url.searchParams.get('q')}</h2>



<!-- 
Dans certains cas, on utilise la méthode GET dans les formulaires.
Avec GET, les données sont envoyées directement dans l'URL, ce qui est pratique pour des recherches ou des filtres, car l'URL devient partageable.

Contrairement à POST, où les données restent cachées dans le corps de la requête, GET est moins sécurisé et donc à éviter pour des informations sensibles comme des mots de passe.

On privilégie GET pour des cas simples, non critiques, comme un moteur de recherche ou l'application de filtres sur une page catalogue. 


Pour illustrer l'utilisation des formulaires en GET, nous avons ajouté un petit formulaire directement dans le layout.
Il utilise la méthode GET et envoie les données vers la route /search.

Sur /search, un petit fichier +page.svelte récupère la valeur de la recherche via $page.url.searchParams.
Cela permet d'afficher dynamiquement ce que l'utilisateur a recherché.

L'intérêt de cette approche est double :

Premièrement, l'URL devient partageable : un utilisateur peut copier-coller l'URL pour retrouver sa recherche.

Deuxièmement, c’est plus rapide : il n'y a pas de traitement serveur lourd, juste une lecture de l'URL côté client.

Cela montre comment SvelteKit permet de faire des formulaires ultra-légers, tout en gardant une navigation fluide.  -->
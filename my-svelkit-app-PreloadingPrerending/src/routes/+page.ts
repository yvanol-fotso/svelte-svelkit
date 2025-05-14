export const prerender = true;




// Dans notre projet, on a mis en place concrètement le mécanisme de pré-rendering de SvelteKit.

// Premièrement, pour l'API /api/random-number, on a utilisé prerender = true. Cela signifie que, lors de l'exécution de la commande npm run build, SvelteKit appelle cette API, récupère la réponse, et génère un fichier statique avec cette valeur. Après le build, la réponse devient fixe et ne change plus, car c'est un fichier qui est directement servi au client, sans exécuter de code serveur.

// Ensuite, pour les pages dynamiques, par exemple /produits/[id], on a utilisé prerender = 'auto'. Cette option permet à SvelteKit de décider automatiquement s'il peut générer les pages statiques en fonction des routes connues au moment du build. Si toutes les valeurs possibles pour [id] sont accessibles ou indiquées, SvelteKit les génère ; sinon, il ignore celles qu'il ne connaît pas.

// À la racine du projet, dans +page.ts, on a aussi mis prerender = true. Cela indique que la page d'accueil doit être générée en statique, ce qui améliore les performances dès la première visite.

// Enfin, dans le fichier svelte.config.js, on a activé crawl: true et défini entries: ['*']. Grâce à crawl, SvelteKit parcourt automatiquement toutes les pages liées par des balises <a>, et entries: ['*'] lui demande d'inclure toutes les routes possibles dans le processus de génération statique.

// En résumé, lors du build, SvelteKit explore toutes les routes, appelle les endpoints ou les pages qui ont prerender = true ou auto, récupère les données nécessaires, et génère des fichiers statiques prêts à être servis directement sans repasser par le serveur





// Le pré-rendering dans SvelteKit permet de générer des pages statiques ultra rapides.
// Ces pages sont créées pendant le build, ce qui les rend très rapides à charger pour les utilisateurs

// Même pour des pages dynamiques, comme celles basées sur des paramètres [slug],
// on peut utiliser le pré-rendering.
// Mais attention : pour que cela fonctionne, il faut connaître à l'avance toutes les valeurs possibles du slug.

// De la même manière, si on veut pré-render des endpoints dynamiques,
// on doit aussi savoir toutes les routes disponibles au moment du build.
// Sinon, SvelteKit ne pourra pas générer les fichiers statiques correspondant

// Important : les fichiers statiques ne sont pas créés automatiquement.
// C’est uniquement en lançant la commande npm run build que les pages sont effectivement générées sur le disque

// On contrôle ce comportement de pré-rendering grâce à l'option prerender,
// qui peut être true, false, ou auto, directement dans les fichiers de route comme +page.server.ts ou +layout.server.ts

// Enfin, si on veut ajouter un peu de contenu dynamique dans une page statique,
// c’est possible seulement si ces données sont fixes à la génération,
// par exemple avec des fichiers .json ou .md locaux.
// Si les données viennent d’une API externe et changent tout le temps, alors on ne peut pas utiliser le pré-rendering directement

// Donc en résumé, SvelteKit offre beaucoup de flexibilité,
// mais pour profiter du pré-rendering, il faut toujours s'assurer que tout est connu et prêt à la compilation
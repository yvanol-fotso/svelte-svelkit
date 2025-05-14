<!-- =============================== Modification avec enhance pour optimise ========================= -->
 
<script lang="ts">
	import type { LayoutData } from './$types';
	
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';
	//import { applyAction, enhance, type SubmitFunction } from '$app/forms'; // Le SubmitFunction ME GENERE UN ERREUR ET JAI REGARDER LA DOC PAS BESOIN DE L'IMPORTER
	import { applyAction, enhance } from '$app/forms'; 
	import type { ActionData } from './login/$types';

	
	// Déclaration des variables exportées
	// export let data: LayoutData;


	//  sinon sa ne marche pas pourtant jai bien defini cela dans le fichier c'est juste pour tester cette notion de ordre de chargement app.d.ts
	export let data: LayoutData & {
        user?: { id: number; name: string };
        navLinks: { path: string; label: string }[];
    };

	// Variables pour l'état du formulaire
	let isLoading = false; // Indique si le formulaire est en cours de soumission
	let error = '';        // Message d'erreur général
	let form: ActionData;         // Données retournées par une soumission ratée (type ActionData)

	// Fonction pour améliorer la soumission du formulaire de login  //MAIS coe ke SubmitFunction genere l'erreur jai regarder la doc pas besoin de limporter

	// const handleLoginEnhance: SubmitFunction = () => {
	// 	isLoading = true;
	// 	error = '';
	// 	return ({ result } : { result: any }) => {
	// 		isLoading = false;
	// 		if (result.type === 'redirect') {
	// 			// Si succès avec redirection
	// 			form = null;
	// 			applyAction(result);
	// 		}
	// 		if (result.type === 'error') {
	// 			// Si erreur serveur
	// 			error = result.error.message;
	// 		}
	// 		if (result.type === 'failure') {
	// 			// Si validation échouée (ex: champs manquants)
	// 			form = result.data;
	// 		}
	// 	};
	// };


	// new sans SubmitFunction

	const handleLoginEnhance: Parameters<typeof enhance>[1] = () => {
    isLoading = true;
    error = '';
    return ({ result }: { result: any }) => {
        isLoading = false;
        if (result.type === 'redirect') {
            form = null;
            applyAction(result);
        }
        if (result.type === 'error') {
            error = result.error.message;
        }
        if (result.type === 'failure') {
            form = result.data;
        }
    };
};


console.log("5. +layout.svelte (racine) - Rendu");

</script>

<!-- Gestion du head : titre dynamique et description -->
<svelte:head>
	<title>Website Name{$page.data.title ? ` - ${$page.data.title}` : ''}</title>
	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

<!-- Affiche l'utilisateur connecté -->
{#if data.user}
	<p>Connecté en tant que {data.user.name}</p>
{/if}

<!-- Menu de navigation -->
<nav data-sveltekit-preload-data="hover">
	<a href="/">Accueil</a>
	<a href="/produit">Produits</a>
	{#if !data.user}
		<a href="/login" data-sveltekit-preload-data="off">Se connecter</a>
	{/if}
</nav>

<!-- Formulaire de déconnexion si l'utilisateur est connecté -->
{#if data.user}
	<form method="POST" action="/login?/logout&redirectTo={$page.url.pathname}" use:enhance>
		<button type="submit">Se déconnecter</button>
	</form>
{/if}



<!-- derniere partie les formulaires avec get  -->
<form method="GET" action="/search">
	<input name="q" />
</form>
<!-- fin d'essai -->

<!-- Slot pour insérer les pages enfants -->
<slot />

<!-- Formulaire de connexion si l'utilisateur n'est pas connecté ET qu'on n'est pas sur /login -->
{#if !data.user && $page.url.pathname !== '/login'}
	<!-- Affiche l'erreur générale -->
	{#if error}
		<p style="color: red">{error}</p>
	{/if}

	<form
		method="POST"
		action="/login?/login&redirectTo={$page.url.pathname}"
		use:enhance={handleLoginEnhance}
	>
		<label for="username">Nom d'utilisateur</label><br />
		<input id="username" name="username" placeholder="Username" value={form?.username || ''} />
		<br />
		{#if form?.usernameMissing}
			<p style="color:red">Le nom d'utilisateur est obligatoire</p>
		{/if}
		<br /><br />

		<label for="password">Mot de passe</label><br />
		<input id="password" name="password" placeholder="Password" type="password" />
		<br />
		{#if form?.passwordMissing}
			<p style="color:red">Le mot de passe est obligatoire</p>
		{/if}
		<br /><br />

		<button type="submit" disabled={isLoading}>
			{#if isLoading}Connexion...{/if}
			{#if !isLoading}Se connecter{/if}
		</button>
	</form>
{/if}

























<!-- =============================== Modification ancien ========================= -->


<!-- <script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';
	import { browser, building, dev, version } from '$app/environment';

	console.log({ browser, building, dev, version });

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Website Name{$page.data.title ? ` - ${$page.data.title}` : ''}</title>
	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

{#if data.user}
	<p>Logged in as {data.user.name}</p>
{/if}

<nav data-sveltekit-preload-data="hover">
	<a href="/">Home</a>
	<a href="/produit">Products</a>
	{#if !data.user}
		<a href="/login" data-sveltekit-preload-data="off">Login</a>
	{/if}
</nav>

// cour sur les form action et name action 

{#if data.user}
	<form method="POST" action="/login?/logout&redirectTo={$page.url.pathname}">
		<button type="submit">Logout</button>
	</form>
{/if}
<slot />

{#if !data.user && $page.url.pathname !== '/login'}
	<form method="POST" action="/login?/login&redirectTo={$page.url.pathname}">
		<label for="username">Username</label><br />
		<input id="username" name="username" placeholder="Username" />
		<br /><br />

		<label for="password">Password</label><br />
		<input id="password" name="password" placeholder="Password" type="password" />

		<br /><br />

		<button type="submit">Login</button>
	</form>
{/if} -->

<!-- fin cour -->







<!-- Le module $app/environment dans SvelteKit permet de détecter dans quel environnement notre code est exécuté.

Si la variable browser est vraie, cela veut dire qu'on est dans le navigateur.
Si dev est vraie, on est en mode développement, donc attention, certaines optimisations ne sont pas encore actives.
Si building est vraie, cela signifie que SvelteKit est en train de générer le site pendant le build.

Grâce à ces variables, on peut faire des choix intelligents : par exemple éviter de faire un fetch serveur depuis le navigateur, ou afficher des logs spéciaux seulement en développement.

Cela donne un meilleur contrôle et optimise le comportement de nos applications selon le contexte d'exécution." -->
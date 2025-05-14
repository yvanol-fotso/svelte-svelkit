<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance, applyAction } from '$app/forms';
	import { page } from '$app/stores'; // <- Correction ici !

	let isLoading = false;
	let error = '';
	export let form: ActionData;


    $: console.log($page.form, $page.status);
	$: console.log($page.data.form, $page.status); // je teste l'acces au data du formulaire
</script>

{#if error}
	<p style="color: red">{error}</p>
{/if}

<!-- //ceci ne marche pas chez moi  -->
<!-- use:enhance(({ form, data, action, cancel }) => { ... }) -->
<form
	method="POST"
	action="?/login"
	use:enhance={({ formData, action, cancel }) => { // <- Correction ici
		isLoading = true;

		// Retourner une fonction qui va manipuler les résultats du formulaire
		return ({ result, update }) => {
			isLoading = false;
			if (result.type === 'failure' || result.type === 'redirect') {
				applyAction(result); // Applique l'action
			}
			if (result.type === 'error') {
				error = result.error.message; // Affiche un message d'erreur
			}
		};
	}}
>
	<label for="username">Username</label><br />
	<input id="username" name="username" placeholder="Username" value={form?.username || ''} />
	<br />
	{#if form?.usernameMissing}
		<p style="color: red; margin-bottom: 0">Username is Required!</p>
	{/if}
	<br /><br />

	<label for="password">Password</label><br />
	<input id="password" name="password" placeholder="Password" type="password" />
	<br />
	{#if form?.passwordMissing}
		<p style="color: red; margin-bottom: 0">Password is Required!</p>
	{/if}

	<br /><br />

	<button type="submit" disabled={isLoading}>Login</button>
</form>





<!-- ============================================ Formulaire et valideation ====================== -->

<!-- Les Form action  Fini les les api pour valider les formualire on va creer un creer un ficheir +page.server.ts -->


<!-- <script lang="ts">
	import type { ActionData } from './$types';
	import { page } from '$app/stores';

	export let form: ActionData;
	$: console.log($page.form, $page.status);
</script> -->


<!-- Ne marche pas avec 2 plutot 1 dans +page.server.ts -->
<!-- 
{#if form?.success}
	<p style="color: green">Vous êtes maintenant connecté !</p>
{/if} -->


<!-- <form method="POST" action="?/login">
	<label for="username">Username</label><br />
	<input id="username" name="username" placeholder="Username" />
	<br />
	{#if form?.usernameMissing}
		<p style="color: red; margin-bottom: 0">Username is Required!</p>
	{/if}
	<br /><br />

	<label for="password">Password</label><br />
	<input id="password" name="password" placeholder="Password" type="password" />
	<br />
	{#if form?.passwordMissing}
		<p style="color: red; margin-bottom: 0">Password is Required!</p>
	{/if}

	<br /><br />

	<button type="submit">Login</button>
</form> -->





<!-- ================================================== Old -========================== -->

<!-- <script lang="ts">
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ username, password })
		});
		const resJSON = await response.json();
		if (response.ok) {
			goto('/');
		} else {
			alert(resJSON.message);
		}
	};
</script>

<form on:submit|preventDefault={login}>
	<label for="username">Username</label><br />
	<input bind:value={username} id="username" name="username" placeholder="Username" />
	<br /><br />

	<label for="password">Password</label><br />
	<input
		bind:value={password}
		id="password"
		name="password"
		placeholder="Password"
		type="password"
	/>

	<br /><br />

	<button type="submit">Login</button>
</form>


// Définir un cookie côté serveur
// Fichier : src/routes/api/login/+server.ts
cookies.set('token', 'token_value', { path: '/' });

// Supprimer un cookie
// Fichier : src/routes/api/logout/+server.ts
cookies.delete('token', { path: '/' });

// Lire un cookie côté serveur
// Fichier : src/routes/+layout.server.ts
const token = cookies.get('token'); -->

<!-- 
Dossier/Fichier	 Fonction
/routes/+layout.server.ts	Lit le cookie token à chaque requête. Partage user globalement.
/routes/+layout.svelte	Affiche le nom de l'utilisateur et les boutons Login/Logout.
/routes/login/+page.svelte	Formulaire de connexion (client).
/routes/login/+page.ts	Redirige si l’utilisateur est déjà connecté (user depuis parent()).
/routes/api/login/+server.ts	Endpoint POST pour valider login et poser le cookie token.
/routes/api/logout/+server.ts	Endpoint POST pour supprimer le cookie token. -->
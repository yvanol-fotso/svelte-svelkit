<script lang="ts">
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


<!-- 
// ✅ Définir un cookie côté serveur
// Fichier : src/routes/api/login/+server.ts
cookies.set('token', 'token_value', { path: '/' });

// ✅ Supprimer un cookie
// Fichier : src/routes/api/logout/+server.ts
cookies.delete('token', { path: '/' });

// ✅ Lire un cookie côté serveur
// Fichier : src/routes/+layout.server.ts
const token = cookies.get('token'); -->

<!-- 
📁 Dossier/Fichier	📌 Fonction
/routes/+layout.server.ts	Lit le cookie token à chaque requête. Partage user globalement.
/routes/+layout.svelte	Affiche le nom de l'utilisateur et les boutons Login/Logout.
/routes/login/+page.svelte	Formulaire de connexion (client).
/routes/login/+page.ts	Redirige si l’utilisateur est déjà connecté (user depuis parent()).
/routes/api/login/+server.ts	Endpoint POST pour valider login et poser le cookie token.
/routes/api/logout/+server.ts	Endpoint POST pour supprimer le cookie token. -->
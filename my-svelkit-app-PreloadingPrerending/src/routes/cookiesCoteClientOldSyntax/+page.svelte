<script>
    import { browser } from '$app/environment';

    // Définir le cookie côté client si on est dans le navigateur
    if (browser) {
        document.cookie = "locale=fr; path=/";
        // Afficher le cookie dans la console
        console.log("Cookie actuel :", document.cookie);
    }
</script>

<h1>Bienvenue</h1>
<p>Langue choisie : français (voir console pour le cookie)</p>
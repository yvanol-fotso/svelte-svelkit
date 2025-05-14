<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData & {
        user?: { id: number; name: string };
        products?: { id: number; name: string }[];
        product?: { id: number; name: string; price: number };
        status?: { message: string };
    };
</script>

<h1>Statut du Produit</h1>
{#if data.status}
    <p>Statut : {data.status.message}</p>
    {#if data.product}
        <p>Produit : {data.product.name}</p>
    {/if}
{:else}
    <p>Chargement du statut... (1s)</p>
{/if}
{#if data.product}
    <p>Étape précédente terminée : Détails du produit chargés.</p>
{:else}
    <p>En attente des détails... (8s)</p>
{/if}
{#if data.products}
    <p>Étape racine terminée : Liste des produits chargée.</p>
{:else}
    <p>En attente de la liste... (5s)</p>
{/if}
{#if data.user}
    <p>Utilisateur : {data.user.name}</p>
{/if}
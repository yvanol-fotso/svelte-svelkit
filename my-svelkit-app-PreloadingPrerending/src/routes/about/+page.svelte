<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    console.log("11. +page.svelte (/about) - Rendu");
</script>

<p>{data.pageMessage}</p>
<h2>Derniers Articles</h2>
{#if data.posts}
    <ul>
        {#each data.posts as post}
            <li>{post.title}</li>
        {/each}
    </ul>
{:else}
    <p>Chargement des articles...</p>
{/if}
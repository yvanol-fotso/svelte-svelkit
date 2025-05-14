<script lang="ts">
    import type { LayoutData } from './$types';
    export let data: LayoutData;

    console.log("10. +layout.svelte (/about) - Rendu");
</script>

<section>
    <h1>{data.aboutTitle}</h1>
    <p>{data.aboutInfo}</p>
    <slot />
</section>
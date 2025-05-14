<script lang="ts">
    import Context from '$lib/ContextAPI/Context.svelte';
    import ContextApi from '$lib/ContextAPI/ContextApi.svelte';
</script>

<Context enfant={ContextApi} />


<style>
    :global(body) {
        background-color: #222;
        color: #fff;
        margin: 0;
        padding: 0;
    }
</style>
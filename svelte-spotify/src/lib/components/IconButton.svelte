<script context="module" lang="ts">
    export interface IconButtonApi {
        getButton(): HTMLButtonElement;
    }
</script>

  
  <script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';
    import type { Icon } from 'lucide-svelte'; // Importat le type Icon depuis lucide-svelte

    export let icon: Icon;
    export let label: string;
    let button: HTMLButtonElement | null = null;

    export function getButton(): HTMLButtonElement {
        if (!button) throw new Error('Button not mounted');
        return button;
    }

</script>

<button bind:this={button} on:click on:mouseover on:focus on:keydown {...$$restProps}>
    <svelte:component
        this={icon}
        color="var(--text-color)"
        aria-hidden="true"
        size={24}
        strokeWidth={2}
    />
    <span class="visually-hidden">{label}</span>
</button>
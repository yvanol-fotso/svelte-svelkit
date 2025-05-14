<!-- <script context="module" lang="ts">
    // Interface pour exposer l'API du bouton
    // But : Permettre aux composants parents (ex. Navigation.svelte) d'accéder à l'élément <button>
    export interface IconButtonApi {
        getButton(): HTMLButtonElement;
    }
</script> -->


<script context="module" lang="ts">
    /**
     * @module IconButton
     * @description Ce composant fournit un bouton stylisé avec une icône Lucide.
     *
     * L'interface `IconButtonApi` définie dans ce module permet aux composants parents
     * d'obtenir une référence à l'élément `<button>` DOM interne de chaque instance
     * de `IconButton`. Ceci est crucial pour des interactions programmatiques telles que
     * la gestion du focus (par exemple, lors de l'ouverture et de la fermeture de menus
     * dans le composant `Navigation`).
     *
     * En plaçant cette interface dans le contexte `module`, elle est exportable et
     * peut être importée par d'autres composants pour typer les références aux
     * instances de `IconButton`, assurant ainsi une interaction sécurisée et
     * bien typée avec l'API du bouton.
     *
     * Chaque instance de `IconButton` peut avoir des icônes, des labels et des
     * gestionnaires d'événements différents, mais toutes partageront la même
     * interface d'API exposée via `IconButtonApi`.
     */
    export interface IconButtonApi {
      /**
       * Retourne l'élément `<button>` HTML de cette instance de `IconButton`.
       * Permet aux composants parents d'interagir directement avec l'élément DOM
       * si nécessaire (par exemple, pour définir le focus).
       */
      getButton(): HTMLButtonElement;
    }
  </script>
  
  <script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';
    import type { Icon } from 'lucide-svelte'; // Importer le type Icon depuis lucide-svelte

    // Prop pour l'icône, typée avec Icon depuis mon app.d.ts
    export let icon: Icon;
    // Prop pour le label accessible
    export let label: string;
    // Référence à l'élément <button>
    let button: HTMLButtonElement | null = null;

    // Méthode pour accéder au bouton
    // But : Permettre aux parents de focaliser ou manipuler le bouton
    export function getButton(): HTMLButtonElement {
        if (!button) throw new Error('Button not mounted');
        return button;
    }


    // //approche avec svelte 5 sans les interface ou modele context
    // import type { Home, Search, ListMusic, LucideIcon } from 'lucide-svelte';
    // import type { HTMLButtonAttributes } from 'svelte/elements';
    // import type { SvelteComponent } from 'svelte';

    // type LucideIconConstructor = new (...args: any) => SvelteComponent & LucideIcon;

    // interface $$Props extends HTMLButtonAttributes {
    //     icon: typeof Home | typeof Search | typeof ListMusic; // Limite aux icônes Home, Search et ListMusic
    //     label: string;
    // }

    // export let icon: typeof Home | typeof Search | typeof ListMusic;
    // export let label: string;

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
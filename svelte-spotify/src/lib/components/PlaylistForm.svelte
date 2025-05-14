<script lang="ts">
  import MicroModal from 'micromodal';
  import { Button } from '$components';
  import type { ActionData as AddActionData } from '../../routes/playlists/new/$types';
  import type { ActionData as EditActionData } from '../../routes/playlist/[id]/edit/$types';
  import { applyAction, enhance } from '$app/forms';
  import { toasts } from '$stores';
  import { onMount } from 'svelte';

  // export let form: AddActionData | EditActionData;
  export let form: AddActionData | EditActionData;
  export let userID: string | undefined = undefined;
  export let action: string | undefined = undefined;
  export let playlist:
    | SpotifyApi.PlaylistObjectFull
    | SpotifyApi.PlaylistObjectSimplified
    | undefined = undefined;
  export let onsuccess: (() => void) | undefined = undefined;
  export let onredirect: (() => void) | undefined = undefined;

  let isLoading = false;
  let description = (form?.description as string | null) || playlist?.description || '';

   // Initialiser MicroModal au chargement du composant
  onMount(() => {
    MicroModal.init({
      disableScroll: true,
      awaitCloseAnimation: true,
    });
  });

  function closeModal() {
    MicroModal.close('edit-playlist-modal');
  }
</script>

<div id="edit-playlist-modal" class="modal micromodal-slide" aria-hidden="true">
  <div class="modal__overlay" tabindex="-1" data-micromodal-close>
    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal__header">
        <h2 id="modal-title">{playlist ? 'Éditer' : 'Créer'} une playlist</h2>
        <button class="modal__close" aria-label="Fermer le modal" on:click={closeModal}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18" stroke-width="2" />
            <path d="M6 6L18 18" stroke-width="2" />
          </svg>
        </button>
      </div>
      <form
        method="POST"
        {action}
        use:enhance={() => {
          isLoading = true;
          return async ({ result }) => {
            await applyAction(result);
            isLoading = false;
            if (result.type === 'success') {
              toasts.success(playlist ? 'Playlist mise à jour !' : 'Playlist créée !');
              onsuccess?.();
              closeModal();
            }
            if (result.type === 'redirect') {
              onredirect?.();
              closeModal();
            }
            if (result.type === 'failure') {
              toasts.error('Échec de l’opération');
            }
          };
        }}
      >
        {#if userID}
          <input hidden name="userID" value={userID} />
        {/if}
        <div class="field" class:has-error={form?.nameError}>
          <label for="playlist-name">Nom *</label>
          <input
            type="text"
            id="playlist-name"
            name="name"
            placeholder="Nom de la playlist"
            value={form?.name || playlist?.name || ''}
          />
          {#if form?.nameError}
            <p class="error">{form?.nameError}</p>
          {/if}
        </div>
        <div class="field">
          <label for="playlist-description">Description</label>
          <textarea
            id="playlist-description"
            name="description"
            placeholder="Description de la playlist"
            rows="4"
            bind:value={description}
          ></textarea>
        </div>

        {#if form?.apiError}
          <p class="error">{form.apiError}</p>
        {/if}

        <div class="submit-button">
          <Button disabled={isLoading} element="button" type="submit">
            {playlist ? 'Enregistrer' : 'Créer'}
          </Button>
          <Button element="button" type="button" variant="outline" on:click={closeModal}>
            Annuler
          </Button>
        </div>
      </form>
    </div>
  </div>
</div>

<style lang="scss">
  .modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal__container {
    background: var(--background);
    padding: 24px;
    border-radius: 12px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .modal__close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 0.7;
    }
    svg {
      width: 20px;
      height: 20px;
      stroke: var(--text-color);
    }
  }
  form {
    .field {
      margin-bottom: 24px;
      &.has-error input {
        outline: 2px solid var(--error);
      }
      label {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 500;
        color: var(--text-color);
      }
      input,
      textarea {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid var(--border-color, #d1d1d1);
        border-radius: 8px;
        font-size: 14px;
        background: var(--input-background, #fff);
        color: var(--text-color);
        &:focus {
          outline: 2px solid var(--accent-color);
          border-color: transparent;
        }
      }
      textarea {
        resize: vertical;
        min-height: 80px;
      }
    }
    p.error {
      color: var(--error);
      font-size: 12px;
      margin-top: 8px;
    }
    .submit-button {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 32px;
    }
  }
</style>


<!-- Ma modal nes pas tres propre  -->

<!-- <script lang="ts">
  import MicroModal from 'micromodal';
  import { Button } from '$components';
  import type { ActionData as AddActionData } from '../../routes/playlists/new/$types';
  import type { ActionData as EditActionData } from '../../routes/playlist/[id]/edit/$types';
  import { applyAction, enhance } from '$app/forms';
  import { toasts } from '$stores';

  export let form: AddActionData | EditActionData;
  export let userID: string | undefined = undefined;
  export let action: string | undefined = undefined;
  export let playlist:
    | SpotifyApi.PlaylistObjectFull
    | SpotifyApi.PlaylistObjectSimplified
    | undefined = undefined;


	//pour les event je laisse le dispactcher
  export let onsuccess: (() => void) | undefined = undefined;
  export let onredirect: (() => void) | undefined = undefined;

  let isLoading = false;

  function closeModal() {
    MicroModal.close('edit-playlist-modal');
  }
</script>

<div id="edit-playlist-modal" class="modal micromodal-slide" aria-hidden="true">
  <div class="modal__overlay" tabindex="-1" data-micromodal-close>
    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <h2 id="modal-title">{playlist ? 'Éditer' : 'Créer'} une playlist</h2>
      <form
        method="POST"
        {action}
        use:enhance={() => {
          isLoading = true;
          return async ({ result }) => {
            await applyAction(result);
            isLoading = false;
            if (result.type === 'success') {
              toasts.success(playlist ? 'Playlist mise à jour !' : 'Playlist créée !');
              onsuccess?.();
              closeModal();
            }
            if (result.type === 'redirect') {
              onredirect?.();
              closeModal();
            }
            if (result.type === 'failure') {
              toasts.error('Échec de l’opération');
            }
          };
        }}
      >
        {#if userID}
          <input hidden name="userID" value={userID} />
        {/if}
        <div class="field" class:has-error={form?.nameError}>
          <label for="playlist-name">Nom *</label>
          <input
            type="text"
            id="playlist-name"
            name="name"
            placeholder="Nom de la playlist"
            value={form?.name || playlist?.name || ''}
          />
          {#if form?.nameError}
            <p class="error">{form?.nameError}</p>
          {/if}
        </div>
        <div class="field">
          <label for="playlist-description">Description</label>
          <input
            type="text"
            id="playlist-description"
            name="description"
            placeholder="Description de la playlist"
            value={form?.description || playlist?.description || ''}
          />
        </div>

        {#if form?.apiError}
          <p class="error">{form.apiError}</p>
        {/if}

        <div class="submit-button">
          <Button disabled={isLoading} element="button" type="submit">
            {playlist ? 'Enregistrer' : 'Créer'}
          </Button>
          <Button element="button" type="button" on:click={closeModal}>Annuler</Button>
        </div>
      </form>
    </div>
  </div>
</div>

<style lang="scss">
  .modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal__container {
    background: var(--background);
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
  }
  form {
    .field {
      margin-bottom: 20px;
      &.has-error input {
        outline: 2px solid var(--error);
      }
      label {
        display: inline-block;
        margin-bottom: 10px;
        font-size: functions.toRem(14);
      }
      input {
        width: 100%;
      }
    }
    p.error {
      color: var(--error);
      font-size: functions.toRem(14);
      margin: 10px 0 0;
    }
    .submit-button {
      text-align: right;
      margin-top: 40px;
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }
  }
</style> -->
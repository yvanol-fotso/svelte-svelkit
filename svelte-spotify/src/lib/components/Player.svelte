<script lang="ts">
  import { Pause, Play } from 'lucide-svelte';

  type Track = SpotifyApi.TrackObjectFull | SpotifyApi.TrackObjectSimplified;
  export let track: Track;
  export let onplay: ((detail: { track: Track }) => void) | undefined = undefined;
  export let onpause: ((detail: { track: Track }) => void) | undefined = undefined;

  let audio: HTMLAudioElement;
  let paused = true;

  // Pour suivre l'état global de l'audio
  let current: HTMLAudioElement | undefined;

  $: {
    console.log('Track reçu :', track);
    console.log('preview_url :', track.preview_url);
  }

  $: paused = audio?.paused ?? true;

  function onPlay() {
    console.log('Lecture du morceau :', track.name);
    if (current && current !== audio) {
      current.currentTime = 0;
      current.pause();
    }
    current = audio;
    if (onplay) {
      onplay({ track });
    }
  }

  function onPause() {
    console.log('Pause du morceau :', track.name);
    if (onpause) {
      onpause({ track });
    }
  }

  function togglePlay() {
    if (!track.preview_url) {
      console.warn('Aucune prévisualisation disponible.');
      return;
    }
    if (paused) {
      audio.play().catch((err) => {
        console.error('Erreur lors de la lecture :', err);
      });
    } else {
      audio.pause();
    }
  }
</script>

<div class="player">
  {#if track.preview_url}
    <audio
      on:play={onPlay}
      on:pause={onPause}
      bind:this={audio}
      src={track.preview_url}
      preload="none"
    >
      Votre navigateur ne supporte pas l'élément audio.
    </audio>
    <button
      aria-label={paused ? `Lire ${track.name}` : `Pause ${track.name}`}
      on:click={togglePlay}
    >
      {#if paused}
        <Play color="var(--text-color)" focusable="false" aria-hidden />
      {:else}
        <Pause color="var(--text-color)" focusable="false" aria-hidden />
      {/if}
    </button>
  {:else}
    <p style="color: red;">Aucune prévisualisation disponible pour ce morceau.</p>
  {/if}
</div>

<style lang="scss">
  .player {
    display: flex;
    align-items: center;
    gap: 10px;

    audio {
      display: none;

      :global(html.no-js) & {
        display: block;
        width: 100%;
      }
    }

    button {
      width: 24px;
      height: 24px;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;

      :global(svg) {
        fill: var(--text-color);
        width: 24px;
        height: 24px;
      }

      :global(html.no-js) & {
        display: none;
      }
    }

    p {
      margin: 0;
      font-size: 14px;
    }
  }
</style>









<!-- Marche mais ne joue pas la music -->

<!-- <script lang="ts" context="module">
  let current: HTMLAudioElement | undefined;
</script>

<script lang="ts">
  import { Pause, Play } from 'lucide-svelte';

  type Track = SpotifyApi.TrackObjectFull | SpotifyApi.TrackObjectSimplified;
  export let track: Track;
  export let onplay: ((detail: { track: Track }) => void) | undefined = undefined;
  export let onpause: ((detail: { track: Track }) => void) | undefined = undefined;

  let audio: HTMLAudioElement;
  let paused = true;

  $: paused = audio?.paused ?? true; //Pour que mon bouton reflète bien l'état, pense à éventuellement rendre paused réactif dans le composant

  function onPlay() {
    if (current && current !== audio) {
      current.currentTime = 0;
      current.pause();
    }
    current = audio;
    if (onplay) {
      onplay({ track });
    }
  }

  function onPause() {
    if (onpause) {
      onpause({ track });
    }
  }
</script>

<div class="player">
  <audio
    on:play={onPlay}
    on:pause={onPause}
    bind:this={audio}
    bind:paused
    controls
    src={track.preview_url}
    preload="none"
  >
    Votre navigateur ne supporte pas l'élément audio.
  </audio>
  <button
    aria-label={paused ? `Play ${track.name}` : `Pause ${track.name}`}
    on:click={() => {
      if (paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }}
  >
    {#if paused}
      <Play color="var(--text-color)" focusable="false" aria-hidden />
    {:else}
      <Pause color="var(--text-color)" focusable="false" aria-hidden />
    {/if}
  </button>
</div>

<style lang="scss">
	.player {
		audio {
			display: none;
			:global(html.no-js) & {
				display: block;
				width: 100%;
			}
		}
		button {
			width: 12px;
			height: 12px;
			padding: 0;
			background: none;
			border: none;
			cursor: pointer;
			:global(svg) {
				fill: var(--text-color);
				width: 12px;
				height: 12px;
			}
			:global(html.no-js) & {
				display: none;
			}
		}
	}
</style> -->
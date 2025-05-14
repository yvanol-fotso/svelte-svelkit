<script>
    import AudioPlayer from '$lib/PartageData/ScriptModule/AudioPlayer.svelte';

    // Liste de pistes audio pour tester
    const tracks = [
        {
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            title: 'Song 1',
            artist: 'SoundHelix'
        },
        {
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            title: 'Song 2',
            artist: 'SoundHelix'
        },
        {
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            title: 'Song 3',
            artist: 'SoundHelix'
        }
    ];
</script>

<div class="container">
    <h1>Test du composant AudioPlayer</h1>
    <p>
        Cliquez sur "Play" pour chaque piste. Seule une piste peut jouer à la fois grâce à
        <code>&lt;script module&gt;</code>.
    </p>

    <!-- Afficher plusieurs instances d'AudioPlayer -->
    {#each tracks as track}
        <AudioPlayer src={track.src} title={track.title} artist={track.artist} />
    {/each}
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 20px;
    }

    :global(.player) {
        margin-bottom: 10px;
    }
</style>
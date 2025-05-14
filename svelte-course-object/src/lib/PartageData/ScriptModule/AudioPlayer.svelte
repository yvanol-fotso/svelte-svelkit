<script module lang="ts">
    // Déclarer explicitement le type de 'current' comme HTMLAudioElement ou undefined
    let current: HTMLAudioElement | undefined;
</script>

<script lang="ts">
    // Propriétés du composant : source audio, titre, artiste
    let { src, title, artist } = $props<{ src: string; title: string; artist: string }>();

    // États réactifs avec types explicites
    let time = $state<number>(0); // Temps actuel en secondes
    let duration = $state<number>(0); // Durée totale en secondes
    let paused = $state<boolean>(true); // État de pause

    // Formater le temps en minutes:secondes (ex. 2:05)
    function format(time: number): string {
        if (isNaN(time)) return '...';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
</script>

<div class={['player', { paused }]}>
    <!-- Élément audio lié aux états -->
    <audio
        {src}
        bind:currentTime={time}
        bind:duration
        bind:paused
        onplay={(e) => {
            // Lorsqu'une piste joue :
            const audio = e.currentTarget as HTMLAudioElement;
            if (audio !== current) {
                current?.pause(); // Mettre en pause l'audio précédent
                current = audio; // Mettre à jour l'audio actuel
            }
        }}
        onended={() => {
            time = 0; // Réinitialiser le temps à la fin
        }}
    ></audio>

    <!-- Bouton play/pause -->
    <button
        class="play"
        aria-label={paused ? 'play' : 'pause'}
        onclick={() => (paused = !paused)}
    ></button>

    <!-- Informations : titre, artiste, progression -->
    <div class="info">
        <div class="description">
            <strong>{title}</strong> / <span>{artist}</span>
        </div>

        <div class="time">
            <span>{format(time)}</span>
            <div
                class="slider"
                onpointerdown={(e: PointerEvent) => {
                    const div = e.currentTarget as HTMLDivElement;

                    // Fonction seek avec type explicite pour l'événement
                    function seek(e: PointerEvent): void {
                        const { left, width } = div.getBoundingClientRect();
                        let p = (e.clientX - left) / width;
                        if (p < 0) p = 0;
                        if (p > 1) p = 1;
                        time = p * duration;
                    }

                    seek(e);

                    window.addEventListener('pointermove', seek);
                    window.addEventListener(
                        'pointerup',
                        () => {
                            window.removeEventListener('pointermove', seek);
                        },
                        { once: true }
                    );
                }}
            >
                <div class="progress" style="--progress: {(time / duration) * 100}%"></div>
            </div>
            <span>{duration ? format(duration) : '--:--'}</span>
        </div>
    </div>
</div>

<style>
    .player {
        display: grid;
        grid-template-columns: 2.5em 1fr;
        align-items: center;
        gap: 1em;
        padding: 0.5em 1em 0.5em 0.5em;
        border-radius: 2em;
        background: #f4f4f4;
        transition: filter 0.2s;
        color: #666;
        user-select: none;
    }

    .player:not(.paused) {
        color: #333;
        filter: drop-shadow(0.5em 0.5em 1em rgba(0, 0, 0, 0.1));
    }

    button {
        width: 100%;
        aspect-ratio: 1;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border-radius: 50%;
    }

    [aria-label='pause'] {
        background-image: url('/pause.svg');
    }

    [aria-label='play'] {
        background-image: url('/play.svg');
    }

    .info {
        overflow: hidden;
    }

    .description {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
    }

    .time {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .time span {
        font-size: 0.7em;
    }

    .slider {
        flex: 1;
        height: 0.5em;
        background: #ddd;
        border-radius: 0.5em;
        overflow: hidden;
    }

    .progress {
        width: calc(100 * var(--progress));
        height: 100%;
        background: #28a745;
    }
</style>




<!-- Explications clés :
<script module> :
Contient let current;, une variable partagée entre toutes les instances du composant.

Cette variable stocke l'élément <audio> actuellement en lecture.

Logique onplay :
Lorsqu'une piste est jouée (onplay), le composant vérifie si current contient un autre élément <audio>.

Si oui, il appelle pause() sur cet élément pour arrêter la lecture.

Ensuite, il met à jour current avec l'élément actuel.

Avantage :
Sans <script module>, chaque instance d'AudioPlayer serait isolée, et il serait difficile de coordonner l'arrêt des autres pistes sans une gestion d'état externe.
 -->

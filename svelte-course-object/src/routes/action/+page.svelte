<script lang="ts">
    import { longpress } from '$lib/Action/longPress';
    
    let duration = $state(2000);
    let progress = $state(0);
    let lastEvent = $state('');
    
    function handleProgress(e: CustomEvent) {
        progress = e.detail.progress * 100;
        lastEvent = `Progress: ${Math.round(progress)}%`;
    }
</script>

<div class="controls">
    <label>
        Durée: 
        <input type="range" bind:value={duration} min="500" max="5000" step="100" />
        {duration}ms
    </label>
</div>

<div class="demo-container">
    <button
        use:longpress={{
            duration,
            threshold: 100,
            feedback: {
                class: 'pressing',
                style: 'transition: all 0.2s ease;'
            }
        }}
        on:longpressstart={() => lastEvent = 'Début de pression'}
        on:longpressprogress={handleProgress}
        on:longpresscancel={() => lastEvent = 'Pression annulée'}
        on:longpress={() => lastEvent = 'Long press détecté!'}
        class:pressing={progress > 0}
    >
        {#if progress > 0 && progress < 100}
            <span class="progress-indicator" style={`width: ${progress}%`} />
        {/if}
        Maintenez appuyé
    </button>
    
    <div class="event-log">
        Dernier événement: {lastEvent}
    </div>
</div>

<style>
    button {
        position: relative;
        padding: 12px 24px;
        overflow: hidden;
    }
    
    .progress-indicator {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        background: #3a86ff;
    }
    
    .pressing {
        background-color: #f0f0f0;
        transform: scale(0.98);
    }
    
    .event-log {
        margin-top: 1rem;
        padding: 0.5rem;
        background: #f5f5f5;
    }
</style>
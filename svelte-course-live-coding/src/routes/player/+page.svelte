<script lang="ts">
    import Player from '$lib/playerComponent/Player.svelte';
    import PlayerDescendant from '$lib/PlayerPropagationDescende/PlayerDescend.svelte';

    // Je teste la propagation Descendante

    let titre = "Propagation Descendante"; 

    function handleGlobalEvent(event: { message: string }) {
        console.log('App  dit Reçu depuis Player :', event.message);
    }


    // Pour la propgation descedanste
    function logEvent(event: { message: string }) {
        // console.log("Action depuis Enfant(IconD & VideosviewrsD) :", event); //Objet 
        console.log("Action depuis Enfant(IconD & VideosviewrsD) :", event.message); //J'extreai le message
    }

</script>

<Player clickEvent={handleGlobalEvent} />
<PlayerDescendant titre={titre} logAction={logEvent}  />



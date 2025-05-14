<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    function sendMessage() {
      dispatch('message', { content: 'Bonjour depuis enfant' });
    }
  </script>
  
  <button on:click={sendMessage}>Envoyer un Message</button>
  
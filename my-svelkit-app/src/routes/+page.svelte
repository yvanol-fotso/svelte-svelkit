<script>
  import { goto,beforeNavigate,afterNavigate } from '$app/navigation';

    // import Button from '$lib/components/Button.svelte';
    // import Button from '$components/Button.svelte';
    import {Button} from '$components';

    import {navigating} from '$app/stores';

    $:console.log($navigating)

    beforeNavigate((navigation) =>{
      console.log('beforeNavigate',navigation);
    }) ;

    afterNavigate((navigation) =>{
      console.log('afterNavigate',navigation);
    });

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<a href="/about">About</a>
<Button/>

<button 
  onclick={() => { 
    goto('/about'); 
    } 
  }>
      A propos
</button>

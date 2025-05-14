<script>
    import { page } from '$app/stores';
  </script>
  

  <div class="about-layout" style="background: #9C27B0; color: white; min-height: 100vh; padding: 2rem;">
    
    <nav style="margin-bottom: 2rem;">
      <a href="/about" class:active={$page.url.pathname === '/about'}>Présentation</a>
      <a href="/about/team" class:active={$page.url.pathname === '/about/team'}>Équipe</a>
    </nav>
    <slot />
    <button 
      on:click={() => window.history.back()}
      style="background: white; color: #9C27B0; padding: 0.5rem 1rem; border: none; border-radius: 4px; margin-top: 2rem;"
    >
      ← Retour
    </button>
  </div>
  
  <style>
    .about-layout a {
      color: white;
      margin-right: 1rem;
      padding: 0.5rem;
      text-decoration: none;
    }
    
    .about-layout a.active {
      border-bottom: 2px solid white;
    }
  </style>
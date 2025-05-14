<script>
    import { page } from '$app/stores';
  </script>
  
  <div class="settings-layout" style="background: #2196F3; min-height: 100vh; padding: 2rem;">
    <nav style="margin-bottom: 2rem;">
      <a href="/settings" class:active={$page.url.pathname === '/settings'}>Profil</a>
      <a href="/settings/prefs" class:active={$page.url.pathname === '/settings/prefs'}>Préférences</a>
    </nav>
  
    <!-- Contenu de la page settings -->
    <slot />
  </div>
  
  <style>
    .settings-layout {
      color: white; /* Texte blanc pour contraster avec le fond bleu */
    }
    
    nav a {
      color: white;
      margin-right: 1rem;
      padding: 0.5rem;
      border-radius: 4px;
    }
    
    nav a.active {
      background: rgba(255, 255, 255, 0.2);
    }
  </style>
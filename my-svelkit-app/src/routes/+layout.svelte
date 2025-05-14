<script>
    import { page } from '$app/stores';
  </script>
  
  <div class="app-container">
    <nav class="navbar">
      <a href="/" class:active={$page.url.pathname === '/'}>Accueil</a>
      <a href="/about" class:active={$page.url.pathname === '/about'}>À propos</a>
      <a href="/settings" class:active={$page.url.pathname === '/settings'}>Settings</a>
      <a href="/login" class:active={$page.url.pathname === '/login'}>À propos</a>
      <a href="/register" class:active={$page.url.pathname === '/register'}>À propos</a>
      <a href="/produit/1" class:active={$page.url.pathname.startsWith('/produit/')}>produit</a>
      <a href="/home" class:active={$page.url.pathname.startsWith('/home')}>home</a>
     
    </nav>
  
    <main>
      <slot /> 
    </main>
  
  
    <footer>
      Mon Application - {new Date().getFullYear()}
    </footer>
  </div>
  
  <style>
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  
    .navbar {
      background: #4CAF50;
      padding: 1rem;
      display: flex;
      gap: 1rem;
    }
  
    .navbar a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
  
    .navbar a:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  
    .navbar a.active {
      background: white;
      color: #4CAF50;
      font-weight: bold;
    }
  
    main {
      flex: 1;
      padding: 2rem;
    }
  
    footer {
      background: #333;
      color: white;
      padding: 1rem;
      text-align: center;
    }
  </style>
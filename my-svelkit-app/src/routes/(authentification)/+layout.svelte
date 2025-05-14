<script>
    let name = "yvanol";
    import { redirect } from '@sveltejs/kit';
  </script>
  
  {#if name}
    <div class="layout-container">
      <!-- Header stylisé -->
      <header class="app-header">
        <div class="welcome-box">
          <span class="welcome-text">Bonjour <span class="username">{name}</span> !</span>
        </div>
      </header>
  
      <!-- Contenu principal avec effet glassmorphism -->
      <main class="app-main">
        <div class="content-card">
          <slot /> <!-- Contenu des pages enfants -->
        </div>
      </main>
    </div>
  {:else}
    <script>
      redirect(302, '/login');
    </script>
  {/if}
  
  <style>
    :global(:root) {
      --primary: #4361ee;
      --secondary: #3a0ca3;
      --accent: #f72585;
      --light: #f8f9fa;
      --dark: #212529;
    }
  
    .layout-container {
      min-height: 100vh;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      font-family: 'Segoe UI', system-ui, sans-serif;
    }
  
    .app-header {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .welcome-box {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.2);
      display: inline-block;
    }
  
    .welcome-text {
      color: white;
      font-size: 1.2rem;
      font-weight: 500;
    }
  
    .username {
      color: var(--accent);
      font-weight: bold;
      text-shadow: 0 0 8px rgba(247, 37, 133, 0.4);
    }
  
    .app-main {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .content-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  </style>
<script>
  import { page } from '$app/stores';
</script>

<div class="admin-container">
  <!-- Sidebar stylisée -->
  <aside class="admin-sidebar">
    <div class="sidebar-header">
      <h2 class="admin-title">Espace Admin</h2>
      <div class="admin-avatar">YA</div>
    </div>

    <nav class="admin-nav">
      <a 
        href="/admin/dashboard" 
        class:active={$page.url.pathname === '/admin/dashboard'}
        class="nav-link"
      >
        <svg class="nav-icon" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
        <span>Tableau de bord</span>
      </a>

      <!-- Ajoute d'autres liens au besoin -->
      <a href="/admin/users" class="nav-link" class:active={$page.url.pathname === '/admin/users'}>
        <svg class="nav-icon" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <span>Utilisateurs</span>
      </a>
    </nav>

    <div class="sidebar-footer">
      <button class="logout-btn">
        <svg viewBox="0 0 24 24">
          <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
        </svg>
        Déconnexion
      </button>
    </div>
  </aside>

  <!-- Contenu principal moderne -->
  <main class="admin-main">
    <div class="content-container">
      <slot />
    </div>
  </main>
</div>

<style>
  :global(:root) {
    --admin-primary: #1a237e;
    --admin-accent: #534bae;
    --admin-light: #e8eaf6;
    --admin-dark: #0d0f36;
    --admin-success: #4caf50;
  }

  .admin-container {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 280px 1fr;
    background-color: #f5f5f5;
  }

  .admin-sidebar {
    background: linear-gradient(180deg, var(--admin-primary), var(--admin-dark));
    color: white;
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 15px rgba(0,0,0,0.1);
  }

  .sidebar-header {
    padding: 0 1.5rem 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .admin-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--admin-light);
  }

  .admin-avatar {
    width: 50px;
    height: 50px;
    background: var(--admin-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .admin-nav {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 8px;
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    background: rgba(255,255,255,0.1);
    color: white;
  }

  .nav-link.active {
    background: var(--admin-accent);
    color: white;
    font-weight: 500;
  }

  .nav-icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  .sidebar-footer {
    padding: 1.5rem;
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  .logout-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.7);
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .logout-btn:hover {
    background: rgba(255,255,255,0.1);
    color: white;
  }

  .logout-btn svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  .admin-main {
    padding: 2rem;
  }

  .content-container {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    min-height: calc(100vh - 4rem);
  }
</style>
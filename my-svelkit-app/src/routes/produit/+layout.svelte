<script>
    import { page } from '$app/stores';
  </script>

  <div class="product-layout" style="background: #FF9800; min-height: 100vh; padding: 2rem; color: white;"> 

    <nav style="margin-bottom: 2rem;">
      <a href="/produit/1" class:active={$page.params.id === '1'}>Produit 1</a>
      <a href="/produit/2" class:active={$page.params.id === '2'}>Produit 2</a>
      <a href="/produit/3434" class:active={$page.params.id === '3434'}>Produit Spécial</a>
    </nav>
  
    <slot /> 
  </div>
  
  <style>
    .product-layout a {
      color: white;
      margin-right: 1rem;
      padding: 0.5rem 1rem;
      background: rgba(0,0,0,0.2);
      border-radius: 4px;
      text-decoration: none;
    }
    
    .product-layout a.active {
      background: white;
      color: #FF9800;
      font-weight: bold;
    }
  </style>
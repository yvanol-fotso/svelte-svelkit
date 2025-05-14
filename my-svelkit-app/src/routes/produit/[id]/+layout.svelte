<script>
    import { page } from '$app/stores';
  </script>

  <div class="product-detail-layout">
    <div style="background: rgba(255,255,255,0.9); color: #333; padding: 2rem; border-radius: 8px;">
      <slot /> 
    </div>
  
   
    <button 
      on:click={() => history.back()}
      style="margin-top: 2rem; background: white; color: #FF9800; padding: 0.5rem 1rem; border: none; border-radius: 4px;"
    >
      ← Retour aux produits
    </button>
  </div>
<script>
	import { page } from '$app/stores';
  </script>
  
  <h1>Fiche Produit</h1>
  
  <div class="product-info">
	<p>ID du produit : <strong>{$page.params.id}</strong></p>
	
	<!-- Exemple de données dynamiques -->
	{#if $page.params.id === '3434'}
	  <p>🌟 Produit spécial !</p>
	{:else}
	  <p>Produit standard</p>
	{/if}
  </div>
  
  <style>
	.product-info {
	  padding: 1rem;
	}
	
	h1 {
	  color: #FF9800;
	  margin-bottom: 1rem;
	}
  </style>
<script>
    // Données pour la boucle #each
    let items = [
      { id: 1, name: "Élément 1" },
      { id: 2, name: "Élément 2" },
      { id: 3, name: "Élément 3" },
    ];
  
    // Données pour @const (grille SVG)
    let grid = [
      { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 },
      { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 },
    ];
    const size = 50;
  </script>
  
  <div class="slide-container">
    <h1>Affichage dynamique avec <code>#each</code> et <code>@const</code></h1>
  
    <!-- Partie 1 : Boucle #each -->
    <section class="each-example">
      <h2>1. Boucle <code>#each</code></h2>
      <p class="description">Itération sur des données dynamiques avec clé unique.</p>
      
      <div class="grid-container">
        {#each items as item (item.id)}
          <div class="item">
            {item.name}
          </div>
        {/each}
      </div>
  
      <pre><code>
        {#each items as item (item.id)}
          &lt;div class="item"&gt;{item.name}&lt;/div&gt;
        {/each}
      </code></pre>
    </section>
  
    <!-- Partie 2 : Optimisation @const -->
    <section class="const-example">
      <h2>2. Optimisation avec <code>@const</code></h2>
      <p class="description">Évite les recalculs redondants dans une boucle.</p>
      
      <svg width="200" height="120">
        {#each grid as cell}
          {@const x = cell.x * size}
          {@const y = cell.y * size}
          <rect 
            {x} {y} 
            width={size} height={size} 
            fill="#2196F3"
            stroke="#0d47a1"
          />
        {/each}
      </svg>
  
      <pre><code>
        {#each grid as cell}
          {@const x = cell.x * size}
          {@const y = cell.y * size}
          &lt;rect x={x} y={y} ... /&gt;
        {/each}
      </code></pre>
    </section>
  </div>
  
  <style>
    /* Layout général */
    .slide-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
      font-family: Arial, sans-serif;
    }
  
    h1 {
      color: #333;
      text-align: center;
      margin-bottom: 2rem;
    }
  
    h2 {
      color: #444;
      border-bottom: 2px solid;
      padding-bottom: 0.5rem;
    }
  
    /* Styles pour les exemples */
    .each-example, .const-example {
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
  
    .each-example {
      background: #E8F5E9;
      border-left: 4px solid #4CAF50;
    }
  
    .const-example {
      background: #E3F2FD;
      border-left: 4px solid #2196F3;
    }
  
    /* Grille #each */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 10px;
      margin: 1rem 0;
    }
  
    .item {
      background: #4CAF50;
      padding: 10px;
      text-align: center;
      border-radius: 4px;
      color: white;
      font-weight: bold;
    }
  
    /* SVG */
    svg {
      margin: 1rem 0;
      display: block;
    }
  
    /* Code blocks */
    pre {
      background: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
    }
  
    code {
      font-family: 'Courier New', monospace;
      color: #d63384;
    }
  
    .description {
      color: #666;
      font-style: italic;
      margin-bottom: 1rem;
    }
  </style>
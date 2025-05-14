<script>
  export let mainColor = 'tomato';
</script>

<div style="--color: {mainColor}; color: var(--color);">
  Texte stylisé avec variable CSS
</div>

<p>Ce texte héritera de la couleur définie ci-dessus (si non surchargée).</p>

<style>
  div {
    padding: 15px;
    border: 1px solid #eee;
    margin-bottom: 10px;
  }

  :global(body) {
    font-family: sans-serif;
    background-color: #f8f8f8;
    padding: 20px;
  }

  :global(h1) {
    color: blue;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    color: var(--color); /* Utilise la variable CSS */
  }
</style>
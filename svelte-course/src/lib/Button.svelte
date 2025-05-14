<script>
    export let primary = false;
    export let text = 'Click me';
    export let onClick = () => {}; // Fournir une fonction vide par défaut
    // OU
    // export let onClick; // Laisser undefined mais le gérer dans le template
  </script>
  
  <button class:primary={primary} on:click={onClick}>
    {text}
  </button>
  
  <style lang="scss">
    button {
      padding: 10px 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
      background-color: white;
      color: black;
  
      &:hover {
        background-color: #eee;
      }
  
      &.primary {
        background-color: blue;
        color: white;
        border-color: darkblue;
  
        &:hover {
          background-color: darkblue;
        }
      }
    }
  </style>
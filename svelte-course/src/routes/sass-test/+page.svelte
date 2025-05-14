<script>
    let isActive = false;
  
    function toggle() {
      isActive = !isActive;
    }
  </script>
  
  <style lang="scss">
    .styled-button {
      background-color: blue;
      color: white;
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
  
      &:hover {
        background-color: darkblue;
      }
    }
  
    .base-button {
      background-color: grey;
      color: white;
      padding: 10px;
      border-radius: 8px;
      margin-left: 10px;
  
      &.active {
        background-color: green;
      }
    }
  </style>
  
  <!-- 🎨 Bouton avec styles SCSS classiques -->
  <button class="styled-button">
    Bouton stylé
  </button>
  
  <!-- 🔄 Bouton avec classe dynamique -->
  <button class="base-button" class:active={isActive} on:click={toggle}>
    {isActive ? 'Actif' : 'Inactif'}
  </button>
  
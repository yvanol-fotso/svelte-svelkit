<script lang="ts">
    function handleClick(event: MouseEvent) {
      event.stopPropagation();
      console.log("Clic sur le div");
    }
  
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Enter" || event.key === " ") {
        handleClick(event as unknown as MouseEvent); // Simule un clic
      }
    }
  </script>
  
  <div
    role="button"
    tabindex="0"
    on:click={handleClick}
    on:keydown={handleKeyPress}
    aria-label="Cliquez ici"
  >
    Cliquez-moi
  </div>
  
  
 <!--
  <script lang="ts">
    function handleClick(event: MouseEvent) {
      event.stopPropagation(); // Empêche la propagation de l'événement
      console.log("Clic sur le bouton");
    }
  </script>
  
  <div on:click={() => console.log("Événement capté par le div")}>
    <button on:click={handleClick}>Cliquez-moi</button>
  </div>
   -->
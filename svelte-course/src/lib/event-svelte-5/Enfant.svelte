<script lang="ts">
    export let click: (event: { message: string }) => void; //  Ici, une propriété click est exportée. Elle est un callback function qui prend un objet event avec une propriété message de type chaîne de caractères (string) comme argument, et qui ne renvoie rien (void). Cela définit un contrat pour la fonction click qui sera passée en tant que paramètre au composant par son parent.
  
    function handleClick() {
      click({ message: 'Message de l\'enfant' });
    }
  </script>
  
  <button on:click={handleClick}>Cliquez-moi</button>
  
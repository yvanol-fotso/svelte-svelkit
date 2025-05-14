<script lang="ts">
    let personne = { nom: "Alice", age: 30 };
  
    function anniversaire() {
      // Mauvaise pratique (mutation directe) :
      // personne.age += 1;
  
      // Bonne pratique (création d'un nouvel objet) :
      personne = { ...personne, age: personne.age + 1 };
    }
  </script>
  
  <h1>Nom : {personne.nom}</h1>
  <p>Âge : {personne.age}</p>
  <button on:click={anniversaire}>Souhaiter un anniversaire</button>


















  
  <!-- Dans ce contexte JavaScript (et TypeScript), les trois points ... sont l'opérateur de décomposition (spread operator) pour les objets. -->
  <!-- ...personne : Cela prend toutes les propriétés et valeurs de l'objet personne existant et les "étale" (ou les copie superficiellement) dans le nouvel objet que vous êtes en train de créer avec les accolades {}. -->

  <!-- , age: personne.age + 1 : Après avoir copié toutes les propriétés de personne, cette partie spécifie une nouvelle valeur pour la propriété age. Si la propriété age existait déjà dans personne, sa valeur sera écrasée par la nouvelle valeur (personne.age + 1). -->
  <!-- Pourquoi est-ce important pour l'immuabilité dans Svelte (et en général dans la gestion d'état réactif) ?

  Création d'une nouvelle référence : En créant un nouvel objet au lieu de modifier directement l'objet existant (personne.age += 1), Svelte peut détecter plus facilement que l'état a changé. Les frameworks réactifs comme Svelte se basent souvent sur la comparaison de références d'objets pour savoir quand mettre à jour l'interface utilisateur. Si vous modifiez directement l'objet, la référence reste la même, et Svelte pourrait ne pas détecter le changement.
  
  Prédictibilité : En traitant l'état comme immuable, il devient plus facile de suivre les changements et de comprendre comment l'état de votre application évolue. Vous avez un historique clair des états (l'ancien objet n'est pas modifié).
  
  Analogie :
  
  Imaginez que personne est un document. Au lieu de gommer l'âge et de le réécrire sur le même document (mutation), vous faites une photocopie du document, vous changez l'âge sur la photocopie, et ensuite vous utilisez la photocopie comme la nouvelle version. Le document original reste inchangé.
  
  Donc, ...personne est une manière concise et courante en JavaScript pour créer une nouvelle copie d'un objet avec des modifications, ce qui est essentiel pour maintenir l'immuabilité de l'état dans des frameworks comme Svelte. -->
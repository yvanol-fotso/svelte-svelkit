<script>
    let user = { profile: { name: "Alice" } };
    // Modification directe = réactivité préservée :
    user.profile.name = "Bob"; // Mise à jour reactive immédiate.  
  </script>
  <p> {user.profile.name} </p>


  <!-- Avec Svelte, la réactivité fonctionne en profondeur par défaut – les modifications imbriquées sont traitées naturellement, comme du JavaScript vanilla. -->
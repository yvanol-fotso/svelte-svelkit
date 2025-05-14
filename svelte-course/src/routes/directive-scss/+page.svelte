<script>
    import Button from '$lib/Button.svelte'; // Assurez-vous que le chemin est correct
  
    let isPrimary = true;
  
    function handleClick() {
      alert('Le bouton a été cliqué !');
      isPrimary = !isPrimary;
    }
  </script>
  
  <h1>Démo des Directives CSS</h1>
  
  <Button text="Bouton normal" onClick={() => alert('Bouton normal cliqué')} />
  <Button primary={true} text="Bouton primaire" />
  <Button primary={isPrimary} text="Bouton primaire dynamique" onClick={handleClick} />
  <Button text="Autre bouton" />
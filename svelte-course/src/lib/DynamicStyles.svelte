<script>
    export let backgroundColor = 'lightblue';
    export let textColor = 'darkblue';
    export let isBold = false;
  
    $: dynamicClass = isBold ? 'bold-text' : '';
  </script>
  
  <style lang="sass">
    .container
      padding: 20px
      border: 1px solid #eee
      border-radius: 5px
      background-color: var(--bg-color)
      color: var(--text-color)
  
    .bold-text
      font-weight: bold
  
    // Déclaration des variables CSS (elles seront définies via les props)
    :root
      --bg-color: v-bind(backgroundColor)
      --text-color: v-bind(textColor)
  </style>
  
  <div class="container" class:bold-text={isBold}>
    <h2>Styles Dynamiques avec SASS et Props</h2>
    <p class={dynamicClass}>
      Ce texte est stylé dynamiquement en utilisant des variables CSS passées comme props et une classe conditionnelle.
    </p>
    <p>
      La couleur de fond est: {backgroundColor}
    </p>
    <p>
      La couleur du texte est: {textColor}
    </p>
    <p>
      Le texte est en gras: {isBold ? 'Oui' : 'Non'}
    </p>
  </div>
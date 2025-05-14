<script>
    let a = 10; // Source de données 'a'
    let b = 5;  // Source de données 'b'
  
    // Variable dérivée 'total' qui est automatiquement mise à jour
    $: total = a + b;
  
    function incrementA() {
      a += 1;
    }
  
    function decrementB() {
      b -= 1;
    }
  </script>
  
  <h1>Sources de données</h1>
  <p>Source A: {a}</p>
  <button on:click={incrementA}>Incrémenter A</button>
  
  <p>Source B: {b}</p>
  <button on:click={decrementB}>Décrémenter B</button>
  
  <h2>Variable dérivée</h2>
  <p>Total (A + B): {total}</p>
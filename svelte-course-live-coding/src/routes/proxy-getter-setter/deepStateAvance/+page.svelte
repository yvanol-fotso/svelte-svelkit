<script lang="ts">
    
    let array = $state([1,2,3,4]);
    let objetArray = $state([{id:1},{id:2}]);

    let personne = $state({
      nom: 'Fotso',
      prenom: 'Yvanol',
      address:{
        ville:"Bafoussam",
        rue: "Toungang"
      }
    });
    
    $effect(() =>{
        console.log('Personne effect');
        console.log(personne);
    });

    $effect(() =>{
        console.log('personne.nom effect');
        console.log(personne.nom);
    });

    $effect(() =>{
        console.log('Personne.address.ville effect');
        console.log(personne.address.ville);
    });

    $effect(() =>{
        console.log('array');
        console.log(array);
    });

    $effect(() =>{
        console.log('array.length');
        console.log(array.length);
    });

      

  </script>
  
  <h1>{array[0]}</h1>
  <div>
    <h2>{personne.nom}</h2>
    <h2>Adrress: {personne.address.ville}</h2>
  </div>

  <input bind:value={personne.nom} />
  <input bind:value={personne.address.ville} />
  <input bind:value={personne.address.rue} />
  <p>{array}</p>

  <button onclick={() =>{
    array[0] = Math.random()*10; 
  }}>Add to array</button>

  <style>
    :global{
        body{
            background-color: rgba(32, 32, 32, 0.842);
            color: white;
        }
    }
  </style>
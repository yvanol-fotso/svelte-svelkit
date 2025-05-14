const count = $state({value:0});

export default count;

// je pouvais ecrire les fonctions incremente et reset ici et appeller depuis mon component
export function increment(){
    count.value +=1;
}

export function reset(){
    count.value =0;
}



// je peux use les modules sveltes ici car mon extension c'est .svelte.ts contraiement au fichier Counter.ts

// partage d'effecte Global
$effect.root(() =>{
    $effect(() =>{
        console.log(count.value);
    })
})


// Pas global 
// $effect(() =>{
//     console.log(count.value);
// })
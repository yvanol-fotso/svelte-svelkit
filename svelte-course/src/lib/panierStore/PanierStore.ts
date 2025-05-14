import { writable, derived } from 'svelte/store';
  
const prixHT = writable(100);  // Prix HT (Hors Taxe)

// Calculer le prix TTC à partir du prix HT
export const prixTTC = derived(prixHT, $prixHT => $prixHT * 1.2);

// Définir un store "prixTTC" modifiable qui met à jour le prix HT en fonction du prix TTC
export const prixTTCWritable = {
  subscribe: prixTTC.subscribe,
  set: (val: number) => prixHT.set(val / 1.2),  // Déclare le type de 'val' comme 'number'
};

   
  
// Un contexte encapsulé avec Symbol // mon fichier du contexte partagé

// Marchent mais les bouttons du context partages ne reagissent pas 

// import { setContext, getContext, hasContext } from 'svelte';

// type CounterContext = {
//   value: number;
//   increment: () => void;
// };

// const key = Symbol('counter');

// export function setCounterContext(ctx: CounterContext) {
//   setContext(key, ctx);
// }

// export function getCounterContext(): CounterContext {
//   return getContext(key);
// }

// export function hasCounterContext(): boolean {
//   return hasContext(key);
// }




// Approche avec les  stores 


import { setContext, getContext, hasContext } from 'svelte';
import type { Writable } from 'svelte/store';

const key = Symbol(); //Symbol.for("clé")

export function setCounterContext(counter: Writable<number>) {
  setContext(key, counter);
}

export function getCounterContext(): Writable<number> {
  return getContext(key);
}

export function hasCounterContext(): boolean {
  return hasContext(key);
}



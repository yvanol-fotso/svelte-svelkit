//Marche pour le Composant FeuSignalisationRoute

// import type { FlipParams } from 'svelte/animate';

// export function myFlipAnimation(
//   node: Element,
//   { delay = 0, duration = 300 }: FlipParams
// ) {
//   return {
//     delay,
//     duration,
//     css: (t: number) => `transform: scale(${1 + t * 0.2});`  // Ajout du type `number` pour `t`
//   };
// }



// Marche pour le composant Feux

import type { TransitionConfig } from 'svelte/transition';

interface FlipParams {
  delay?: number;
  duration?: number;
}

export function myFlipAnimation(
  node: Element,
  { delay = 0, duration = 400 }: FlipParams
): TransitionConfig {
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;

  return {
    delay,
    duration,
    css: (t) => `
      transform: ${transform} rotate(${(1 - t) * 180}deg);
      opacity: ${t};
    `
  };
}


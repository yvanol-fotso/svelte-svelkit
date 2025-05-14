import type { TransitionConfig } from 'svelte/transition';

export function customJsTransition(
  node: Element,
  { delay = 0, duration = 800, easing = t => t, spin = 1 }: { delay?: number; duration?: number; easing?: (t: number) => number; spin?: number }
): TransitionConfig {
  return {
    delay,
    duration,
    easing,
    css: (t) => `transform: rotate(${t * 360 * spin}deg);`
  };
}

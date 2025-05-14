import type { TransitionConfig } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

export function customCssTransition(
  node: Element,
  { delay = 0, duration = 400, easing = cubicOut }: { delay?: number; duration?: number; easing?: (t: number) => number }
): TransitionConfig {
  return {
    delay,
    duration,
    easing,
    css: (t) => `
      opacity: ${0};
      transform: scale(${t});
    `
  };
}

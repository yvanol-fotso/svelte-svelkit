import { customCssTransition } from './CustomCssTransition';
import { customJsTransition } from './CustomJsTransition';
import { myFlipAnimation } from './MyFlipAnimation';

interface CombinedTransitionParams {
  duration: number;        // La durée globale de la transition combinée
  spin: number;            // Nombre de tours ou de rotations pour la transition JS
  durationCss: number;     // Durée de la transition CSS
  durationFlip: number;    // Durée de l'animation Flip
}


export function combinedTransition(
  node: Element, 
  { duration, spin, durationCss, durationFlip }: CombinedTransitionParams
): { duration: number } {
  // Appliquer la transition JS personnalisée
  customJsTransition(node, { duration, spin });
  // Appliquer la transition CSS personnalisée
  customCssTransition(node, { duration: durationCss });
  // Appliquer l'animation Flip
  myFlipAnimation(node, { duration: durationFlip });
  
  return {
    duration
  };
}





// En TypeScript, une interface est un mécanisme qui permet de définir un modèle ou 
// une forme pour les objets. Elle définit un ensemble de propriétés et leurs types 
// que tout objet qui "implémente" cette interface doit respecter. Cela permet à 
// TypeScript de vérifier le type des objets à la compilation.

// node: Element : Le premier argument node est un élément DOM sur lequel vous 
// souhaitez appliquer les différentes animations et transitions.

// { duration, spin, durationCss, durationFlip }: CombinedTransitionParams : 
// Le deuxième argument est un objet qui est déstructuré pour récupérer les 
// propriétés duration, spin, durationCss, et durationFlip définies dans l'interface CombinedTransitionParams.

// Le retour de la fonction : La fonction retourne un objet avec une seule propriété duration de type number, 
// ce qui signifie que vous renvoyez simplement la durée de la transition.
import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
      // Je Défini les valeurs valides pour le paramètre 'list'
	return ['section', 'category', 'artist', 'profile'].includes(param); // Alors 'list' ne peut être que 'section'
};
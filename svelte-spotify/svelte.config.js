import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; //on va use preprocess que jai installer
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	// preprocess: vitePreprocess(),

	preprocess: preprocess({
		scss: {
			// prependData: '@use "../styles/functions";@use "@unsass/breakpoint";' // avec ceci les style present dans les composant ont des erreur
			prependData: '@use "src/styles/functions";@use "@unsass/breakpoint";'

		}
	}),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		
		alias: {
			$components: 'src/lib/components',
			$assets: 'src/assets', //Pour mes assets
			$actions: 'src/lib/actions',
			$helpers: 'src/lib/helpers',
			$stores: 'src/lib/stores'
		}
	}
};

export default config;

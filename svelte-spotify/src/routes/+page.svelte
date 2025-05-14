<script lang="ts">
	import { Button, Card } from '$components';
	import type { PageData } from './$types';

	export let data: PageData;

	let sections: {
		title: string;
		path: string;
		items: (SpotifyApi.AlbumObjectSimplified | SpotifyApi.PlaylistObjectSimplified)[];
	}[] = [];

	$: {

		//pour la suite du tutoriel  la route du linsting Items on a delete le 's' sur les path sections : /sections/new-releases 

		sections = []; // Réinitialise pour éviter l'accumulation
        console.log('Data from load function:', data);
		
		if (data.newReleases) {
			sections.push({
				title: 'New Releases',
				path: '/section/new-releases',
				items: data.newReleases.albums.items
			});
		}
		if (data.featuredPlaylists) {
			sections.push({
				title: 'Featured Playlists',
				path: '/section/featured-playlists',
				items: data.featuredPlaylists.playlists.items
			});
		}
		data.homeCategories.forEach((category, index) => {
			const categoryPlaylist = data.categoriesPlaylists[index];
			if (categoryPlaylist) {
				sections.push({
					title: category.name,
					path: `/category/${category.id}`,
					items: categoryPlaylist.playlists.items
				});
			}
		});
		if (data.userPlaylists) {
			sections.push({
				title: 'Your Playlists',
				path: '/playlists',
				items: data.userPlaylists.items
			});
		}
	}


    console.log('Data from load function:', data);
</script>

{#if sections.length === 0}
  <p>Aucun contenu disponible pour le moment. Essayez de créer des playlists ou de vérifier votre connexion Spotify.</p>
{:else}
  {#each sections as section}
    <section class="content-row">
      <div class="content-row-header">
        <div class="right">
          <h2 class="section-title">{section.title}</h2>
        </div>
        <div class="left">
          <Button element="a" href={section.path} variant="outline">
            See All <span class="visually-hidden">{section.title}</span>
          </Button>
        </div>
      </div>
      <div class="grid-items">
        {#each section.items.filter(item => item) as item (item.id)} <!-- Filtre les null -->
          <div class="grid-item">
            <Card {item} />
          </div>
        {/each}
      </div>
    </section>
  {/each}
{/if}

<style lang="scss">
	.content-row {
		margin-bottom: 40px;
		.content-row-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20px;
			.section-title {
				font-size: functions.toRem(22);
				font-weight: 600;
				margin: 0;
			}
		}
	}
</style>


<!-- Old now on show les data-->

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<input />
<select>
	<option>Option</option>
</select>
<button>Button</button>

<style lang="scss">
	h1 {
		color: red;
		font-size: functions.toRem(36);
		@include breakpoint.up('md') {
			color: green;
		}
		@include breakpoint.up('lg') {
			color: blue;
		}
	}
</style> -->
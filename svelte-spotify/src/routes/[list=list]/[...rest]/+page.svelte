<script lang="ts">
	import { Card, Pagination } from '$components';
	import { toasts } from '$stores';
	import type { PageData } from './$types';

	export let data: PageData;
	$: itemsData = data.data;

	let isLoading = false;

	const onLoadMoreItems = async () => {
		if (itemsData && 'next' in itemsData && itemsData.next) {
			isLoading = true;
			const res = await fetch(
				itemsData.next.replace('https://api.spotify.com/v1/', '/api/spotify/')
			);
			if (res.ok) {
				const resJSON = await res.json();
				const newData = resJSON.albums || resJSON.playlists || resJSON.artists || resJSON;
				itemsData = { ...newData, items: [...itemsData.items, ...newData.items] };
			} else {
				toasts.error('Could not load data!');
			}
			isLoading = false;
		}
	};
</script>

<div class="content">
	<h1>{data.title}</h1>
	{#if itemsData?.items}
		<div class="grid-items">
			{#each itemsData.items as item}
				<div class="grid-item">
					<Card {item} />
				</div>
			{/each}
		</div>
		{#if 'next' in itemsData}
			<!-- <Pagination paginatedList={itemsData} on:loadmore={onLoadMoreItems} {isLoading} /> -->
			<Pagination paginatedList={itemsData} onLoadMore={onLoadMoreItems} {isLoading} />
		{/if}
	{/if}
</div>

<style lang="scss">
	.grid-items {
		margin-bottom: 40px;
	}
	.content {
		padding-bottom: 60px;
	}
</style>










<!--
  Cette page est associée à la route dynamique /[list]/[...rest].
  Elle permet de gérer différentes sections comme /section/new-releases ou /section/featured-playlists.

  Le paramètre [list] est validé dans un fichier src/params/list.ts
  qui restreint les valeurs autorisées (par exemple : 'section').

  Cela permet de filtrer uniquement les routes valides et éviter les erreurs 404 inutiles.
-->

<script>
	import { page } from '$app/stores';

	$: console.log($page);
</script>


<p>Product ID: {$page.params.id}</p>


<!-- NB : le noms du dossier ou on creait les Matcher Params doit toujours etre "params" si tu ecirt autrement il ne marche pas  -->

<!-- teste avec :http://localhost:5173/matcherParam/1 et :http://localhost:5173/matcherParam/yvanol -->
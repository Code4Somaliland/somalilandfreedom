<script>
	import StatementItem from '../components/StatementItem.svelte';
	import { statementList } from '../data/statementList';
	var statementListOrdered = statementList.sort((a, b) => {
		if (a.modelName > b.modelName) {
			return 1;
		}
		if (a.modelName < b.modelName) {
			return -1;
		}
		return 0;
	});
</script>

<svelte:head>
	<title>Opinion Detainees</title>
</svelte:head>

<article id="webslides">
	<div class="demo-wrap">
		<div class="demo-content">
			<section>
				<div class="wrap">
					<h3>Opinion Detainees</h3>
					<ul class="flexblock gallery">
						{#each statementListOrdered as model}
							<StatementItem {model} />
						{/each}
					</ul>
				</div>
				<!-- .end .wrap -->
			</section>
		</div>
	</div>
</article>

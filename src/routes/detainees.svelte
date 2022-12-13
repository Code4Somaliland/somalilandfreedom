<script>
	import StatementItem from '../components/StatementItem.svelte';
	import { statementList } from '../data/statementList';
	let orderedStatementList = statementList
		.filter((s) => s.modelName !== 'more')
		.sort(function (a, b) {
			return a.modelName.localeCompare(b.modelName);
		});
	orderedStatementList = [
		...orderedStatementList,
		statementList.find((s) => s.modelName === 'more')
	];
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
						{#each orderedStatementList as model}
							<StatementItem {model} />
						{/each}
					</ul>
				</div>
				<!-- .end .wrap -->
			</section>
		</div>
	</div>
</article>

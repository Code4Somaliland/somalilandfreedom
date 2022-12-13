<script>
	import { DetaineeStatus, DetaineeType } from '../Models/statementModel';
	import StatementItem from '../components/StatementItem.svelte';
	import { statementList } from '../data/statementList';
	let orderedStatementList = statementList
		.filter((s) => s.type === DetaineeType.Journalist)
		.sort(function (a, b) {
			return b.arrestStart.toISOString().localeCompare(a.arrestStart.toISOString());
		});
	orderedStatementList = [
		...orderedStatementList,
		statementList.find((s) => s.type === DetaineeType.All)
	];
</script>

<svelte:head>
	<title>Journalists</title>
</svelte:head>

<article id="webslides">
	<div class="demo-wrap">
		<div class="demo-content">
			<section>
				<div class="wrap">
					<h3>Journalists</h3>

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

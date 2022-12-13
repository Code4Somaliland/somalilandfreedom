<script>
	import { DetaineeStatus, DetaineeType } from '../Models/statementModel';
	import StatementItem from '../components/StatementItem.svelte';
	import { statementList } from '../data/statementList';
	let orderedStatementList = statementList
		.filter((s) => s.type === DetaineeType.Sentenced)
		.sort(function (a, b) {
			return b.arrestStart.toISOString().localeCompare(a.arrestStart.toISOString());
		});
	orderedStatementList = [
		...orderedStatementList,
		statementList.find((s) => s.type === DetaineeType.All)
	];
</script>

<svelte:head>
	<title>Previously Sentenced</title>
</svelte:head>

<article id="webslides">
	<div class="demo-wrap">
		<div class="demo-content">
			<section>
				<div class="wrap">
					<h3>Previously Sentenced</h3>
					<h6 style="margin-bottom: 15px;">
						<i>for a crime but facing injustice in a new case</i>
					</h6>

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

<script lang="ts">
	import type { StatementModel } from 'src/Models/statementModel';
	export let model: StatementModel;
</script>

<svelte:head>
	<title>{model.title}</title>
</svelte:head>
<article id="webslides">
	<section class="bg-secondary" style="height: auto;">
		<div class="wrap">
			<ul class="flexblock">
				<li><img class="zoomIn" src={model.image} alt={model.title} style={model.imageStyle} /></li>
				<li>
					<h1>{model.title}</h1>
					<h5>{model.subtitle}</h5>
				</li>
			</ul>
			<div />
			{#if model.detaineeStatus}
				<ul class="flexblock features">
					<li style="background-color: {model.getColorStyle()};">
						<div>
							<h3>
								<span>{model.getStatusText()}<sup /></span>
							</h3>
						</div>
					</li>
					<li>
						<div>
							<h2>
								<span>{model.getArrestPeriod()}<sup> Days</sup></span>
							</h2>
						</div>
						<div>
							<h6>
								Arrested: {model.arrestStart.toDateString()}
							</h6>
							<p />
						</div>
					</li>
					<li>
						<div>
							<h2>
								<svg class="fa-suitcase">
									<use xlink:href="#fa-suitcase" />
								</svg>
								{model.caseHighlight}
							</h2>
						</div>
					</li>
				</ul>
			{/if}
		</div>
		<div class="wrap">
			<div class="card-50">
				<blockquote>
					<p>{model.text}</p>
					<p>
						<a href={model.url} target="_blank" title={model.title}>
							<span style="margin-bottom: 15px;" class="button zoomIn">{model.moreText}</span>
						</a>
						{#if model.contentUrl}
							<a href={model.contentUrl} target="_blank" title={model.title}>
								<span class="button ghost"> The "prohibited" Opinion</span>
							</a>
						{/if}
					</p>
				</blockquote>
			</div>
		</div>
		<!-- .end .wrap -->
	</section>
</article>

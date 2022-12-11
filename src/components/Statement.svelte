<script lang="ts">
	import type { StatementModel } from 'src/Models/statementModel';
	export let model: StatementModel;
	const statusColor = model.isFree == '🔴';
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
								<span>500<sup>+</sup></span>
								SVG Icons
							</h2>
							Font Awesome Kit.
						</div>
					</li>
					<li>
						<div>
							<h2>
								<svg class="fa-text-height">
									<use xlink:href="#fa-text-height" />
								</svg>
								{model.arrestedFor ? 'Arrested' : ''}
							</h2>
							<h6>{model.arrestedFor ?? ''}</h6>
							<h6>Use multiples of 8.</h6>
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

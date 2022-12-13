<script lang="ts">
	import type { StatementModel } from 'src/Models/statementModel';
	export let model: StatementModel;
</script>

<li>
	<a href="/{model.modelName}">
		<figure>
			{#if model.image}
				<img alt="Thumbnail" src={model.image} />
			{/if}
			<figcaption>
				<h2>{model.title}</h2>
				<p>{model.subtitle}</p>
				{#if model.detaineeStatus}
					<p><b>{model.getArrestPeriod()}</b> Days</p>
					<p>Status: <b style="color:{model.getColorStyle()}">{model.getStatusText()}</b></p>
				{:else}
					<p style="padding-bottom:71px;" />
				{/if}
			</figcaption>
		</figure>
	</a>
</li>

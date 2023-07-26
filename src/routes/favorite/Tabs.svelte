<script>
	export let items = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<div class="tabs">
	{#each items as item}
		<div
			class={activeTabValue === item.value
				? 'tab tab-bordered text-xl tab-active'
				: 'tab tab-bordered text-xl'}
		>
			<span on:click={handleClick(item.value)}><i class='fa-solid {item.icon} mr-2'></i>{item.label}</span>
		</div>
	{/each}
</div>
{#each items as item}
	{#if activeTabValue == item.value}
		<div class="container">
			<svelte:component this={item.component} />
		</div>
	{/if}
{/each}

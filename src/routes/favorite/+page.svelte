<script>
	import Tab1 from './Tab1.svelte';
	import Tab2 from './Tab2.svelte';
	import Tab3 from './Tab3.svelte';
	import Tabs from './Tabs.svelte';

	// List of tab items with labels, values and assigned components
	let items = [
		{ label: 'มาร์เก็ตเพลส', icon: 'fa-bag-shopping', value: 1, component: Tab1 },
		{ label: "รถยนต์", icon: 'fa-car-burst', value: 2, component: Tab2 },
		{ label: "</i>อสังหาฯ", icon: 'fa-city', value: 3, component: Tab3 }
	];
</script>

<div class="container m-0 sm:mx-40">
	<span class="text-xl text-white px-8">รายการโปรด</span>
	<Tabs {items} />
</div>

<script>
	import Login from '$lib/Login.svelte';
	import Chat from '$lib/Chat.svelte';


	export let status;


	let items = [];
	$: {
		if (status) {
			items = ['dog', 'ball'];
		} else {
			items = ['Pleas login.'];
		}
	}

</script>

<div class="navbar bg-base-100">
	<!-- drawer button -->
	<div class="flex-none sm:hidden">
		<label for="my-drawer-3" class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 h-6 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</label>
	</div>

	<div class="navbar-start">
		<p class="normal-case text-xl">MeeKong</p>
		<a href="/" class="btn btn-ghost normal-case text-lg mx-4 hidden sm:flex">Home</a>
	</div>
	<div class="navbar-end">
		<a href="/favorite" class="btn btn-ghost btn-circle">
			<i class="fa-regular fa-heart fa-lg" />
		</a>


		<Chat {items}/>

		<Login {status} />
		<a href="/" class="btn btn-primary normal-case text-lg mx-4">ลงขาย</a>
	</div>
</div>

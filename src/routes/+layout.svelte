<script>
  import Footer from '$lib/Footer.svelte';
  import Drawer from '$lib/Drawer.svelte';
  import Navbar from '$lib/Navbar.svelte';

  import { onDestroy } from 'svelte';
	import { login } from '$lib/Auth';
  let status
	const unsubscribe = login.subscribe((value) => {
		status = value;
	});

  /** @type {import('./$types').LayoutData} */

	import '../app.css';
	import { beforeNavigate, goto } from '$app/navigation';
	import { beforeUpdate } from 'svelte';

  beforeUpdate(()=>{
    if(!status){
      goto('/')
    }
  })

  beforeNavigate((navigation)=>{
    if(!status){
      navigation.cancel()
    }
  })

  onDestroy(unsubscribe);

</script>



<Drawer>
    <Navbar {status}/>
	<slot />
</Drawer>

<Footer/>

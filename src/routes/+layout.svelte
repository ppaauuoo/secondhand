<script>
  import Footer from '$lib/Footer.svelte';

  import Drawer from '$lib/Drawer.svelte';

  import Navbar from '$lib/Navbar.svelte';

  /** @type {import('./$types').LayoutData} */

	import '../app.css';
	import { beforeNavigate, goto } from '$app/navigation';
	import { beforeUpdate } from 'svelte';

  const login=true

  beforeUpdate(()=>{
    if(!login){
      goto('/')
    }
  })

  beforeNavigate((navigation)=>{
    if(!login){
      navigation.cancel()
    }
  })
</script>



<Drawer>
    <Navbar/>
	<slot />
</Drawer>

<Footer/>

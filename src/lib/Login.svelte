<script>
  import { login } from '$lib/Auth'


    function logingin() {

		login.update((n) => n + 1);
    }

    function logingout() {

		login.update((n) => n - 1);
    }

    export let status
</script>

{#if !status}
    <a href="/" on:click={logingin} class="btn btn-ghost normal-case text-lg mx-4 hidden md:flex">เข้าสู่ระบบ / สมัครสมาชิก</a>
{:else}
    <a href="/" on:click={logingout} class="btn btn-ghost normal-case text-lg mx-4 hidden md:flex">ออกจากระบบ</a>
{/if}
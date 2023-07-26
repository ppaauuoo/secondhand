<script>

</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col ">
        <slot></slot>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay " />
		<ul class="menu p-4 w-80 h-full bg-base-200">
			<!-- Sidebar content here -->
			<li><a href="/" class="btn btn-ghost normal-case text-lg mx-4">Home</a></li>
			<li><a href="/" class="btn btn-ghost normal-case text-lg mx-4">เข้าสู่ระบบ / สมัครสมาชิก</a></li>
		</ul>
	</div>
</div>


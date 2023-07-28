<script>

    export let items    
</script>


<div class="dropdown">
    <button class="btn btn-ghost btn-circle">
        <div class="indicator">
            <i class="fa-regular fa-comment fa-lg" />
            <span class="badge badge-xs badge-primary indicator-item invisible sm:visible" />
        </div>
    </button>
    <ul class="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 text-neutral">
        {#each items as item}
            <li><a href="/chat/{item}">{item}</a></li>
        {/each}
    </ul>
</div>



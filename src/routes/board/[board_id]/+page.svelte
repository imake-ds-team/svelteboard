<script lang="ts">
    // @ts-nocheck
    import type { PageProps } from "../../$types";
    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>/{data.board_abbr}/: {data.board_name}</title>
</svelte:head>

{#each data.board_threads as thread}
    <div class="post my-5 p-2 w-fit">
        <div class="dropdown absolute float-end">
            <span>...</span>
            <div class="dropdown-content w-fit">
                <form action="/thread-delete?id={thread.id}" method="POST">
                    <input type="password" name="tripcode-password" placeholder="Tripcode password (for thread deletion)">
                    <button type="submit">Delete</button>
                </form>
            </div>
        </div>
        <p>
            <span class="text-sm"
                ><a href="{data.board_abbr}/{thread.id}/">No. {thread.id}</a
                ></span
            >
            {thread.title}
        </p>
        {#if thread.gtripcode}
            <p class="text-xs">{thread.gtripcode}</p>
        {:else}
            <p class="text-xs">Anonymous</p>
        {/if}

        <p class="text-xs">{thread.inserted_at}</p>

        <img
            src={thread.image_url}
            class="post-image"
            alt="Image for thread titled '{thread.title}'"
        />
        <p>{thread.content}</p>
    </div>
{/each}

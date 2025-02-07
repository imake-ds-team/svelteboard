<script lang="ts">
    // @ts-nocheck
    import type { PageProps } from "../../$types";
    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>/{data.board_abbr}/: {data.board_name}</title>
</svelte:head>

{#each data.board_threads as thread}
    <div class="post p-2 w-fit">
        <p>{thread.gtripcode}</p>
        <a href="{data.board_abbr}/{thread.id}/">{thread.title}</a>
        <p>{thread.inserted_at}</p>
        <img
            src={thread.image_url}
            class="post-image"
            alt="Image for thread titled '{thread.title}'"
        />
        <p>{thread.content}</p>
        <a href="/">Reply</a>
    </div>
{/each}

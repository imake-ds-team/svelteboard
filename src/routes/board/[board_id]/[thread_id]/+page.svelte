<script lang="ts">
    // @ts-nocheck
    import type { PageProps } from "../../$types";
    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>/{data.board_abbr}/: {data.board_name}</title>
</svelte:head>

<h3><a href="{data.board_abbr}/{data.thread.id}/">{data.thread.title}</a></h3>
<p>{data.thread.gtripcode}</p>
<p>{data.thread.inserted_at}</p>
<p>{data.thread.content}</p>
<a href="/">Reply</a>

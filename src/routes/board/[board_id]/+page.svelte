<script lang="ts">
    // @ts-nocheck
    import type { PageProps } from "../../$types";
    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>/{data.board_abbr}/: {data.board_name}</title>
</svelte:head>

{#each data.board_threads as thread}
    <div class="grid grid-rows-2 post my-2">
        <div class="grid grid-cols-3 text-center">
            <div>
                <p>{thread.gtripcode}</p>
            </div>
            <div>
                <h3>
                    <a href="{data.board_abbr}/{thread.id}/">{thread.title}</a>
                </h3>
            </div>

            <div>
                <p>{thread.inserted_at}</p>
            </div>
        </div>
        <div>
            <p>{thread.content}</p>
            <a href="/">Reply</a>
        </div>
    </div>
{/each}

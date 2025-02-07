<script lang="ts">
    import type { PageProps } from "../../[board_id]/$types";
    let { data }: PageProps = $props();
</script>

<div class="min-h-screen">
    <div>
        <div class="grid place-content-center text-center mt-5">
            <div>
                <h1 class="text-3xl">/{data.board_abbr}/: {data.board_name}</h1>
                <p>{data.board_description}</p>
            </div>
            <div>
                <form class="" method="POST" action="/post/">
                    <input type="text" placeholder="Thread title" name="title" />
                    <textarea name="content" placeholder="Thread content"></textarea>
                    <input type="text" placeholder="Password (for tripcode)" name="tripcode-password">
                    <button type="submit">Post</button>
                </form>
            </div>
            <div>
                <ul>
                    {#each data.board_threads as thread}
                        <li>
                            <div>
                                <h3>{thread.thread_title}</h3>
                                <p>{thread.thread_content}</p>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>

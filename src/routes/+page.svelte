<script lang="ts">
    // @ts-nocheck
    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>{data.global_name}</title>
</svelte:head>

<div class="flex h-screen">
    <div class="container container-sm m-auto px-10 sm:p-5 text-center">

        <img src={"/qdf.png"} class="mx-auto logo" alt="Queer Defense Front logo">
        <p>{data.global_description}</p>
        <table class="table-fixed mb-2 border-spacing-x-5 w-full mt-2">
            <thead>
                <tr>
                    <th>Welcome!</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {data.global_welcome_message}
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="table-fixed mb-2 border-spacing-x-5 w-full">
            <thead>
                <tr>
                    <th>Abbreviation</th> <th>Board Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {#each data.global_boards as board: Object}
                    <tr class="odd:tr-odd">
                        <td
                            ><a href="/board/{board.abbreviation}/"
                                >/{board.abbreviation}/</a
                            ></td
                        >
                        <td>{board.name}</td>
                        <td>{board.description}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <div class="grid gap-2 grid-cols-auto sm:grid-cols-2 grid-flow-row-dense">
            <div>
                <table class="table-fixed border-spacing-x-5 caption-included w-full">
                    <thead>
                        <tr>
                            <th>Board</th>
                            <th>Parent thread</th>
                            <th>Reply</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.global_new_posts as post}
                            <tr class="odd:tr-odd" style="max-width:100%;">
                                <td
                                    ><a href="/board/{post.parent_thread_board}/"
                                        >/{post.parent_thread_board}</a
                                    ></td
                                >
                                <td
                                    ><a
                                        href="/board/{post.parent_thread_board}/{post.parent_thread_id}#{post.id}/"
                                        >No. {post.parent_thread_id}</a
                                    ></td
                                >
                                <td><p>{post.content}</p></td>
                                {#if post.gtripcode == null}
                                    <td>{post.gtripcode}</td>
                                {:else}
                                    <td>Anonymous</td>
                                {/if}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            <div>
                <table class="table-fixed border-spacing-x-5 w-full">
                    <thead>
                        <tr>
                            <th>Board</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.global_new_threads as thread}
                            <tr class="odd:tr-odd" style="max-width:100%;">
                                <td
                                    ><a href="/board/{thread.board}/"
                                        >/{thread.board}/</a
                                    ></td
                                >
                                <td><a href="/board/{thread.board}/{thread.id}">{thread.title}</a></td>
                                <td><p>{thread.content}</p></td>
                                {#if thread.gtripcode == null}
                                    <td>{thread.gtripcode}</td>
                                {:else}
                                    <td>Anonymous</td>
                                {/if}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
       
       
    </div>
</div>

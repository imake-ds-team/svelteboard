<script lang="ts">
    // @ts-nocheck
    import type { PageProps } from "../../$types";
    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>/{data.board_abbr}/: {data.board_name}</title>
</svelte:head>
<div class="">
    <div class="container container-sm p-10 m-auto text-center">
        <div>
            <h1 class="text-3xl">
                <strong>/{data.board_abbr}/: {data.board_name}</strong>
            </h1>
            <p><strong>{data.board_description}</strong></p>
        </div>
        <div>
            <form
                class="p-5 w-1/2 mx-auto"
                method="POST"
                action="/reply?board={data.board_abbr}&id={data.thread_id}"
                enctype="multipart/form-data"
            >
                <textarea
                    class="w-full mb-2"
                    name="content"
                    placeholder="Post content"
                    minlength="10"
                    maxlength="1200"
                    required
                ></textarea>
                <br />
                <input
                    type="password"
                    placeholder="Password (for tripcode)"
                    name="tripcode-password"
                    class="w-full mb-2"
                />
                <br />
                <input type="file" class="mb-2" name="image-content" accept="image/*" />
                <br />
                <button class="btn" type="submit">Reply</button>
            </form>
        </div>
        <div class="text-start mx-auto">
            <div class="post my-5 p-2 w-fit">
                <div class="dropdown absolute float-end">
                    <span>...</span>
                    <div class="dropdown-content w-fit">
                        <form
                            action="/thread-delete?id={data.thread.id}"
                            method="POST"
                        >
                            <input
                                type="password"
                                name="tripcode-password"
                                placeholder="Tripcode password (for thread deletion)"
                            />
                            <button type="submit">Delete</button>
                        </form>
                    </div>
                </div>
                <p>
                    <span class="text-sm"
                        ><a href="{data.board_abbr}/{data.thread.id}/"
                            >No. {data.thread.id}</a
                        ></span
                    >
                    {data.thread.title}
                </p>
                {#if data.thread.gtripcode}
                    <p class="text-xs">{data.thread.gtripcode}</p>
                {:else}
                    <p class="text-xs">Anonymous</p>
                {/if}

                <p class="text-xs">{data.thread.inserted_at}</p>

                <img
                    src={data.thread.image_url}
                    class="post-image"
                    alt="Image for thread titled '{data.thread.title}'"
                />
                <p>{data.thread.content}</p>
            </div>
            {#each data.posts as post}
                <div class="post my-5 p-2 w-fit">
                    <div class="dropdown absolute float-end">
                        <span>...</span>
                        <div class="dropdown-content w-fit">
                            <form
                                action="/reply-delete?id={data.thread.id}"
                                method="POST"
                            >
                                <input
                                    type="password"
                                    name="tripcode-password"
                                    placeholder="Tripcode password (for post deletion)"
                                />
                                <button type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                    <p>
                        <span class="text-sm"
                            ><a
                                href="{data.board_abbr}/{data.thread.id}#{post.id}"
                                >No. {data.thread.id}/{post.id}</a
                            ></span
                        >
                    </p>
                    {#if data.thread.gtripcode}
                        <p class="text-xs">{post.gtripcode}</p>
                    {:else}
                        <p class="text-xs">Anonymous</p>
                    {/if}

                    <p class="text-xs">{post.inserted_at}</p>

                    {#if data.thread.image_url === ""}
                    <img
                        src={post.image_url}
                        class="post-image"
                        alt="Image for post created by '{post.gtripcode}'"
                    />
                    {/if}
                    <p>{post.content}</p>
                </div>
            {/each}
        </div>
    </div>
</div>

<script lang="ts">
    // @ts-nocheck
    import type { PageProps } from "../../$types";
    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>/{data.board_abbr}/: {data.board_name}</title>
</svelte:head>

<div class="flex h-screen">
    <div class="m-auto text-center">
        <div>
            <h1 class="text-3xl">
                <strong>/{data.board_abbr}/: {data.board_name}</strong>
            </h1>
            <p><strong>{data.board_description}</strong></p>
        </div>
        <div>
            <form
                class="p-5"
                method="POST"
                action="/post/?board={data.board_abbr}"
            >
                <input
                    type="text"
                    placeholder="Thread title"
                    name="title"
                    required
                />
                <br />
                <textarea name="content" placeholder="Thread content" required
                ></textarea>
                <br />
                <input
                    type="text"
                    placeholder="Password (for tripcode)"
                    name="tripcode-password"
                />
                <br />
                <input type="file" name="image-content" accept="image/*"/>
                <br />
                <button class="btn" type="submit">Post</button>
            </form>
        </div>
        <div class="text-start">
            <div>
                <h3><a href="{data.board_abbr}/{data.thread.id}/">{data.thread.title}</a></h3>
                <p>{data.thread.gtripcode}</p>
                <p>{data.thread.inserted_at}</p>
                <p>{data.thread.content}</p>
                <a href="/">Reply</a>
            </div>
        </div>
    </div>
</div>

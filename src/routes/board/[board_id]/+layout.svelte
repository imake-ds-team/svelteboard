<script lang="ts">
    // @ts-nocheck
    import type { PageProps } from "../../$types";
    import type { LayoutProps } from "./$types";
	let { data, children }: LayoutProps = $props();
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
        <div class="text-center">
            <form
                class="p-5 w-1/2 mx-auto"
                method="POST"
                action="/thread-post?board={data.board_abbr}"
                enctype="multipart/form-data"
            >
                
                <input
                    type="text"
                    placeholder="Thread title"
                    name="title"
                    class="w-full mb-2"
                    minlength="5"
                    maxlength="99"
                    required
                />
                <br />
                <textarea class="w-full mb-2" name="content" placeholder="Thread content" minlength="10" maxlength="1200" required
                ></textarea>
                <br />
                <input
                    type="password"
                    placeholder="Password (for tripcode)"
                    name="tripcode-password"
                    class="w-full mb-2"
                />
                <br />
                <input type="file" class="mb-2" name="image-content" accept="image/*" required/>
                <br />
                <button class="btn" type="submit">Post</button>
            </form>
            {#if data.error !== ""}
                <p class="error">
                    {#if data.error === "2"}
                        Please fill out everything!
                    {:else if data.error === "1"}
                        Image is too large! Must be lesser than 10MB!
                    {:else if data.error === "3"}
                        Serverside error, please inform admin!
                    {:else if data.error === "4"}
                        Incorrect tripcode!
                    {/if}
                </p>
            {/if}
        </div>
        <div class="text-start mx-auto">
            {@render children()}
            
        </div>
    </div>
</div>

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
        <div>
            <form
                class="p-5 w-1/2 mx-auto"
                method="POST"
                action="/post/?board={data.board_abbr}"
                enctype="multipart/form-data"
            >
                
                <input
                    type="text"
                    placeholder="Thread title"
                    name="title"
                    class="w-full"
                    required
                />
                <br />
                <textarea class="w-full" name="content" placeholder="Thread content" required
                ></textarea>
                <br />
                <input
                    type="password"
                    placeholder="Password (for tripcode)"
                    name="tripcode-password"
                    class="w-full"
                />
                <br />
                <input type="file" name="image-content" accept="image/*"/>
                <br />
                <button class="btn" type="submit">Post</button>
            </form>
        </div>
        <div class="text-start mx-auto">
            {@render children()}
            
        </div>
    </div>
</div>

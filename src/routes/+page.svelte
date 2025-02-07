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
        <h1 class="text-3xl">{data.global_name}</h1>
        <p>{data.global_description}</p>
        <table class="table-auto border-spacing-x-5 w-full my-5 "  >
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
        <table class="table-auto border-spacing-x-5  w-full">
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
                        <td>{board.name}</td> <td>{board.description}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <ul></ul>
    </div>
</div>

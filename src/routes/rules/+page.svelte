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
        <table class="table-auto border-spacing-x-5 w-full">
            <thead>
                <tr>
                    <th>Rules</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ol>
                            <li>No bigotry</li>
                            <li>No spamming</li>
                        </ol>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

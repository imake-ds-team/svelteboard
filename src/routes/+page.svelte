<script lang="ts">
    import type { PageProps } from './$types';
    let {data}: PageProps = $props();
</script>
<div class="grid place-content-center text-center mt-5">
    <h1 class="text-3xl">{data.global_name}</h1>
    <p>{data.global_description}</p>
</div>

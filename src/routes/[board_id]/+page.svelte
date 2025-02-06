<script lang="ts">
    import type { PageProps } from './$types';
    let {data}: PageProps = $props();
    
</script>

<div class="grid place-content-center text-center mt-5">
    <h1 class="text-3xl">/{data.board_abbr}/: {data.board_name}</h1>
    <p>{data.board_description}</p>
    <ul>
        
    </ul>
    
</div>

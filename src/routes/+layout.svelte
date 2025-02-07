<script lang="ts">
	import "../app.css";
    import type { LayoutProps } from "./$types";
	let { data, children }: LayoutProps = $props();
</script>

<div class="min-h-screen">
	<div class="sticky top-[0vh] text-center">
		{#each data.global_boards as board}
			<p>{board.name}</p>
		{/each}
	</div>
	<div>{@render children()}</div>
	<div class="sticky top-[100vh] text-center mb-5">
		<p>
			Created by @eskaliert680 on <a
				href="https://github.com/imake-ds-team/svelteboard">GitHub</a
			>.
		</p>
	</div>
</div>

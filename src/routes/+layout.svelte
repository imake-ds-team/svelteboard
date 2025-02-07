<script lang="ts">
	import type { LayoutProps } from "./$types";
	import '../app.css'
	let { data, children }: LayoutProps = $props();
</script>

<div class="min-h-screen">
	<div class="sticky top-[0vh] text-center navbar">
		<p>
			<span><a href="/">home</a></span>
			<span><a href="/admin/">admin</a></span>
			{#each data.global_boards as board}
				<span
					><a href="/board/{board.abbreviation}/"
						>/{board.abbreviation}/</a
					></span
				>{/each}
		</p>
	</div>
	<div>{@render children()}</div>
	<div class="sticky top-[100vh] text-center mb-5">
		<p><span><a href="/rules/">rules</a></span><span><a href="https://github.com/imake-ds-team/svelteboard">svelteboard</a></span></p>
	</div>
</div>

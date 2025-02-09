<script lang="ts">
	import type { LayoutProps } from "./$types";
	import "../app.css";
	let { data, children }: LayoutProps = $props();
</script>

<div class="min-h-screen">
	<div class="sticky top-[0vh] navbar">
		<p>
			<span class="text-left"
				><a href="/">home</a>
				|
			</span>
			<span>
				{#each data.global_boards as board}
					<a style="margin-right:2px;margin-left:2px;"href="/board/{board.abbreviation}/"
						>/{board.abbreviation}/</a
					>
				{/each}
			</span>
		</p>
	</div>
	<div class="flex-grow">{@render children()}</div>
	<div class="text-center mb-5">
		<p>
			<span><a href="/rules/">rules</a></span><span
				><a href="https://github.com/imake-ds-team/svelteboard"
					>svelteboard</a
				></span
			>
		</p>
	</div>
</div>

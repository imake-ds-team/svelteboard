<script lang="ts">
	import "../app.css";
    import type { LayoutProps } from "./$types";
	import "./style.css";
	let { data, children }: LayoutProps = $props();
</script>

<div class="min-h-screen">
	<div>{@render children()}</div>
	<div class="sticky top-[100vh] text-center mb-5">
		<p>
			Created by @eskaliert680 on <a
				href="https://github.com/imake-ds-team/svelteboard">GitHub</a
			>.
		</p>
	</div>
</div>

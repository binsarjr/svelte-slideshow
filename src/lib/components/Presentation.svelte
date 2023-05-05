<script lang="ts">
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import { onMount } from 'svelte';
	import type Reveal from 'reveal.js';

	export let config: Reveal.Options | undefined = undefined;
	export let height = '100%';
	export let width = '100%';

	let el: HTMLDivElement;
	let api: Reveal.Api;
	onMount(async () => {
		const RevealJs = (await import('reveal.js')).default;
		// @ts-ignore
		api = new RevealJs(el, config);
		api.initialize();
	});
</script>

<div bind:this={el} style:height style:width class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>

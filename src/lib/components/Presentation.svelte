<script lang="ts">
	import { onMount } from 'svelte';
	import type Reveal from 'reveal.js';

	export let config: Reveal.Options | undefined = undefined;
	export let height = '100%';
	export let width = '100%';

	let el: HTMLDivElement;
	let RevealJs: Reveal.Api;
	let api: Reveal.Api;

	// if in vite
	try {
		if (import.meta.hot) {
			import.meta.hot.on('vite:afterUpdate', () => {
				reInit();
			});
		}
	} catch (error) {
		console.warn(error, 'nevermind');
	}

	// wait if config is change
	$: if (config && typeof window != 'undefined' && api) reInit();

	const init = () => {
		// if config is empty then config value have to be undefined
		if (config) if (!Object.keys(config).length) config = undefined;

		// @ts-ignore
		api = new RevealJs(el, config);
		api.initialize();
	};
	const reInit = () => {
		api.destroy();
		init();
	};
	onMount(async () => {
		RevealJs = (await import('reveal.js')).default;
		init();
	});
</script>

<div bind:this={el} style:height style:width class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>

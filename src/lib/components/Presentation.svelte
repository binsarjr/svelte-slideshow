<script lang="ts">
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import { onMount } from 'svelte';
	import type Reveal from 'reveal.js';

	export let config: Reveal.Options | undefined = undefined;
	export let height = '100%';
	export let width = '100%';

	let el: HTMLDivElement;
	let RevealJs: Reveal.Api;
	let api: Reveal.Api;
	
	// wait if config is change
	$: if (config && typeof window != 'undefined' && api) {
		api.destroy();
		init();
	}

	const init = () => {
		// if config is empty then config value have to be undefined
		if(config)
			if(!Object.keys(config).length)
				config=undefined

		// @ts-ignore
		api = new RevealJs(el, config);
		api.initialize();
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

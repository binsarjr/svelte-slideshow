<script lang="ts">
	import Transitions from './../../../internal/Transitions.svelte';
	import Media from './../../../internal/Media.svelte';
	import Math from './../../../internal/Math.svelte';
	import Markdown from './../../../internal/Markdown.svelte';
	import LayoutHelpers from './../../../internal/LayoutHelpers.svelte';
	import Barebones from './../../../internal/Barebones.svelte';
	import Backgrounds from './../../../internal/Backgrounds.svelte';
	import AutoAnimate from './../../../internal/AutoAnimate.svelte';
	import GettingStarted from './../../../internal/GettingStarted.svelte';
	import Love from './../../../internal/Love.svelte';
	import 'reveal.js/plugin/highlight/monokai.css';
	import Title from './../../../internal/Title.svelte';
	import type Reveal from 'reveal.js';
	import Presentation from '../../../lib/components/Presentation.svelte';
	import { onMount } from 'svelte';
	import Slide from '../../../lib/components/Slide.svelte';
	let config: Reveal.Options = {};

	onMount(async () => {
		const Highlight = (await import('reveal.js/plugin/highlight/highlight')).default;
		const Markdown = (await import('reveal.js/plugin/markdown/markdown')).default;
		const MathReveal = (await import('reveal.js/plugin/math/math')).default;
		const RevealNotes = (await import('reveal.js/plugin/notes/notes')).default;

		// trigger change
		// read about svelte binding
		config = {
			plugins: [Highlight, RevealNotes, Markdown, MathReveal],
			hash: true,
			mathjax2: {
				config: 'TeX-AMS_HTML-full',
				TeX: {
					Macros: {
						R: '\\mathbb{R}',
						set: ['\\left\\{#1 \\; ; \\; #2\\right\\}', 2]
					}
				}
			}
		};
	});
</script>

<Presentation {config}>
	<Slide>
		<p>Example 1</p>
		<p>
			Get from <a href="https://github.com/rajasegar/svelte-slides" target="_blank" rel="noreferrer"
				>rajasegar/svelte-slides</a
			>
		</p>
	</Slide>
	<Title />
	<Love partner={['Svelte', 'Reveal.js']} />
	<GettingStarted />
	<AutoAnimate />
	<Backgrounds />
	<Barebones />
	<LayoutHelpers />
	<Markdown />
	<Math />
	<Media />
	<Transitions />
</Presentation>

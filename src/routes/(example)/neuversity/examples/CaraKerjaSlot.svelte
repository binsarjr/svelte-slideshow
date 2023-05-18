<script lang="ts">
	import ContohNamedSlot from './ContohNamedSlot.svelte'
	import 'reveal.js/plugin/highlight/monokai.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Presentation from '../../../../lib/components/Presentation.svelte';
	import Slide from '../../../../lib/components/Slide.svelte';

	import type { Options } from 'reveal.js';
	import { Code } from '../../../../lib/index.js';
	import ContohSlotDefault from './ContohSlotDefault.svelte';
	let config: Options = {};
	const load = async () => {
		const Highlight = (await import('reveal.js/plugin/highlight/highlight')).default;
		const Markdown = (await import('reveal.js/plugin/markdown/markdown')).default;
		const RevealNotes = (await import('reveal.js/plugin/notes/notes')).default;

		config = {
			embedded: false,
			plugins: [Highlight, RevealNotes, Markdown],
			hash: true
		};
	};
	$: if (browser) {
		load();
	}

	let codeId = 'code-animation';
</script>

<Presentation {config}>
	<Slide autoAnimation>
		<h1>Cara Kerja Slot di Svelte</h1>
		<small data-id="description"
			>"slot" digunakan untuk memasukkan konten ke dalam komponen. Slot memungkinkan komponen untuk
			menerima konten dinamis yang dapat bervariasi dari satu penggunaan komponen ke penggunaan
			komponen lainnya.</small
		>
	</Slide>

	<ContohSlotDefault />
	<ContohNamedSlot/>
	<Slide>
		<h1>Terima kasih</h1>
		<p>Semoga Bermanfaat</p>
	</Slide>
</Presentation>

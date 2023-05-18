<script lang="ts">
	import 'reveal.js/plugin/highlight/monokai.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Presentation from '../../../../lib/components/Presentation.svelte';
	import Slide from '../../../../lib/components/Slide.svelte';

	import type { Options } from 'reveal.js';
	import { Code } from '../../../../lib/index.js';
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

	let codeId = 'code-animation'
</script>

<Presentation {config}>
	<Slide autoAnimation>
		<h1>Cara Kerja Slot</h1>
		<small data-id="description"
			>"slot" digunakan untuk memasukkan konten ke dalam komponen. Slot memungkinkan komponen untuk
			menerima konten dinamis yang dapat bervariasi dari satu penggunaan komponen ke penggunaan
			komponen lainnya.</small
		>
	</Slide>
	<Slide autoAnimation>
		<small data-id="subtitle">Buat komponen seperti dibawah ini dengan nama: `Welcome`</small>
		<Code id={codeId} lineNumbers="3" noescape trim
			>{`
<div>
    <h2>Selamat datang di halaman</h2>
    <slot></slot>
</div>
`.trim()}</Code
		>
		<small data-id="description"
			>Dalam contoh di atas, slot digunakan untuk menempatkan konten apa pun di dalam komponen.
			Ketika komponen ini digunakan, konten yang diberikan akan dimasukkan ke dalam slot tersebut.
			Misalnya:</small
		>
		<Code  id={codeId} lineNumbers="2-3" noescape trim
			>{`
<Welcome>
  <p>Ini adalah paragraf dalam slot komponen.</p>
  <button>Tombol dalam slot komponen</button>
</Welcome>
`.trim()}</Code
		>
	</Slide>
	
	<Slide autoAnimation>
		<small data-id="subtitle">Sehingga kode akhir yang kita dapatkan menjadi seperti ini</small>
		<Code id={codeId} lineNumbers="3-4" 
			>{`
<div>
    <h2>Selamat datang di halaman</h2>
    <p>Ini adalah paragraf dalam slot komponen.</p>
  	<button>Tombol dalam slot komponen</button>
</div>
`.trim()}</Code
		>
		
	</Slide>

</Presentation>

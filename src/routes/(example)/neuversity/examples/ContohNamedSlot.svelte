<script>
	import Code from '../../../../lib/components/Code.svelte';
	import Slide from '../../../../lib/components/Slide.svelte';

	const codeId = 'code-animation-named-slot';
</script>

<Slide autoAnimation>
	<h1>Cara Kerja Named Slot</h1>
	<small>
		Named slot memungkinkan Anda untuk menentukan slot komponen yang lebih spesifik untuk
		menempatkan konten.</small
	>
</Slide>
<Slide autoAnimation>
	<small data-id="subtitle">Buat komponen seperti dibawah ini dengan nama: `Welcome`</small>
	<Code id={codeId} class="html" lineNumbers="|4,10-11|5,12-15" noescape trim
		>{`
<!-- Welcome.svelte -->
<div>
	<h2>Selamat datang di halaman</h2>
	<slot></slot>
	<slot name="footer"></slot>
</div>

<!-- +page.svelte -->
<Welcome>
	<p>Ini adalah paragraf dalam slot komponen.</p>
	<button>Tombol dalam slot komponen</button>
	<div slot="footer">
		<p>Ini adalah paragraf dalam named slot "footer".</p>
		<button>Tombol dalam named slot "footer"</button>
	</div>
</Welcome>
`.trim()}</Code
	>
	<small
		>Dalam contoh di atas, kita memiliki komponen "Welcome" dengan dua slot.Slot pertama menggunakan
		slot default (tanpa nama) dan slot kedua menggunakan named slot dengan nama "footer"</small
	>
</Slide>


<Slide autoAnimation>
	<small data-id="subtitle">Sehingga kode akhir yang kita dapatkan menjadi seperti ini</small>
	<Code class="html" id={codeId} lineNumbers="5-8|3-4|"
		>{`
<div>
	<h2>Selamat datang di halaman</h2>
	<p>Ini adalah paragraf dalam default slot komponen.</p>
	<button>Tombol dalam default slot komponen</button>
	<div>
		<p>Ini adalah paragraf dalam named slot "footer".</p>
		<button>Tombol dalam named slot "footer"</button>
	</div>
</div>
`.trim()}</Code
	>
</Slide>

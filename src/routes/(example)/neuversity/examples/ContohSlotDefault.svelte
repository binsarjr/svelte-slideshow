<script>
	import Code from '../../../../lib/components/Code.svelte';
	import Slide from '../../../../lib/components/Slide.svelte';

	const codeId = 'code-animation';
</script>

<Slide autoAnimation>
	<small data-id="subtitle">Buat komponen seperti dibawah ini dengan nama: `Welcome`</small>
	<Code id={codeId} lineNumbers noescape trim
		>{`
<div>
    <h2>Selamat datang di halaman</h2>
    <slot></slot>
</div>
`.trim()}</Code
	>
	<small
		>Dalam contoh di atas, slot digunakan untuk menempatkan konten apa pun di dalam komponen. Ketika
		komponen ini digunakan, konten yang diberikan akan dimasukkan ke dalam slot tersebut. Misalnya:</small
	>
	<Code lineNumbers noescape trim
		>{`
<Welcome>
  <p>Ini adalah paragraf dalam slot komponen.</p>
  <button>Tombol dalam slot komponen</button>
</Welcome>
`.trim()}</Code
	>
</Slide>
<Slide autoAnimation>
	<small>Perhatikan baris yang di highlight</small>
	<Code id={codeId} lineNumbers="3" noescape trim
		>{`
<div>
    <h2>Selamat datang di halaman</h2>
    <slot></slot>
</div>
`.trim()}</Code
	>
	<small>
		{`
        "<slot></slot>" akan digantikan oleh konten yang ada di dalam komponen "<Welcome></Welcome>"
        `.trim()}</small
	>
	<Code lineNumbers="2-3" noescape trim
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

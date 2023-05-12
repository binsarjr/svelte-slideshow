<script lang="ts">
	export let trim: boolean | undefined = undefined;
	export let noescape: boolean | undefined = undefined;
	export let lineNumbers: boolean | string | undefined = undefined;
	export let lineStartFrom: boolean | string | undefined = undefined;
</script>

<pre><code
		data-trim={trim}
		data-noescape={noescape}
		data-line-numbers={lineNumbers}
		data-ln-start-from={lineStartFrom}><slot /></code
	></pre>

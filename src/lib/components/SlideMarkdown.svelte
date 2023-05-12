<script lang="ts">
	export let url = '';
	export let seperator = '';
	export let seperatorVertical = '';
	export let seperatorNotes = '';
	export let charset = '';
</script>

<section
	data-markdown={url}
	data-separator={seperator}
	data-separator-vertical={seperatorVertical}
	data-separator-notes={seperatorNotes}
	data-charset={charset}
>
	<slot />
</section>

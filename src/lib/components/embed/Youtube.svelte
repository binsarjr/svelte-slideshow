<script lang="ts">
	export let url: string;
	export let width = 560;
	export let height = 315;
	const regex = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9]*)/;
	let id: string;
	const found = url.match(regex);
	if (found) {
		[, id] = found;
	}
</script>

<iframe
	{width}
	{height}
	src="https://www.youtube.com/embed/{id}"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
/>

<script lang="ts">
	// Visivility
	export let visibility: 'hidden' | 'uncounted' | undefined = undefined;
	// Color Backgrounds
	export let bgColor = '';

	// Gradient Backgrounds
	export let bgGradient = '';
	// Image Backgrounds
	export let bgImage = '';
	export let bgSize = '';
	export let bgPosition = '';
	// See background-repeat on MDN.
	export let bgRepeat = '';
	export let bgOpacity = '';
	// Video Backgrounds
	export let bgVideo = '';
	export let bgVideoLoop = '';
	export let bgVideoMuted = '';
	// Iframe Backgrounds
	export let bgIframe = '';
	export let bgInteractive: boolean | undefined = undefined;
	// Transitions
	export let transition: string | undefined = undefined;
	export let transitionSpeed: string | undefined = undefined;
	// Animation
	export let autoAnimation: boolean | undefined = undefined;
	export let autoAnimationRestart: boolean | undefined = undefined;

	// Markdown Setting
	export let markdown: boolean | string | undefined = undefined;
	markdown = typeof markdown == 'boolean' ? '' : markdown;

	export let seperator = '';
	export let seperatorVertical = '';
	export let seperatorNotes = '';
	export let charset = '';
</script>

<section
	data-visibility={visibility}
	data-background-color={bgColor}
	data-background-gradient={bgGradient}
	data-background-image={bgImage}
	data-background-size={bgSize}
	data-background-position={bgPosition}
	data-background-repeat={bgRepeat}
	data-background-opacity={bgOpacity}
	data-background-video={bgVideo}
	data-background-video-loop={bgVideoLoop}
	data-background-video-muted={bgVideoMuted}
	data-background-iframe={bgIframe}
	data-background-interactive={bgInteractive}
	data-markdown={markdown}
	data-separator={seperator}
	data-separator-vertical={seperatorVertical}
	data-separator-notes={seperatorNotes}
	data-charset={charset}
	data-transition={transition}
	data-transition-speed={transitionSpeed}
	data-auto-animate={autoAnimation}
	data-auto-animate-restart={autoAnimationRestart}
	{...$$restProps}
>
	<slot />
</section>

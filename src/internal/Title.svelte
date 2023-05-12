<script>
	import Code from './../lib/components/Code.svelte'
	import Slide from './../lib/components/Slide.svelte'
    import { onMount } from 'svelte';

    let title;
    onMount(() => {
        let timeout;
        title = new Promise(resolve => {
            timeout = setTimeout(() => resolve('Whats nice together?'), 2_000);
        });
        () => clearTimeout(timeout);
    });
</script>

<Slide>
    <h2>
        {#await title}
            Wait a sec...
        {:then result}
            {result}
        {/await}
    </h2>

		<Code lineNumbers trim noescape>{
    `
const name = "hello world";
if(name === 'hello') {
  console.log('world');
}
    `.trim()
    }
		</Code>
</Slide>
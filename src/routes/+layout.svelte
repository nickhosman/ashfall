<script lang="ts">
	export const prerender = true;

	import '../app.css';
	import topMask from "$lib/images/top_0002.png"
	import { page } from '$app/state'

	let { children } = $props();

	const links = [
		{ page: "/", text: "Setting" },
		{ page: "/factions", text: "Factions" },
		{ page: "/classes", text: "Classes" },
		{ page: "/species", text: "Species" }
	];

	let visibleLinks = $derived(
		links.filter(link => page.url.pathname !== link.page)
	);
</script>

<!-- Header -->
<div class="w-full h-84 overflow-hidden relative text-center">
    <div class="absolute top-0 left-0 text-center w-full">
        <h1 class="z-1 absolute inset-x-0 pt-12 flex items-center justify-center
        text-8xl font-bold text-white tracking-widest
        drop-shadow-[0_6px_20px_rgba(0,0,0,0.85)]">
        Ashfall
        </h1>
    </div>
    <img
        class="w-full bottom-24 min-w-4xl relative"
        src="https://www.tribality.com/wp-content/uploads/2017/06/wild-west-setting.jpg"
        alt="wild west coach with horses"
        style={`
            mask-image: url(${topMask});
            -webkit-mask-image: url(${topMask});
            `} >
</div>

{@render children()}

<!-- Navigation -->
<div class="w-full flex flex-wrap items-center justify-center
	gap-3 sm:gap-4 py-10 text-lg sm:text-xl md:text-2xl">

	{#each visibleLinks as link, i}
		<a href={link.page}
		   class="hover:text-amber-400 transition-colors duration-200">
			{link.text}
		</a>

		{#if i < visibleLinks.length - 1}
			<span class="text-stone-500">&bull;</span>
		{/if}
	{/each}
</div>

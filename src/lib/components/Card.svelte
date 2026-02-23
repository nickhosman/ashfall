<script>
	export let title;
	export let image;
	export let id;

	import leftMask from '$lib/images/left_0003.webp';
	import rightMask from '$lib/images/right_0003.webp';
    import topMask from "$lib/images/top_0002.png";
    import { onMount } from "svelte";

    let isMobile = false;

    onMount(() => {
        const check = () => {
            isMobile = window.innerWidth < 760; // matches md breakpoint
        };

        check();
        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    });

	$: isEven = id % 2 === 0;
	$: maskUrl = isMobile ? topMask : isEven ? leftMask : rightMask;
</script>

<button
	class="w-full group text-left"
	on:click
>
	<div
		class="relative flex overflow-hidden border border-stone-300
			   transition-all duration-300
			   hover:shadow-xl/20 hover:-translate-y-0.5
			   bg-stone-50
               h-56 sm:h-64 md:h-72"
		class:flex-col={true}
		class:md:flex-row={isEven}
		class:md:flex-row-reverse={!isEven}
	>

		<!-- Image -->
		<div class="w-full md:w-2/3">
			<img
				src={image}
				alt=""
				class="absolute inset-0 w-full h-full object-cover object-top md:relative"
				style={`
					mask-image: url(${maskUrl});
					-webkit-mask-image: url(${maskUrl});
					mask-size: 100% 100%;
					-webkit-mask-size: 100% 100%;
					mask-repeat: no-repeat;
					-webkit-mask-repeat: no-repeat;
				`}
			/>
		</div>

		<!-- Title -->
		<div class="flex items-center justify-center md:w-1/3 p-6">
			<h2 class="font-bold text-2xl text-white md:text-black p-8 bg-radial md:bg-none from-black to-60% sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left z-1">
				{title}
			</h2>
		</div>

	</div>
</button>

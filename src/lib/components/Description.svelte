<script lang="ts">
	import { slide } from "svelte/transition";

	export let job;

	let selected = "";
	let subscript = "";

	function handleClick(id: string, desc: string) {
		selected = selected === id ? "" : id;
		subscript = subscript === desc ? "" : desc;
	}
</script>

<div
	transition:slide
	class="border border-stone-300 border-t-0
		   bg-stone-100 p-6 space-y-6"
>

	<!-- Sources -->
	<div class="flex flex-wrap justify-center gap-4 text-sm text-stone-500">
		{#if job.sources}
			{#each job.sources as source}
				<a href={source.url} target="_blank"
				   class="hover:text-amber-600 transition">
					{source.source}
				</a>
			{/each}
		{/if}

		{#if job.expanded}
			<a href={job.expanded} target="_blank"
			   class="hover:text-amber-600 transition">
				Expanded Options
			</a>
		{/if}
	</div>

	<!-- Main Description -->
	<p class="text-base sm:text-lg leading-relaxed">
		{job.description}
	</p>

	<!-- Sub Options -->
	{#if job.sub?.length > 0}
		<div class="grid md:grid-cols-1 grid-cols-2">
			<div class="flex justify-around"
                class:flex-col={true}
                class:md:flex-row={true}
                >
				{#each job.sub as thing}
					<button
						class="px-4 py-2 text-sm sm:text-base
							   border border-stone-400
							   md:rounded-t-lg
                               md:border-r
                               rounded-l-lg
                               md:rounded-bl-none
							   transition
							   hover:bg-stone-200"
                        class:md:w-full={true}
						class:bg-white={thing.id === selected}
						class:md:border-b-0={thing.id === selected}
                        class:border-r-0={thing.id === selected}
						on:click={() => handleClick(thing.id, thing.description)}
					>
						{thing.name}
					</button>

				{/each}
			</div>
            {#if subscript}
                <div
                    class="border border-stone-400 md:border-t-0 p-4 bg-white text-xs sm:text-base"
                    transition:slide
                >
                    {subscript}
                </div>
            {/if}
		</div>
	{/if}

</div>

<script lang="ts">
    import species from "$lib/data/species.json"
    import Card from "$lib/components/Card.svelte";
    import Description from "$lib/components/Description.svelte";

    let rarities = Object.keys(species);

    let openId = $state<number | null>(null);

    function toggle(id: number) {
        openId = openId === id ? null : id;
    };
</script>

<div class="flex flex-col items-center px-4 sm:px-6 py-12 w-full space-y-10">

	<div class="w-full max-w-6xl space-y-6">

		<h1 class="font-bold text-3xl sm:text-4xl">
			Species
		</h1>

		<div class="space-y-4 text-base sm:text-lg leading-relaxed">
			<p>
				When the Cataclysm fractured the world, those most closely tied to magic found themselves changed in numerous ways. Most notably, the longer lived peoples now find their lifespans drastically reduced.
			</p>
			<p>
				Below you will find a list of the allowed Species organized by rarity within the world along with descriptions of how they fit into the setting.
			</p>
		</div>

	</div>

	<div class="w-full max-w-6xl space-y-12">

		{#each rarities as rarity}
			<div>

				<h2 class="text-2xl sm:text-3xl text-stone-700 font-bold
						   border border-stone-300 border-b-0
						   rounded-t-lg p-3 capitalize">
					{rarity}
				</h2>

				<div class="flex flex-col">
					{#each species[rarity] as race}
						<Card
							title={race.name}
							image={race.img}
							id={race.id}
							on:click={() => toggle(race.id)}
						/>

						{#if openId === race.id}
							<Description job={race} />
						{/if}
					{/each}
				</div>

			</div>
		{/each}

	</div>

</div>

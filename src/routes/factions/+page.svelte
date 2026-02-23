<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import manufactor from "$lib/images/manufactor.jpg";
    import priest from "$lib/images/priest.jpg";
    import { slide } from 'svelte/transition';

    let factions = [
        {
            id: 1,
            title: "The Exaedium",
            image: manufactor,
            description: "The Exaedium is a sovereign nation of constructs made from wood, stone, metal, glass, and other crafted forms. Their people are centered in a single expanding city built to endure, its districts growing outward as more of their kind are brought home. Small groups known as Seekers travel the wastes in search of dormant constructs, lost companions, and fragments of forgotten memory. Each recovery strengthens the whole. The Exaedium is less concerned with conquest than with reunion, building a future by gathering what was scattered."
        },
        {
            id: 2,
            title: "Dawnmark Communion",
            image: priest,
            description: "The Dawnmark Communion is a structured theocracy led by a hierarchy of clergy who oversee mission houses, sun-marked garrisons, and growing settlements across the frontier. They teach that hardship refines the faithful and that strong communities are built through discipline and shared moral code. Communion priests serve as judges, healers, and community leaders in many frontier towns, offering structure where law is thin. Supporters see them as a guiding light in uncertain times. Critics worry about how tightly that light is held."
        },
        {
            id: 3,
            title: "Freeholds of Varn",
            image: "https://images.squarespace-cdn.com/content/v1/5dadaf88e03a4e6bb69307dd/1612949823539-8G1FXMGXTNXI6998G5V9/Gwent_cardart_syndicate_tax_collector.jpg?format=1000w",
            description: "The Freeholds of Varn are a network of semi-independent settlements, caravan companies, and trade families bound together by contract and mutual benefit. There is no single ruler of Varn, only agreements upheld through reputation and shared interest. Varnish influence can be found wherever rails are laid, mines are opened, or new towns are chartered. They fund expeditions, insure cargo, broker disputes, and keep trade moving between distant communities. In the frontier, if something is being built, bought, or carried west, chances are Varn has a hand in it."
        }
    ]

    let openId: number | null = null;

    function toggle(id: number) {
        openId = openId === id ? null : id;
    }
</script>

<div class="flex flex-col items-center px-4 sm:px-6 py-12 w-full">

	<div class="w-full max-w-6xl space-y-8">

		<h2 class="font-bold text-3xl sm:text-4xl">
			Major Factions
		</h2>

		<div class="flex flex-col w-full">

			{#each factions as faction}
				<Card
					title={faction.title}
					image={faction.image}
					id={faction.id}
					on:click={() => toggle(faction.id)}
				/>

				{#if openId === faction.id}
					<div
						transition:slide
						class="border border-stone-300 border-t-0
							   p-6 bg-stone-100 text-left">
						<p class="text-base sm:text-lg leading-relaxed">
							{faction.description}
						</p>
					</div>
				{/if}
			{/each}

		</div>
	</div>
</div>

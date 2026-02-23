<script lang="ts">
    import classes from '$lib/data/items.json'
    import Card from '$lib/components/Card.svelte';
    import Description from '$lib/components/Description.svelte';

    let sortedJobs = $derived(
        [...classes].sort((a, b) => a.name.localeCompare(b.name))
    );

    let openId = $state<string | null>(null);

    function toggle(id: string) {
        openId = openId === id ? null : id;
    }
</script>

<div class="flex flex-col items-center px-4 sm:px-6 py-12 w-full space-y-10">

	<div class="w-full max-w-6xl space-y-6">

		<h1 class="font-bold text-3xl sm:text-4xl">
			Classes
		</h1>

		<div class="space-y-4 text-base sm:text-lg leading-relaxed">

			<p>
				The weave is broken. As such, Arcane magic beyond simple spells is broken and unpredictable.
			</p>

			<p>
				Divine magics have their own complications since the lands have been abandoned by the gods.
			</p>

			<p>
				Due to this, certain familiar classes are
				<span class="font-bold italic">not</span>
				available for this campaign.
			</p>

			<p class="text-stone-400">
				Most notably Cleric, Druid, Sorcerer, and Wizard.
			</p>

		</div>

	</div>

	<div class="w-full max-w-6xl flex flex-col">

		{#each sortedJobs as job, i}
			<Card
				title={job.name}
				image={job.img}
				id={i}
				on:click={() => toggle(job.id)}
			/>

			{#if openId === job.id}
				<Description job={job} />
			{/if}
		{/each}

	</div>

</div>

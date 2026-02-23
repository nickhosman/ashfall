<script>
	import imgMask from "$lib/images/0001.webp";
	import imgMask2 from "$lib/images/0005.webp";
    import train from "$lib/images/train.png";
</script>

<div class="flex flex-col items-center">

	<!-- Intro Section -->
	<section class="w-full max-w-6xl px-4 space-y-4">
		<p class="text-xl sm:text-2xl font-bold text-stone-400">
			They say the world used to be different....
		</p>

		<p>
			Some of the old timers claim rivers ran through these parts that brought green life, and magic hummed quiet and tame beneath the soil. 'Course that all changed the Day the Sky Broke. Folks can't seem to agree on what caused it. Some say divine wrath. Others claim a failed experiment. Most just spit into the dust and say it don't matter none. What matters is that when the smoke cleared, the heart of the land was cracked open... unrestrained magic bleeding into the plains, crystal growths clawing up from the scars. Folks call it Flickershard. Shines like hope and bites like a rattler.
		</p>

		<p>
			These days the rail lines push west into the Shardlands, folks chasing fortune through ashfall and red glass mesas. Frontier towns rise fast and fall faster. Out here, the wind carries more than sand and not a soul rides too far toward that broken horizon without thinking the world might not be done changing.
		</p>
	</section>

	<!-- Image -->
	<div class="relative w-full max-w-6xl px-4">
        <div class="md:col-span-2">
            <div class="w-full flex justify-center overflow-hidden">
                <img
                    src="https://cdnb.artstation.com/p/assets/images/images/061/255/669/large/christopher-guenard-concept-art-environment-westerne-copie-02.jpg?1680357794"
				    alt="cowboy on horse"
                    class="w-full max-w-6xl h-auto block"
                    draggable="false"
                    style={`
                        mask-image: url(${imgMask});
                        -webkit-mask-image: url(${imgMask});
                        mask-repeat: no-repeat;
                        -webkit-mask-repeat: no-repeat;
                        mask-position: center;
                        -webkit-mask-position: center;
                        mask-size: 100% 100%;
                        -webkit-mask-size: 100% 100%;
                    `}
                />
            </div>
        </div>
	</div>

	<!-- Setting Info -->
	<section class="w-full max-w-6xl px-4 space-y-4">
		<h2 class="font-bold text-3xl sm:text-4xl">Setting Info</h2>

		<p>
            In the years that followed the Cataclysm, the world did not end in a single night. It unraveled slowly. The sky burned in strange colors for days, cities went quiet, and whole stretches of land turned hostile without warning. Magic stopped behaving the way people expected. Some regions were swallowed by wild surges. Others fell dead and empty, as if drained. The survivors did what people always do. They fled the worst of it and gathered along the safer edges of the continent, building rough settlements where the land seemed stable enough to trust for a season at a time.
        </p>
        <p>
            In those early years, two movements took root. Scattered constructs that had survived the fracture began to seek one another out, drawn by shared memory and the need for preservation. Over time they organized into what would become the Exaedium, a nation built around recovery, restoration, and the search for their lost kin buried in ruins or wandering the wastes. Around the same time, preachers and reformers began to speak of the Cataclysm as a trial rather than a tragedy. Their teachings formed the foundation of the Dawnmark Communion, a faith centered on discipline, unity, and the belief that humanity endured because it was meant to.
        </p>
        <p>
            Now, generations later, the world has settled into something harsher but livable. Rail lines push west toward unstable lands rich with opportunity. Frontier towns rise near crystal fields and old ruins. The Exaedium sends expeditions into the wastes to recover their silent brethren. The Dawnmark Communion expands its influence through mission houses and sun-marked banners. And threading through it all are the Freeholds of Varn, a growing network of caravans, contracts, and independent settlements that thrive on trade and ambition. The world may be fractured, but it is far from finished.
        </p>
	</section>

	<!-- Our Story -->
	<section class="w-full max-w-6xl px-4 pt-4 space-y-4">
		<h2 class="font-bold text-3xl sm:text-4xl">Our Story</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

			<div class="space-y-6 md:col-span-1">
				<p>
                    You all are taking part in the first trip to the new station. Whispers and rumors abound through every car as all manner of folks have boarded, attempting to claim their own piece of the pie that Shardpoint represents. Everyone from dirt-caked Wanderers to Varnish merchants sit together as the train roars down the tracks towards the broken horizon.
                </p>
                <p>
                    Whatever your reasons for heading to Shardpoint, you find it growing ever closer. The mood inside the train cars is a tense cocktail of ambition and anxiety. Everyone sits on the edge of the unknown, taking a gamble against a world that has forgotten its own rules... and the first hand is about to be dealt.
                </p>
			</div>
			<div class="md:col-span-2">
                <div class="w-full flex justify-center overflow-hidden">
                    <img
                        src={train}
					    alt="wild west train"
                        class="w-full max-w-6xl h-auto block"
                        draggable="false"
                        style={`
                            mask-image: url(${imgMask});
                            -webkit-mask-image: url(${imgMask});
                            mask-repeat: no-repeat;
                            -webkit-mask-repeat: no-repeat;
                            mask-position: center;
                            -webkit-mask-position: center;
                            mask-size: 100% 100%;
                            -webkit-mask-size: 100% 100%;
                        `}
                    />
                </div>
			</div>
		</div>
	</section>
</div>

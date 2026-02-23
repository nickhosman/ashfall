<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import { slide } from 'svelte/transition';

    let mechanics = [
        {
            title: "Mounted Combat",
            image: "https://i.pinimg.com/736x/c2/9a/65/c29a6539783862aa0bcf008b61ff738c.jpg",
            id: 0,
            info: [
                {
                    h: "Mounts",
                    p: "A willing creature with the 'Mount' tag can serve as a mount, using the following rules:",
                    sections: [
                        {
                            header: "Bonding",
                            paragraphs: [
                                "You can be 'Bonded' with one creature with the 'Mount' tag at a time.",
                                "A Bonded mount gains hit dice per rider level above 1st.",
                                "The method of Bonding varies between creatures, but most often is resolved through a skill challenge."
                            ]
                        },
                        {
                            header: "Mounting/Dismounting",
                            paragraphs: [
                                "Once during your move, you can mount a creature that is within 5 feet of you or dismount. Doing so costs an amount of movement equal to half of your speed. For example, if your speed is 30 feet, you must spend 15 feet of movement to mount a creature. Therefore, you can't mount it if you don't have 15 feet of movement left or if your speed is 0.",
                                "If an effect moves your mount against its will while you're on it, you must succeed on a DC 10 Dexterity/Strength saving throw or fall off the mount, landing prone in a space within 5 feet of it. If you're knocked prone while mounted, you must make the same saving throw.",
                                "If your mount is knocked prone, you can use your reaction to dismount it as it falls and land on your feet. Otherwise, you are dismounted and fall prone in a space within 5 feet of it.",
                            ]
                        },
                        {
                            header: "Controlling a Mount",
                            paragraphs: [
                                "While Mounted:",
                                "Any movement speeds the Rider has are replaced by the Mount's.",
                                "The Rider and Mount share initiative and the Rider gains access to a 'Mounted Action'."
                            ]
                        },
                        {
                            header: "Mounted Actions",
                            paragraphs: [
                                "An additional action that can be taken during a turn that can only be used to take the Dash or Disengage action unless otherwise specified."
                            ]
                        }
                    ],
                }
            ]
        },
        {
            title: "Soulwrought",
            image: "https://assets.echomtg.com/magic/cards/cropped/111879.hq.jpg",
            id: 1,
            info: [
                {
                    h: "Soulwrought",
                    p: "The Soulwrought are constructs animated by bound soul cores and centered in the expanding city of the Exaedium. Each is restored or wrought with intent, not mass-produced. Outside their homeland they are uncommon, most often encountered as Seekers traveling the wastes.",
                    sections: [
                        {
                            header: "Ability Scores:",
                            paragraphs: [
                                "Choose one of (a) Choose any +2; choose any other +1 (b) Choose three different +1"
                            ]
                        },
                        {
                            header: "Creature Type:",
                            paragraphs: [
                                "Humanoid/Construct"
                            ]
                        },
                        {
                            header: "Size:",
                            paragraphs: [
                                "Small or Medium"
                            ]
                        },
                        {
                            header: "Speed:",
                            paragraphs: [
                                "30 feet"
                            ]
                        },
                        {
                            header: "Constructed Nature:",
                            paragraphs: [
                                "You were created to have remarkable fortitude, represented by the following benefits:",
                                "You have advantage on saving throws against being poisoned, and you have resistance to poison damage.",
                                "You don't need to eat, drink, or breathe.",
                                "You are immune to disease",
                                "You don't need to sleep, and magic can't put you to sleep. You can finishe a long rest in 4 hours if you spend those hours in an inactive, motinonless state, during which you retain consciousness."
                            ]
                        },
                        {
                            header: "Shared Archive:",
                            paragraphs: [
                                "Fragments of recovered memory echo within you.",
                                "When you make an ability check that uses a skill, you can roll a d6 immediately after seeing the number on the d20 and add the number on the d6 to the check. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                            ]
                        },
                        {
                            header: "Languages:",
                            paragraphs: [
                                "You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character."
                            ]
                        }
                    ]
                },
                {
                    h: "Subraces",
                    p: "Each Soulwrought is uniquely constructed to fulfill certain tasks, but they can broadly be grouped by material make up and overall function."
                },
                {
                    h: "Ironbound",
                    sections: [
                        {
                            header: "Martial Imprint:",
                            paragraphs: [
                                "The Ironbound are particularly suited to combat protocols.",
                                "You can use Shared Archive on attack or damage rolls."
                            ]
                        }
                    ]
                },
                {
                    h: "Stonecast",
                    sections: [
                        {
                            header: "Sturdy Foundations:",
                            paragraphs: [
                                "The Stonecast are built to last, even more than other Soulwrought.",
                                "When you fail a Strength or Constitution saving throw, you can add your Shared Archive die to the save."
                            ]
                        }
                    ]
                },
                {
                    h: "Rootkin",
                    sections: [
                        {
                            header: "Nimble Construction:",
                            paragraphs: [
                                "The Rootkin are more flexible than other Soulwrought, allowing them to move more subtly.",
                                "When you use Shared Archive on a Stealth or Sleight of Hand check, creatures have disadvantage on Wisdom (Perception) checks made to detect you until the start of your next turn."
                            ]
                        }
                    ]
                },
                {
                    h: "Brightform",
                    sections: [
                        {
                            header: "Prismatic Recall:",
                            paragraphs: [
                                "The Brightform make up the core of the Archive, their memory recall protocols are second to none.",
                                "When you use Shared Archive on an Intelligence or Wisdom check, you may roll the die twice and use either result."
                            ]
                        }
                    ]
                }
            ]
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
			Overview
		</h2>
        <p>
            This page is a work in progress. Eventually mechanics for this setting will live here. Things like chase rules, gun mechanics, rules for dueling, and mount tags will eventually be added, but for now the Soulwrought Race and Mounted Combat rules can be found below.
        </p>


		<div class="flex flex-col w-full">
            {#each mechanics as mech}
                <Card title={mech.title} image={mech.image} id={mech.id} on:click={() => toggle(mech.id)} />
                {#if openId === mech.id}
                <div
                    transition:slide
                    class="border border-stone-300 border-t-0
                           bg-stone-100 p-6 space-y-6"
                >
                <!-- Main Description -->
                    {#each mech.info as info}
                        <h2 class="font-bold text-2xl md:text-3xl">{info.h}</h2>
                        {#if info.p}
                            <p class="text-base sm:text-lg leading-relaxed">
                                {info.p}
                            </p>
                        {/if}
                        {#if info.sections}
                        {#each info.sections as section}
                            <h3 class="font-bold text-lg md:text-xl">{section.header}</h3>
                                {#each section.paragraphs as p}
                                    <p>
                                        {p}
                                    </p>
                                {/each}
                        {/each}
                        {/if}
                    {/each}
                </div>
                {/if}
            {/each}
		</div>
	</div>
</div>

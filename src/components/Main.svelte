<script>
	import Step from "./Step.svelte";
	let steps = [
		{ name: "Example #1", icon: "fa-solid fa-cart-shopping" },
		{ name: "Example #2", icon: "fa-solid fa-list-check" },
		{ name: "Example #3", icon: "fa-solid fa-diagram-project" },
	];
	let benefits = [
		{
			name: "a self taught developer",
			description:
				"Nullam rutrum diam fringilla massa tempus molestie. In velit orci, venenatis at lorem vel, tempor ullamcorper ante. Duis quis ex nisl. Suspendisse vel porta lacus. Praesent sed consectetur dui. Phasellus porta mauris sed risus rutrum lacinia. Nam non ex dignissim, sagittis felis sed, bibendum enim. Sed eget faucibus est.",
		},
		{
			name: "a QA automation engineer",
			description:
				"Nullam rutrum diam fringilla massa tempus molestie. In velit orci, venenatis at lorem vel, tempor ullamcorper ante. Duis quis ex nisl. Suspendisse vel porta lacus. Praesent sed consectetur dui. Phasellus porta mauris sed risus rutrum lacinia. Nam non ex dignissim, sagittis felis sed, bibendum enim. Sed eget faucibus est.",
		},
		{
			name: "an excellent communicator",
			description:
				"Nullam rutrum diam fringilla massa tempus molestie. In velit orci, venenatis at lorem vel, tempor ullamcorper ante. Duis quis ex nisl. Suspendisse vel porta lacus. Praesent sed consectetur dui. Phasellus porta mauris sed risus rutrum lacinia. Nam non ex dignissim, sagittis felis sed, bibendum enim. Sed eget faucibus est.",
		},
	];
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div
			class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
		>
			<h2 class="font-semibold text-3xl sm:text-5xl md:text-6xl">
				Hi! I'm <span class="roboto-mono text-violet-400">Jan</span> Stupica <br />QA
				<span class="roboto-mono text-violet-400">Automation Engineer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="text-violet-400">favourite tech</span> includes Python, TypeScript and
				Golang!
			</p>
			<a
				href="https://www.linkedin.com/in/jan-stupica-153546178/"
				target="_blank"
				class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
			>
				<div
					class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
				></div>
				<h4 class="relative z-9 z-prds">Get in touch &rarr;</h4>
			</a>
		</div>
		<div class="relative shadow-2xl grid place-items-center">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src={"images/profile.png"}
				alt="Profile image"
				class="object-cover z-[2] max-h-[70vh]"
			/>
		</div>
	</section>

	<section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				Curious to <span class="text-violer-400">see</span> my work?
			</h3>
		</div>
		<a
			href="#go-to-smwhere"
			target="_blank"
			class="mx-auto px-4 rounded-md border border-solid border-white flex items-center
            -mb-4 gap-2 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
		>
			<i class="fa-regular fa-circle-play"></i>
			<p>Watch the video</p>
		</a>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
			<Step step={steps[0]}>
				<p>
					Lorem ipsum dolor sit amet, <strong class="text-violet-400">consectetur</strong>
					adipiscing elit. In pharetra nunc luctus urna tincidunt, in condimentum nunc hendrerit.
					Cras nec pharetra augue. Praesent lobortis scelerisque mauris vulputate lacinia.
					Duis vestibulum ex lorem, vel rutrum ipsum mollis eget. Donec turpis nisi, consequat
					vitae hendrerit sit amet, congue vitae lacus. Class aptent taciti sociosqu ad litora
					torquent per conubia nostra, per inceptos himenaeos. Vivamus scelerisque, felis in
					sollicitudin ornare, ligula sem sagittis lacus, et pellentesque urna libero sed eros.
					Phasellus ut felis lacinia, condimentum erat tempus, gravida justo. Nam et tempor
					mi. Proin sit amet iaculis turpis. Vivamus condimentum risus quis enim ullamcorper,
					a hendrerit turpis gravida. Phasellus blandit eros et elit ornare pellentesque. Praesent
					molestie, ligula et porttitor porta, mi tortor rhoncus sem, a mollis massa odio quis
					tellus. Integer scelerisque, nisl ut tempor auctor, felis nulla sodales lorem, quis
					semper dui enim condimentum diam.
				</p>
			</Step>
			<Step step={steps[1]}>
				<p>
					Nullam rutrum diam fringilla massa tempus molestie. In velit orci, venenatis at
					lorem vel, tempor ullamcorper ante. Duis quis ex nisl. Suspendisse vel porta
					lacus. Praesent sed consectetur dui. Phasellus porta mauris sed risus rutrum
					lacinia. Nam non ex dignissim, sagittis felis sed, bibendum enim. Sed eget
					faucibus est.
				</p>
			</Step>
			<Step step={steps[2]}>
				<p>
					Nullam tempus sodales felis eu lacinia. In semper facilisis leo eu laoreet.
					Aenean vitae neque a arcu vulputate aliquam nec blandit ipsum. Integer tempus
					orci non lacus pulvinar ultricies. In egestas, orci eu aliquet pulvinar, nisi ex
					placerat diam, et eleifend mi ligula eu urna. Cras fermentum ex vehicula
					consectetur maximus. Cras bibendum metus sed dolor fermentum bibendum. Nunc
					gravida finibus pellentesque. Ut mi quam, volutpat vel sagittis sed, aliquam
					vitae sem. Sed ipsum dui, tincidunt id quam non, tristique congue dolor. Nullam
					ut est eros. Donec eget sem vestibulum est ultricies fringilla. Etiam in ex
					metus. Aliquam et posuere purus. Suspendisse eget ultricies felis, sed laoreet
					sem.
				</p>
			</Step>
		</div>
	</section>

	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div
			class="flex flex-col gap-2 text-center relative
            before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
            after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
		>
			<h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="text-violet-400">about</span> me.
			</h3>
		</div>
		<p class="mx-auto font-semibold text-lg sm:text-xl md:text-2xl">I am ...</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each benefits as benefit, index}
				<div class="flex gap-6 sm:gap-8">
					<p class="text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">
							{benefit.name}
						</h3>
						<p>{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<h5 class="text-2xl sm:text-3xl font-semibold text-center">
			The <span class="text-violet-400">Complete</span> Package
		</h5>
		<div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
			<table class="bg-white text-slate-700 rounded text-center">
				<thead class="border-b border-solid border-slate-200">
					<tr class="">
						<th />
						<th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
						<th class="whitespace-nowrap bg-violet-700 text-white p-2 px-4">Me</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
						>
							Dedication
						</td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-green-500"></i></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
						>
							Programming ability
						</td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-green-500"></i></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
						>
							Critical thought
						</td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-green-500"></i></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
						>
							Interpersonal skills
						</td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-green-500"></i></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mx-auto -mt-12 italic sm:hidden opacity-50">
			<p>Scroll to see more &rarr;</p>
		</div>
		<p class="mx-auto">So why not invest?</p>
	</section>
</main>

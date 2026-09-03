import hero from "@/assets/hero.png";
import CaseStudyCard from "@/components/CaseStudyCard";
import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "cn";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const services = [
		{
			title: "UI/UX Design",
			description:
				"Creating intuitive, engaging user experiences grounded in meaningful user research.",
		},
		{
			title: "Mobile App Design",
			description:
				"Designing seamless, responsive mobile experiences that feel intuitive and natural across native and cross-platform platforms.",
		},
		{
			title: "Web Design",
			description:
				"Creating responsive, high-performance websites that align with your brand and are designed to drive meaningful conversions.",
		},
		{
			title: "SaaS & Dashboards",
			description:
				"Simplifying complex data visualizations and workflows into intuitive, user-friendly experiences.",
		},
		{
			title: "Prototyping",
			description:
				"Creating high-fidelity, interactive prototypes that bring product concepts to life for user testing and stakeholder validation.",
		},
		{
			title: "Design Systems",
			description:
				"Building scalable, well-documented design systems that ensure consistency across digital products.",
		},
		{
			title: "Graphics Design",
			description:
				"Elevating visual communication through high-impact digital and print assets.",
		},
		{
			title: "Brand Design",
			description:
				"Crafting cohesive identities that resonate with your target audience and stand the test of time.",
		},
	];

	return (
		<main>
			<section>
				<img src={hero} className="w-full" alt="Northline Design" />
				<p className="bg-[#DFE9FA] border border-grey font-semibold w-fit rounded-full py-1 px-2 text-xs mt-10 text-[#121C28]">
					UI/UX & DIGITAL PRODUCT DESIGN
				</p>
				<h1 className="font-bold text-5xl mt-4 lg:text-6xl">
					Shaping the Future Through Design.
				</h1>
				<p className="text-muted-foreground mt-6">
					Northline Design creates thoughtful, intuitive digital experiences for
					startups, businesses, and emerging digital products. We transform
					complex ideas and functionality into seamless, purposeful user
					experiences that are both visually refined and effortless to navigate.
				</p>
				<div className="mt-4 font-semibold flex flex-wrap gap-4">
					<Link
						to="/submit-a-project"
						className="bg-blue px-4 py-2 rounded-lg text-white!"
					>
						Start a Project
					</Link>
					<Link
						to="/work"
						className="border border-black px-4 py-2 rounded-lg text-black!"
					>
						View Our Work
					</Link>
				</div>
			</section>
			<hr />
			<section>
				<h2>Selected Work</h2>
				<div className="gap-8 grid md:grid-cols-2 mt-10">
					{Array.from({ length: 3 }).map((_, index) => (
						<CaseStudyCard
							key={index}
							className={cn(index === 0 && "col-span-full")}
						/>
					))}
				</div>
			</section>
			<section>
				<h2>What we design</h2>
				<div className="grid mt-14 gap-6 border-y md:grid-cols-3 border-grey">
					{services.map(({ title, description }) => (
						<div className="border-b py-4 border-grey text-lg">
							<p className="font-bold">{title}</p>
							<p>{description}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "cn";
import { processSteps, servicesData } from "@/lib/data";

export const Route = createFileRoute("/services")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<section>
				<h1>What We do</h1>
				<p className="page-description">
					What We Do Comprehensive design solutions for digital products. We
					partner with ambitious companies to build interfaces that perform
					beautifully.
				</p>
			</section>
			<section>
				<div className="border-t border-grey pt-4 grid gap-4  md:grid-cols-2 md:gap-9 md:justify-items-normal">
					{servicesData.map(({ id, title, description, Icon }, index) => {
						const roatatedIconIndecies = [4, 5, 6];
						return (
							<div className="border border-grey p-8" key={id}>
								<div className="flex justify-between">
									<p className="font-bold text-xl">
										{String(index + 1).padStart(2, "0")}/ {title}
									</p>
									<Icon
										className={cn(
											"font-medium text-muted-foreground text-lg",
											roatatedIconIndecies.includes(index) && "-rotate-90",
										)}
										size={20}
									/>
								</div>
								<p className="mt-4 max-w-130">{description}</p>
							</div>
						);
					})}
				</div>
			</section>
			<section className="bg-[#D9E3F4] max-w-none! py-14!">
				<div className="wrapper">
					<h2>Our Approach</h2>
					<p className="page-description">
						A disciplined methodology focused on outcomes, not just outputs.
					</p>
					<div className="space-y-4 mt-10 flex flex-wrap justify-between">
						{processSteps.map(({ title, description }, index) => {
							return (
								<div key={title} className="max-w-90 border-t pt-4">
									<p className="font-semibold">
										{index + 1}. {title}
									</p>
									<p className="text-muted-foreground">{description}</p>
								</div>
							);
						})}
					</div>
					<Link
						to="/submit-a-project"
						className="button-link-light inline-block mt-10"
					>
						START A PROJECT
					</Link>
				</div>
			</section>
		</>
	);
}

import { createFileRoute } from "@tanstack/react-router";
import { cn } from "cn";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/data";

export const Route = createFileRoute("/work")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main>
			<section>
				<h1>Our Work</h1>
				<p className="page-description">
					A selection of digital products and platforms we've helped bring to
					life. Focusing on functional elegance and technical precision.
				</p>
			</section>
			<hr />
			<section>
				<div className="gap-8 grid md:grid-cols-2 mt-10">
					{caseStudies.map((caseStudy, index) => (
						<CaseStudyCard
							key={caseStudy.id}
							{...{ index, ...caseStudy }}
							className={cn(index === 0 && "col-span-full")}
						/>
					))}
				</div>
			</section>
		</main>
	);
}

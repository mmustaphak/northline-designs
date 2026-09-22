import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "cn";
import { Check } from "lucide-react";
import {
	brandAndVisuals,
	digitalProductPricing,
	type PricingPlan,
} from "@/lib/data";

export const Route = createFileRoute("/pricing")({
	component: RouteComponent,
});

const renderProductPricing = (pricingDetails: PricingPlan[]) => {
	return pricingDetails.map((plan) => (
		<div
			key={plan.id}
			className={cn(
				"flex flex-col border border-grey rounded-lg p-8 text-left h-fit w-full max-w-83",
				plan.id !== "custom-production" && "min-h-110 md:min-h-130",
			)}
		>
			<div>
				<p className="text-2xl font-semibold uppercase">{plan.name}</p>
				<p className="text-muted-foreground mt-4">{plan.tagline}</p>
				<p className="text-3xl font-semibold mt-8">{plan.price}</p>
				{plan.description ? (
					<div className="flex items-center gap-x-2">
						<Check
							className="bg-blue shrink-0 rounded-full p-1"
							strokeWidth={3}
							size={20}
							color="#ffffff"
						/>
						{plan.description}
					</div>
				) : (
					<div className="mt-4 space-y-2">
						{plan.features.map((feature) => (
							<div key={feature} className="flex items-center gap-x-2">
								<Check
									className="bg-blue rounded-full p-1"
									strokeWidth={3}
									size={20}
									color="#ffffff"
								/>
								{feature}
							</div>
						))}
					</div>
				)}
			</div>
			<Link
				to="/contact-us"
				className={cn(
					"border mt-auto w-full inline-block font-semibold py-4 rounded-full text-center",
					plan.id === "custom-production" && "mt-8",
					plan.id === "business" && "bg-blue text-white mt-4 md:mt-auto",
					plan.id === "startup-and-business" && "mt-4",
				)}
			>
				Contact Sales
			</Link>
		</div>
	));
};

function RouteComponent() {
	return (
		<>
			<section className="text-center">
				<h1 className="mx-auto">Transparent Pricing for Exceptional Design.</h1>
				<p className="page-description mx-auto">
					Flexible design packages tailored to your product's stage and scale
					across all our disciplines.
				</p>

				<h2>Digital Product</h2>
				<p className="text-muted-foreground">Elevate your digital Products</p>

				<div className="flex justify-center space-y-4 mt-8 gap-x-8 flex-wrap">
					{renderProductPricing(digitalProductPricing)}
				</div>
			</section>
			<section className="text-center">
				<h1>Transparent Pricing for Exceptional Design.</h1>
				<p className="page-description">
					Flexible design packages tailored to your product's stage and scale
					across all our disciplines.
				</p>

				<h2>Digital Product</h2>
				<p className="text-muted-foreground">Elevate your digital Products</p>

				<div className="flex justify-center space-y-4 mt-8 gap-x-8 flex-wrap">
					{renderProductPricing(brandAndVisuals)}
				</div>
			</section>
		</>
	);
}

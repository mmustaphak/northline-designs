import { useForm } from "@tanstack/react-form-start";
import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import { partnerBenefits, partnershipOpportunities } from "@/lib/data";
export const Route = createFileRoute("/partnership")({
	component: RouteComponent,
});

import * as z from "zod";
import sideImage from "@/assets/OfficeImg.webp";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	organisation: z.string().min(1, "Please provide your organisation's name"),
	website: z.httpUrl(),
	service: z
		.enum(["custom"])
		.refine((val) => val !== "custom", "Please select an option"),
	message: z.string().min(1, "Please provide a descriptive message"),
});
function RouteComponent() {
	const form = useForm({
		defaultValues: {
			organisation: "",
			website: "",
			service: "",
			message: "",
		},
		validators: {
			onBlur: formSchema,
			onSubmit: formSchema,
		},
		onSubmit: async () => {
			console.log("Form Submitted");
		},
	});
	return (
		<section>
			<h1 className="text-center">Let’s Grow Together.</h1>
			<p className="page-description text-center mx-auto">
				We collaborate with ambitious startups, established businesses, and
				innovation hubs to build the next generation of digital products.
			</p>

			<div className="flex flex-col lg:justify-center items-start mt-8 lg:flex-row space-x-4 space-y-4">
				<div className="rounded-lg p-6 border border-grey max-w-187.5">
					<h2 className="m-0">Why Partner?</h2>
					<p className="text-muted-foreground">
						We believe in the power of collective expertise. By partnering with
						Northline Design, you gain access to a collaborative ecosystem
						dedicated to strategic growth, venture building, and long-term
						ecosystem value.
					</p>
					<Separator className="my-4" />
					<div className="text-center gap-y-4 flex flex-wrap justify-center min-[590px]:justify-around">
						{partnerBenefits.map((benefit) => (
							<div key={benefit.id} className="max-w-55">
								<img src={benefit.image} className="mx-auto" alt="handshake" />
								<p>{benefit.title}</p>
								<p>{benefit.description}</p>
							</div>
						))}
					</div>
				</div>

				<div className="w-full xl:max-w-90 p-6 rounded-lg bg-blue text-white">
					<h2 className="m-0">Partnership Opportunities</h2>
					<div>
						{partnershipOpportunities.map((opp, index) => (
							<div key={opp.id}>
								<p>{opp.title}</p>
								<p>{opp.description}</p>
								{/* Conditionally Render if not the last item  */}
								{partnershipOpportunities.length - 1 !== index && (
									<Separator className="my-4 opacity-25" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="lg:flex gap-x-4 mt-8">
				<img
					src={sideImage}
					alt="Office desk"
					className="hidden lg:block max-w-140 w-1/2"
				/>
				<form
					className="mt-8 grow lg:mt-0 rounded-xl border border-grey p-4 md:p-8"
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit();
					}}
				>
					<FieldGroup>
						<div className="text-center md:text-left">
							<h2>Start the Conversation</h2>
							<p className="text-muted-foreground">
								Tell us a bit about yourself and how we might collaborate.
							</p>
						</div>
						<form.Field name="organisation">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>
											ORGANIZATION NAME
										</FieldLabel>
										<Input
											name={field.name}
											value={field.state.value}
											onChange={(e) => field.handleChange(e.target.value)}
											onBlur={field.handleBlur}
											autoComplete="off"
											data-invalid={isInvalid}
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						</form.Field>
						<form.Field name="website">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>
											WEBSITE / DECK LINK
										</FieldLabel>
										<Input
											name={field.name}
											value={field.state.value}
											onChange={(e) => field.handleChange(e.target.value)}
											onBlur={field.handleBlur}
											autoComplete="off"
											data-invalid={isInvalid}
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						</form.Field>
						<form.Field name="service">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>
											SERVICE / SPECIALITY
										</FieldLabel>
										<Select
											name={field.name}
											value={field.state.value}
											onValueChange={(val) => field.handleChange(val ?? "")}
										>
											<SelectTrigger
												id="project-request-form"
												aria-invalid={isInvalid}
											>
												<SelectValue placeholder="Select partnership type" />
											</SelectTrigger>
											<SelectContent id="project-request-form">
												{["Custom"].map((type) => (
													<SelectItem key={type} value={type}>
														{type}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						</form.Field>
						<form.Field name="message">
							{(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>
											ORGANIZATION NAME
										</FieldLabel>
										<Textarea
											name={field.name}
											placeholder="How do you see us partnering together for long-term growth?"
											value={field.state.value}
											onChange={(e) => field.handleChange(e.target.value)}
											onBlur={field.handleBlur}
											autoComplete="off"
											data-invalid={isInvalid}
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						</form.Field>
						<Button className="rounded-xl py-6 mt-8">APPLY TO PARTNER</Button>
					</FieldGroup>
				</form>
			</div>
		</section>
	);
}

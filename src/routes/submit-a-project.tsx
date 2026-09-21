import { useForm } from "@tanstack/react-form-start";
import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod";
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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
export const Route = createFileRoute("/submit-a-project")({
	component: RouteComponent,
});

const projectTypeOptions = [
	"Starter",
	"Business",
	"Custom Production",
] as const;
const estimatedValues = ["100,000", "Custom"] as const;
const timelineOptions = ["ASAP", "1 month", "Custom"] as const;
const projectSelectDefault = "Select a timeline";
// const budgestEstimateDefault =

const formSchema = z.object({
	fullName: z.string().min(5, "Please add Your full Name"),
	emailAddress: z.email("Please add a valid email"),
	companyName: z.string().min(5, "Please add your company name"),
	projectType: z.enum(projectTypeOptions, "Please select a project type"),
	estimatedBudget: z.enum(estimatedValues, "Please select a timeline"),
	targetAudience: z.string().min(3, "Please add the target Audience"),
	projectGoals: z
		.string()
		.min(10, "Please add the project goals")
		.refine((val) => val !== projectSelectDefault, {
			message: "Please select a project type",
		}),
	timeline: z.enum(timelineOptions, "Please select a timeline"),
	additionalReq: z.string(),
});

function RouteComponent() {
	const form = useForm({
		defaultValues: {
			fullName: "",
			emailAddress: "",
			companyName: "",
			projectType: projectSelectDefault,
			estimatedBudget: "",
			targetAudience: "",
			projectGoals: "",
			timeline: "",
			additionalReq: "",
		},
		validators: {
			onSubmit: formSchema,
			onBlur: formSchema,
		},
		onSubmit: async ({ value, meta }) => {
			console.log(value);
			console.log("FORM SUBMITTED");
		},
	});
	return (
		<section className="text-center">
			<h1>Let’s Build Something Great.</h1>
			<p className="page-description mx-auto">
				Tell us about your project and we’ll get back to you within 24 hours.
			</p>

			<form
				id="project-request-form"
				className="text-left flex flex-col max-w-260 mx-auto mt-15"
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit();
				}}
			>
				<div className="form-section">
					<p>01. GENERAL INFORMATION</p>
					<Separator className="mb-auto" />
				</div>
				<FieldGroup className="flex-wrap justify-between flex-row">
					<form.Field name="fullName">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field className="md:w-[48%]" data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>FULL NAME</FieldLabel>
									<Input
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Jane Doe"
										autoComplete="name"
										aria-invalid={isInvalid}
									/>
									<FieldError errors={field.state.meta.errors} />
								</Field>
							);
						}}
					</form.Field>

					<form.Field name="emailAddress">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field className="md:w-[48%]" data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
									<Input
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="jane@company.com"
										type="email"
										autoComplete="email"
										aria-invalid={isInvalid}
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>

					<form.Field name="companyName">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>COMPANY NAME</FieldLabel>
									<Input
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Your Organization"
										autoComplete="off"
										aria-invalid={isInvalid}
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>
				</FieldGroup>

				<div className="form-section">
					<p>02. GENERAL INFORMATION</p>
					<Separator className="mb-auto" />
				</div>

				<FieldGroup>
					<form.Field name="projectType">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							console.log(isInvalid);
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>PROJECT TYPE</FieldLabel>
									<Select
										name={field.name}
										value={field.state.value}
										onValueChange={(val) => field.handleChange(val ?? "")}
									>
										<SelectTrigger
											id="project-request-form"
											aria-invalid={isInvalid}
										>
											<SelectValue placeholder={projectSelectDefault} />
										</SelectTrigger>
										<SelectContent id="project-request-form">
											{projectTypeOptions.map((type) => (
												<SelectItem key={type} value={type}>
													{type}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>

					<form.Field name="estimatedBudget">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>ESTIMATED BUDGET</FieldLabel>
									<Select
										name={field.name}
										value={field.state.value}
										onValueChange={(value) => field.handleChange(value ?? "")}
									>
										<SelectTrigger aria-invalid={isInvalid}>
											<SelectValue placeholder="Select a range" />
										</SelectTrigger>
										<SelectContent>
											{estimatedValues.map((type) => (
												<SelectItem key={type} value={type}>
													{type}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>
				</FieldGroup>

				<div className="form-section">
					<p>03. PROJECT DEEP DIVE</p>
					<Separator className="mb-auto" />
				</div>
				<FieldGroup>
					<form.Field name="targetAudience">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>TARGET AUDIENCE</FieldLabel>
									<Input
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Who is your primary user?"
										autoComplete="email"
										aria-invalid={isInvalid}
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>

					<form.Field name="timeline">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>TIMELINE</FieldLabel>
									<Select
										name={field.name}
										value={field.state.value}
										onValueChange={(val) => field.handleChange(val ?? "")}
									>
										<SelectTrigger
											id="project-request-form"
											aria-invalid={isInvalid}
										>
											<SelectValue placeholder={projectSelectDefault} />
										</SelectTrigger>
										<SelectContent id="project-request-form">
											{["Custom"].map((type) => (
												<SelectItem key={type} value={type}>
													{type}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>

					<form.Field name="projectGoals">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name} data-invalid={isInvalid}>
										PROJECT GOALS
									</FieldLabel>
									<Textarea
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Briefly describe your goals, timeline, and any specific requirements..."
										autoComplete="off"
										rows={5}
										aria-invalid={isInvalid}
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>
				</FieldGroup>

				<div className="form-section">
					<p>04. ADDITIONAL DETAILS</p>
					<Separator className="mb-auto" />
				</div>

				<FieldGroup>
					<form.Field name="additionalReq">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field>
									<FieldLabel htmlFor={field.name} data-invalid={isInvalid}>
										ANY OTHER ADDITIONAL REQUIREMENTS OR CONSTRAINTS
									</FieldLabel>
									<Textarea
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Briefly describe your goals, timeline, and any specific requirements..."
										autoComplete="off"
										aria-invalid={isInvalid}
										rows={5}
									/>
									{/* {isInvalid && <FieldError errors={field.state.meta.errors} />} */}
								</Field>
							);
						}}
					</form.Field>
				</FieldGroup>

				<Button
					size="lg"
					className="px-10 mt-8 ml-auto bg-light-blue!"
					type="submit"
					form="project-request-form"
				>
					Submit
				</Button>
			</form>
		</section>
	);
}

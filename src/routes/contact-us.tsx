import { useForm } from "@tanstack/react-form-start";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, Share2 } from "lucide-react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export const Route = createFileRoute("/contact-us")({
	component: RouteComponent,
});

const formSchema = z.object({
	name: z.string().min(3, "Please enter your name"),
	email: z.email(),
	subject: z.string().min(1, "Please give a subject"),
	message: z.string().min(10, "Please give a elaborate message"),
});
function RouteComponent() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validators: {
			onBlur: formSchema,
			onSubmit: formSchema,
		},
		onSubmit: async ({ value }) => {
			console.log(value);
		},
	});
	return (
		<section className="space-y-8 md:flex gap-x-8 justify-center">
			<div>
				<h1>Get in Touch.</h1>
				<p className="page-description">
					Have a question or just want to say hi? I'm an independent designer
					running a remote-first studio, and I'd love to hear from you.
				</p>
				<div className="mt-4 space-y-3">
					<div className="flex gap-x-3">
						<Mail size={20} className="text-muted-foreground" />
						<div>
							<p className="text-muted-foreground text-sm">GENERAL INQUIRES</p>
							<a href="mailto://northlinedesigns1@gmail.com">
								northlinedesigns1@gmail.com
							</a>
						</div>
					</div>
					<div className="flex gap-x-3">
						<Phone
							size={19}
							className="fill-muted-foreground text-muted-foreground"
						/>
						<div>
							<p className="text-muted-foreground text-sm">CHAT ON WHATSAPP</p>
							<a href="tele://+2348071092015">+234 80 7109 2015</a>
						</div>
					</div>
					<div className="flex gap-x-3">
						<Share2 size={20} className="text-muted-foreground" />
						<div className="space-x-4">
							<p className="text-muted-foreground text-sm">SOCIALS</p>
							<a href="https://instagram.com/">Instagram</a>
							<a href="https://x.com/">X(Twitter)</a>
						</div>
					</div>
				</div>
			</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit();
				}}
				className="grow max-w-120"
			>
				<FieldGroup>
					{" "}
					<form.Field name="name">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>Name</FieldLabel>
									<Input
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Jane Doe"
										aria-invalid={isInvalid}
										autoComplete="name"
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>
					<form.Field name="email">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>Email</FieldLabel>
									<Input
										name={field.name}
										type="email"
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="jane@example.com"
										aria-invalid={isInvalid}
										autoComplete="email"
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>
					<form.Field name="subject">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>SUBJECT</FieldLabel>
									<Input
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="How can we help?"
										aria-invalid={isInvalid}
										autoComplete=""
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
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
									<FieldLabel htmlFor={field.name}>MESSAGE</FieldLabel>
									<Textarea
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="How can we help?"
										aria-invalid={isInvalid}
										autoComplete=""
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</Field>
							);
						}}
					</form.Field>
				</FieldGroup>
				<Button
					size="lg"
					className="px-8 py-6 rounded-full mt-8 ml-auto bg-light-blue!"
					type="submit"
				>
					SEND MESSAGE <ArrowRight />
				</Button>
			</form>
		</section>
	);
}

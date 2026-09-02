import { Link } from "@tanstack/react-router";

export default function Footer() {
	return (
		<footer className="flex justify-between flex-wrap">
			<div>
				<p className="font-bold text-4xl/11 uppercase">
					Northline
					<br /> Design
				</p>
				<p className="text-muted-foreground text-sm mt-4">
					© 2026 Northline Design Studio. All
					<br /> rights reserved.
				</p>
			</div>
			<div className="mt-4 md:flex justify-between w-full max-w-110">
				<div>
					<p className="font-semibold">Social</p>
					<div className="underline flex flex-col mt-2 gap-y-2">
						<a href="https://x.com">Twiiter</a>
						<a href="https://instagram.com">Instagram</a>
					</div>
				</div>
				<div className="mt-6 md:mt-0">
					<p className="font-semibold">Contact</p>
					<div className="underline flex flex-col mt-2 gap-y-2">
						<a href="mailto:">Email</a>
						<Link to="/submit-a-project">Start a Project</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

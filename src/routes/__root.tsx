import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NotFound from "@/components/notFound";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Northline Designs",
			},
			{
				name: "description",
				content:
					"Northline Design creates thoughtful, intuitive digital experiences for startups, businesses, and emerging digital products. We transform complex ideas and functionality into seamless, purposeful user experiences that are both visually refined and effortless to navigate.",
			},
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "favicon.png",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<Header />
				<main>{children}</main>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Footer />
				<Scripts />
			</body>
		</html>
	);
}

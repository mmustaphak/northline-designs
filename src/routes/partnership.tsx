import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partnership")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/partnership"!</div>;
}

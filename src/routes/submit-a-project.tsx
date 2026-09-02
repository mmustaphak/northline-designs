import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/submit-a-project")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/submit-a-project"!</div>;
}

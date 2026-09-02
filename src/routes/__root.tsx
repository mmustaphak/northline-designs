import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
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

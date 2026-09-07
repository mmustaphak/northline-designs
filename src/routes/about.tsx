import headhost from "@/assets/headshot.png";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const principles = [
    { title: "CLARITY", description: "Making complex experiences simple." },
    { title: "PURPOSE", description: "Every design decision has meaning." },
    { title: "IMPACT", description: "Creating experiences that deliver real value." },
  ];
  return (
    <main className="page-wrap px-4 py-12">
      <section>
        <div className="md:flex gap-x-4">
          <img
            src={headhost}
            className="mx-auto"
            alt="Abdulrahman Adejumo (CEO) looking into the camera"
          />
          <div className="text-center font-semibold">
            <h2 className="md:mt-0! md:font-bold md:text-4xl!">Abdulrahman Adejumo</h2>
            <p className="text-muted-foreground md:text-left mt-4">
              FOUNDER, UI/UX & PRODUCT DESIGNER
            </p>
            <p className="text-muted-foreground mt-6 md:text-left md:text-sm lg:text-base">
              Northline Design is an independent UI/UX, Digital Product, Graphic, and Brand Design
              studio focused on creating intuitive, purposeful, and visually refined experiences. We
              work with startups, businesses, and product teams to turn complex ideas into simple,
              functional, and engaging digital products and strong visual identities. From mobile
              apps, websites, SaaS platforms, and dashboards to brand identities, marketing
              graphics, and visual assets, we combine strategic thinking, user-centered design, and
              thoughtful visuals to create work that is both beautiful and effective. We believe
              great design goes beyond aesthetics, it solves problems, builds strong brands,
              simplifies experiences, and creates meaningful connections between people and
              technology.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="uppercase font-semibold text-muted-foreground">Our Principles</p>
          <div>
            {principles.map(({ title, description }, index) => (
              <div key={index} className="mb-2 border-l text-left pl-4 border-grey">
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
      <section className="text-center mt-10">
        <p className="text-4xl font-semibold">Have a product in mind?</p>
        <p className="mt-4 text-muted-foreground">
          Let’s turn your idea into an experience people want to use.
        </p>
        <Link
          to="/submit-a-project"
          className="bg-light-blue text-white! px-4 py-2 rounded-xl inline-block mt-4"
        >
          Let's Connect
        </Link>
      </section>
    </main>
  );
}

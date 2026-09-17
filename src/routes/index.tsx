import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "cn";
import hero from "@/assets/hero.png";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies, dummyData } from "@/lib/data";
export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <section>
        <img src={hero} className="w-full" alt="Northline Design" />
        <p className="bg-[#DFE9FA] border border-grey font-semibold w-fit rounded-full py-1 px-2 text-xs mt-10 text-[#121C28]">
          UI/UX & DIGITAL PRODUCT DESIGN
        </p>
        <h1>Shaping the Future Through Design.</h1>
        <p className="text-muted-foreground mt-6">
          Northline Design creates thoughtful, intuitive digital experiences for startups,
          businesses, and emerging digital products. We transform complex ideas and functionality
          into seamless, purposeful user experiences that are both visually refined and effortless
          to navigate.
        </p>
        <div className="mt-4 font-semibold flex flex-wrap gap-4">
          <Link to="/submit-a-project" className="bg-blue px-4 py-2 rounded-lg text-white!">
            Start a Project
          </Link>
          <Link to="/work" className="border border-black px-4 py-2 rounded-lg text-black!">
            View Our Work
          </Link>
        </div>
      </section>
      <hr />
      <section>
        <h2>Selected Work</h2>
        <div className="gap-8 grid md:grid-cols-2 mt-10">
          {caseStudies.map(({ category, ...caseStudy }, index) => {
            return (
              <CaseStudyCard
                key={caseStudy.id}
                {...caseStudy}
                className={cn("border border-grey", index === 0 && "col-span-full")}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h2>What we design</h2>
        <div className="grid mt-14 gap-6 border-y md:grid-cols-3 border-grey">
          {dummyData.map(({ id, title, description }) => (
            <div key={id} className="border-b py-4 border-grey text-lg">
              <p className="font-bold">{title}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

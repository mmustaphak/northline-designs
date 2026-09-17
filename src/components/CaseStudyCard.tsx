import { cn } from "cn";
import { FaArrowRight } from "react-icons/fa";
import type { CaseStudy } from "@/lib/data";

type CaseStudyProps = Omit<CaseStudy, "category"> & {
  category?: string;
  index?: number;
  className?: string;
};
export default function CaseStudyCard({
  className,
  title,
  description,
  category,
  image,
  index,
}: CaseStudyProps) {
  const isSecondVariant = Boolean(category);
  return (
    <a href="/" className="contents">
      <div className={`${className} font-semibold  rounded-sm`}>
        <img src={image} className="w-full aspect-video" alt="" />
        <div
          className={cn(
            "flex items-center gap-4 justify-between p-3",
            category && "flex-col items-start",
          )}
        >
          <div>
            <div className="flex items-center gap-x-2 relative">
              <p className={cn("capitalize text-2xl w-fit", index === 0 && "md:text-4xl")}>
                {title}
              </p>
              {isSecondVariant && (
                <span className=" -right-4  text-xs bg-grey text-muted-foreground p-0.5">
                  {category}
                </span>
              )}
            </div>
            <p className="text-xs max-[320px]:text-xs text-muted-foreground">{description}</p>
          </div>
          <p
            className={cn(
              "text-blue max-[320px]:text-xs text-sm flex gap-x-1 items-center w-fit",
              category && "text-black",
            )}
          >
            View Our Case Study <FaArrowRight />
          </p>
        </div>
      </div>
    </a>
  );
}

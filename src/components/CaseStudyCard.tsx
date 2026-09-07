import { FaArrowRight } from "react-icons/fa";

export default function CaseStudyCard({ className }: { className?: string }) {
  return (
    <a href="/" className="contents">
      <div className={`${className} font-semibold border rounded-sm border-grey`}>
        <img
          src="https://picsum.photos/seed/mountain/400/400"
          className="w-full aspect-video"
          alt=""
        />
        <div className="flex items-center justify-between p-3">
          <div>
            <p className="capitalize text-xl">Kick Bot</p>
            <p className="text-xs max-[320px]:text-xs text-muted-foreground">
              SportsTech Mobile App
            </p>
          </div>
          <p className="text-blue max-[320px]:text-xs text-sm flex items-center w-fit">
            View Our Case Study <FaArrowRight />
          </p>
        </div>
      </div>
    </a>
  );
}

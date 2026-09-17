import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { useOnClickOutside } from "usehooks-ts";
import logo from "@/assets/logo.webp";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const routes = [
    "/about",
    "/work",
    "/servies",
    "/prices",
    "/submit-a-project",
    "/contact-us",
    "/partnership",
  ];

  const sideBarRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(sideBarRef as React.RefObject<HTMLDivElement>, () => setIsSidebarOpen(false));

  const renderedLinks = routes.map((route) => (
    <Link
      key={route}
      onClick={() => setIsSidebarOpen(false)}
      to={route}
      className="data-status-active:hidden"
    >
      {route.charAt(1).toUpperCase() + route.slice(2)}
    </Link>
  ));
  return (
    <header className="flex justify-between items-center *:w-fit text-xs container mx-auto p-4 md:p-8 font-bold xl:text-base">
      <Link to="/" className="w-1/2! max-w-[320px]">
        <img src={logo} className="w-full" alt="Northline Designs" />
      </Link>

      {/*Mobile controls*/}
      <button type="button" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
        <MdOutlineMenu className="size-6 text-blue" />
      </button>
      <aside
        className="absolute top-0 gap-y-4 right-0 bg-black/50 h-dvh w-screen! text-base"
        style={
          isSidebarOpen ? { display: "block", transform: "translateX(0)" } : { display: "none" }
        }
      >
        <div
          ref={sideBarRef}
          className="animate-slide-in flex flex-col bg-white h-dvh w-fit ml-auto p-4 gap-y-4 slide-in"
        >
          <button type="button" className="self-end mt-2" onClick={() => setIsSidebarOpen(false)}>
            <MdOutlineClose className="size-6" />
          </button>
          {renderedLinks}
        </div>
      </aside>

      <nav className="hidden lg:flex items-center [&>a]:w-max gap-x-4 text-center">
        {renderedLinks}
      </nav>

      <Link
        to="/submit-a-project"
        className="hidden bg-blue text-white! rounded-full p-2 px-4 text-center font-semibold text-nowrap lg:block"
      >
        Start a Project
      </Link>
    </header>
  );
}

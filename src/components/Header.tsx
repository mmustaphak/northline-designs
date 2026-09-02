import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.webp";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const routes = [
    "about",
    "work",
    "servies",
    "prices",
    "submit-a-project",
    "contact-us",
    "partnership",
  ];

  const renderedLinks = routes.map((route) => (
    <Link key={route} to={"/" + route} className="data-status-active:hidden">
      {route.charAt(0).toUpperCase() + route.slice(1)}
    </Link>
  ));
  return (
    <header className="flex justify-between items-center *:w-fit text-sm">
      <Link to="/" className="w-1/2! max-w-[320px]">
        <img src={logo} className="w-full" alt="Northline Designs" />
      </Link>

      {/*Mobile controls*/}
      <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
        <MdOutlineMenu className="size-6 text-blue" />
      </button>
      <aside
        className="absolute top-0 gap-y-4 right-0 bg-black/50 h-dvh w-screen! text-base"
        style={
          isSidebarOpen ? { display: "block", transform: "translateX(0)" } : { display: "none" }
        }
      >
        <div className="animate-slide-in flex flex-col bg-white h-dvh w-fit ml-auto p-4 gap-y-4 slide-in">
          <button className="self-end mt-2" onClick={() => setIsSidebarOpen(false)}>
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

import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [navOpen, setNavOpen] = useState(true);

  //================================
  return (
    <header className=" z-[1000] fixed top-0 left-0 w-full bg-gradient-to-b  from-zinc-900 to-zinc-900/0 h-20 flex items-center">
      <div className="max-w-screen-2xl w-full mx-auto px-4  flex justify-between items-center mx:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <Logo />
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          className="btn btn-secondary max-md:hidden md:justify-self-end"
          href="#My_Blog"
        >
          MyBlog
        </a>
      </div>
    </header>
  );
}

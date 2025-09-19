import { useEffect, useRef } from "react";

export default function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const initialActiveBox = () => {
    // "top-2 left-2 right-2  h-9 "
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };
  const activeCurrentLinks = (event) => {
    lastActiveLink.current.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };
  //==================================================================
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    // {
    //   label: "Reviews",
    //   link: "#reviews",
    //   className: "nav-link",
    // },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link",
    },
    {
      label: "Blog",
      link: "#Blog",
      className: "nav-link md:hidden",
    },
  ];
  //==================================================================
  useEffect(initialActiveBox, []);
  window.addEventListener("resize", initialActiveBox);
  //==================================================================

  return (
    <nav className={`navbar ${navOpen ? "active" : ""} `}>
      {navItems?.map(({ label, link, className, ref }, key) => {
        return (
          <a
            className={className}
            key={key}
            ref={ref}
            href={link}
            onClick={activeCurrentLinks}
          >
            {label}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

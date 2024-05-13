import React, { useState, useEffect } from "react";

import Nav from "../components/Nav.jsx";
import NavMobile from "../components/NavMobile.jsx";
import Socials from "../components/Socials.jsx";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-50 transition-all duration-300`}
      style={{ zIndex: 50 }} 
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <a href="#" className="font-custom">
          <span className="text-3xl">
            SPR{" "}
            <span className="text-2xl text-pink-900  hover:text-accent">
              Design.
            </span>
          </span>
        </a>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="hidden lg:block">
          <Socials />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;

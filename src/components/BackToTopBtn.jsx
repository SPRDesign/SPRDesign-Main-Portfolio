import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from "react-scroll";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-pink-900 w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all"
      >
        <MdKeyboardDoubleArrowUp className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTopBtn;

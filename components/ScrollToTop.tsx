"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50 transition-opacity duration-700 ease-in-out
        ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <ScrollLink to="home" smooth spy duration={3000}>
        <button className="w-10 h-10 md:w-12 md:h-12 bg-background hover:bg-background/70 shadow-md flex items-center justify-center">
          <FaArrowUp className="text-2xl md:text-3xl text-black" />
        </button>
      </ScrollLink>
    </div>
  );
};

export default ScrollToTop;

"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="
        fixed bottom-6 right-6 z-50 shadow-md  bg-background hover:bg-background/80 
        transition w-10 h-10 md:w-13 md:h-13 flex items-center justify-center cursor-pointer
        "
      >
        <FaArrowUp className="text-2xl md:text-4xl text-black" />
      </button>
    )
  );
};

export default ScrollToTop;

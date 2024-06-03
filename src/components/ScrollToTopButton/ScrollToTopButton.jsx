import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ImArrowUp } from "react-icons/im";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-[#ffd2a4] text-[#161722] p-4 rounded-full shadow-lg hover:bg-[#f0bb86] focus:outline-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <ImArrowUp />
    </button>
  );
};

export default ScrollToTopButton;

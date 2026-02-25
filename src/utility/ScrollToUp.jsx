"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop({ showAfter = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-12 w-12 rounded-full
        bg-[#D6E100]
        text-black
        shadow-lg shadow-black/20
        transition-all duration-300
        hover:scale-110
        hover:bg-[#c8cf2f]
        active:scale-95
      "
    >
      <FiArrowUp size={22} />
    </button>
  );
}

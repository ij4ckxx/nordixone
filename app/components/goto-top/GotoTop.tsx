"use client";

import React  from "react";

const GotoTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className="fixed bottom-6 right-6 text-white rounded-[6px] bg-nor-primary flex items-center justify-center size-10 hover:border hover:border-nor-primary hover:bg-white hover:text-nor-primary duration-300 ease-in-out transition-colors z-50"
    >
      ↑
    </button>
  );
};

export default GotoTop;

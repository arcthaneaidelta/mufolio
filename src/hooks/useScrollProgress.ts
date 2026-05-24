"use client";
import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight === 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      setProgress(currentScroll / totalHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Re-calculate when page updates layout/height
    const resizeObserver = new ResizeObserver(() => {
      handleScroll();
    });
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return progress;
}

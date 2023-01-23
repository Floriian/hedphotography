import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const updatePos = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePos);
    updatePos();
    return () => window.removeEventListener("scroll", updatePos);
  });
  return scrollPosition;
};

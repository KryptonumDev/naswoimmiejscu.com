import { useEffect, useState } from "react";

export const breakpointsValues = {
  sm: 360,
  md: 768,
  lg: 992,
  xl: 1167,
};

export const getWindowWidth = () => window && window.innerWidth;

export const useScreenService = () => {
  const [isSm, setIsSm] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isLgUp, setIsLgUp] = useState(false);
  const [isXl, setIsXl] = useState(false);
  const [isXxl, setIsXxl] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const width = getWindowWidth();
    setIsSm(width < breakpointsValues.sm);
    setIsMd(width >= breakpointsValues.sm && width < breakpointsValues.md);
    setIsLg(width >= breakpointsValues.md && width < breakpointsValues.lg);
    setIsLgUp(width >= breakpointsValues.lg);
    setIsXl(width >= breakpointsValues.lg && width < breakpointsValues.xl);
    setIsXxl(width >= breakpointsValues.xl);

    setIsMobile(width < breakpointsValues.md);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", handleResize);
    }

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isSm,
    isMd,
    isLg,
    isLgUp,
    isXl,
    isXxl,
    isMobile,
  };
};

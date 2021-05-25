import { useState, useEffect } from "react";

export const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); // useEffect안에서 다시 remove할 떈, 콜백형태로 해야함.
  }, []);

  return state;
};

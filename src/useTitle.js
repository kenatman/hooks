import { useState, useEffect } from "react";

export const useTitle = (initialValue) => {
  const [title, setTitle] = useState(initialValue);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

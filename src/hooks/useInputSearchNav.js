import { useEffect, useState } from "react";

export const useInputSearchNav = () => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    const inputElement = document.getElementById("search-nav");
    setElement(inputElement);
  }, []);

  return {
    inputSearchNav: element,
  };
};

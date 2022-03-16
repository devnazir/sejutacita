import { useEffect, useState } from "react";

export function useWindowSize() {
  const [value, setValue] = useState();

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setValue(e.target.innerWidth);
    });

    setValue(window.document.body.clientWidth);
  }, []);

  return {
    width: value,
  };
}

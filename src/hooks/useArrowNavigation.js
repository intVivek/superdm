import { useLayoutEffect, useRef, useState } from "react";

const useArrowNavigation = (selector) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useLayoutEffect(() => {
      const handleKeyDown = (e) => {
        const rows = document.querySelectorAll(selector);
        if (e.key === "ArrowUp" && selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        } else if (e.key === "ArrowDown" && selectedIndex < rows.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        }
      };
  
      const handleClick = (e) => {
        const clickedRow = e.target.closest(selector);
        if (clickedRow) {
          const index = Array.from(
            document.querySelectorAll(selector)
          ).indexOf(clickedRow);
          setSelectedIndex(index);
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("click", handleClick);
      window.addEventListener("mousedown", (e)=>e.preventDefault());
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("click", handleClick);
        window.removeEventListener("mousedown", (e)=>e.preventDefault());
      };
    }, [selectedIndex]);
  
    useLayoutEffect(() => {
      const rows = document.querySelectorAll(selector);
      rows[selectedIndex].focus();
    }, [selectedIndex]);

}

export default useArrowNavigation
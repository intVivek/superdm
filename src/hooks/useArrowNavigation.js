import { useLayoutEffect, useRef, useState } from "react";

const useArrowNavigation = ({deps}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const ref = useRef();

    const resetNavigation = () => {
      ref?.current?.scrollTo(0, 0)
      setSelectedIndex(0)
    }

    useLayoutEffect(() => {
      const handleKeyDown = (e) => {
        const rows = ref?.current?.childNodes || [];
        if (e.key === "ArrowUp" && selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        } else if (e.key === "ArrowDown" && selectedIndex < rows.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        }
      };
  
      const handleClick = (e) => {
        const rows = ref?.current?.childNodes || [];
        const clickedRow = e.target.parentNode;
        if (clickedRow) {
          const index = Array.from(rows).indexOf(clickedRow);
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
    }, [selectedIndex, ref.current, ref?.current?.childNodes, ...deps]);
  
    useLayoutEffect(() => {
      const rows = ref?.current?.childNodes || [];
      rows[selectedIndex]?.focus();
    }, [selectedIndex, ref.current, ...deps]);

    return {ref, selectedIndex, resetNavigation}
}

export default useArrowNavigation
import { useCallback, useLayoutEffect, useRef, useState } from "react";



const useArrowNavigation = ({disabled, isHorizonal, deps}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const ref = useRef();

    const resetNavigation = () => {
      ref?.current?.scrollTo(0, 0)
      setSelectedIndex(0)
    }

    const simulateEnterPress = useCallback((element) => {
      const event = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        charCode: 13,
        bubbles: true,
      });
    
      element?.dispatchEvent(event);
    }, []);

    useLayoutEffect(() => {
      if(disabled) return;
      const handleKeyDown = (e) => {
        const rows = ref?.current?.childNodes || [];
        if(isHorizonal){
          const container = document.querySelector('.table-container-scroll');
          if (e.key === "ArrowLeft" && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
            container.scrollTop -= 72;
            e.preventDefault(); 
          } else if (e.key === "ArrowRight" && selectedIndex < rows.length - 1) {
            setSelectedIndex(selectedIndex + 1);
            container.scrollTop += 72; 
            e.preventDefault(); 
          }
        }
        else{
          if (e.key === "ArrowUp" && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
          } else if (e.key === "ArrowDown" && selectedIndex < rows.length - 1) {
            setSelectedIndex(selectedIndex + 1);
          }
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
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("click", handleClick);
      };
    }, [selectedIndex, ref.current, ref?.current?.childNodes, isHorizonal, disabled, ...deps]);
  
    useLayoutEffect(() => {
      if(disabled) return;
      const rows = ref?.current?.childNodes || [];
      rows[selectedIndex]?.focus();
      if(isHorizonal)
      simulateEnterPress(rows[selectedIndex]);
    }, [selectedIndex, ref.current, ref?.current?.childNodes, isHorizonal, disabled, ...deps]);

    return {ref, selectedIndex, resetNavigation}
}

export default useArrowNavigation
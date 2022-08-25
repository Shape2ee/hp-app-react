import React, { useState, useEffect, useRef } from "react";

function useFadeUP({ref, duration}) {
  const [ createClass, setCreateClass ] = useState({});
  
  useEffect(() => {
    window.addEventListener("scroll", handleItemScroll)
  })
  
  let element = ref;
  element = useRef();
  
  function handleItemScroll() {
    const clientHeight = element.current.clientHeight + 500;
  
    if(window.scrollY > element.current.offsetTop - clientHeight) {
      setCreateClass(
        {
          transform: "translateY(0)",
          opacity: `${duration}`
        }
      )
    } else {
      setCreateClass({})
    }
  }

  return {...createClass}
}

export default useFadeUP;
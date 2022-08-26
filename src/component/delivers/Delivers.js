import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import TabList from './TabList';

const StyledSection = styled("section")`
  padding: 80px 24px;
  background-color: #111;
`

const StyledBox = styled("div")`
  transform: translateY(50px);
  opacity: 0;
  transition: 1s;
`

const Delivers = () => {

  const [ fadein, setFadein ] = useState({})
  const element = useRef();

  useEffect(() => {
    function fadeUpCheck() {
      window.addEventListener("scroll", handleScrollUp)
    }
    fadeUpCheck()

    return () => {
      window.removeEventListener("scroll", handleScrollUp)
    }
  })

  function handleScrollUp() {
    const clientHeight = element.current.clientHeight * 0.6 ;

    if(window.scrollY > element.current.offsetTop - clientHeight) {
      setFadein(
        {
          transform: "translateY(0)",
          opacity:"1"
        }
      )
    } else {
      setFadein({})
    }
  }



  return (
    <StyledSection>
      <StyledBox ref={element} style={{...fadein}}>
        <Title title={"HP Delivers"} color={"white"} />
        <TabList />
      </StyledBox>
    </StyledSection>
  );
};

export default Delivers;
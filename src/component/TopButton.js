import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import topBtn from '../assets/images/top.svg'

const StyledButton = styled("button")`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #000;
  border-radius: 50%;
  color: #fff;
  opacity: ${props => props.opacity};
  transition: opacity 0.3s, padding 0.3s;
  z-index: 9999;

  :hover {
    padding-bottom: 5px;
    background-color: #555;
  }
`


const TopButton = () => {
  const [btnOpacty, setBtnOpacity] = useState(0);

  useEffect(
    function handleBtnUpdate() {
      window.addEventListener("scroll",handleScrollCheck)
      handleScrollCheck()

      return () => {
        window.removeEventListener("scroll",handleScrollCheck)
      }
    }

  )

  function handleScrollCheck() {
    if(window.scrollY !== 0) {
      setBtnOpacity(1)
    } else {
      setBtnOpacity(0)
    }
  }

  function handleTopClick(e) {
    e.preventDefault();
    if(window.scrollY !== 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <StyledButton onClick={handleTopClick} opacity={btnOpacty}>
      <img src={topBtn} alt="위로가기" />
    </StyledButton>
  );
};

export default TopButton;
import React from 'react';
import styled from 'styled-components';

// images
import xBtn from "../assets/close.svg"

const StyledSide = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #111;
`

const StyledButton = styled("button")`
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const SideNav = () => {
  return (
    <StyledSide>
      <h2>hello</h2>
      <StyledButton>
        <img src={xBtn} alt="닫기" />
      </StyledButton>
    </StyledSide>
  );
};

export default SideNav;
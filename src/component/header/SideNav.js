import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledUl = styled("ul")`
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: ${(props) => props.height};
  background-color: #111;
  transition: height 0.5s 0.1s;
  text-align: center; 
  
  li {
    height: 60px;
    line-height: 60px;
    width: 100%;
    color: #fff;
    cursor: pointer;

    :hover {
      background-color: #fff;
      color: #000;
    }
  }
`

const SideNav = ({height}) => {
  return (
    <StyledUl height={height}>
      <Link to="/sustainability"><li>지속가능영향</li></Link>
      <li>노트북</li>
      <li>데스크탑</li>
      <li>프린트</li>
      <li>잉크&토너</li>
      <li>모니터</li>
      <li>액세서리</li>
    </StyledUl>
  );
};

export default SideNav;
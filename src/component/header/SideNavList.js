import React from 'react';
import styled from 'styled-components';

const StyledUl = styled("ul")`
  text-align: center;

  li {
    /* padding: 20px 0; */
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


const SideNavList = () => {
  return (
    <StyledUl>
      <li>노트북</li>
      <li>데스크탑</li>
      <li>프린트</li>
      <li>잉크&토너</li>
      <li>모니터</li>
      <li>액세서리</li>
      <li>케어팩</li>
      <li>주요안내</li>
      <li>활용정보</li>
    </StyledUl>
  );
};

export default SideNavList;
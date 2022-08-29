import React, { useState } from "react";
import styled from "styled-components";
import SideNav from './SideNav';
import SearchBox from "./SearchBox";

// images
import logo from "../../assets/HP_log_white.svg";
import search from "../../assets/search.svg";
import category from "../../assets/category.svg";
import closeBtn from "../../assets/close.svg"

const StyledWrap = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 60px;

  @media ${props => props.theme.desktop} {
    margin: 0 auto;
    padding: 0;
    width: 90%;  
    max-width: 1400px;
  }
`

const StyledHeader = styled("header")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #111;
  box-sizing: border-box;
  z-index: 9999;
`;

const StyledH1 = styled("h1")`
  margin-right: auto;
  width: 36px;
  height: 36px;
`;

const StyledButton = styled("button")`
  width: 20px;
  height: 20px;
  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const StyledMenu = styled("button")`
  width: 20px;
  height: 20px;
  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${props => props.theme.desktop} {
    display: none;
  }
`;

const StyledNav = styled("ul")`
  display: none;
  margin-right: 20px;
  color: #fff;

  li {
    margin: 0 15px;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  @media ${props => props.theme.desktop} {
    display: flex;
  }
`

const Header = () => {
  const [searchBox, setSearchBox] = useState(null);
  const [navHeight, setNavHeight] = useState("0px");

  const [menu, setMenu] = useState(category)

  function handleMenuClick(e) {
    e.preventDefault();
    if(menu === category) {
      setMenu(closeBtn)
      setNavHeight("540px");
    } else {
      setMenu(category)
      setNavHeight("0px");
    }
  };

  function handleSearchClick(e) {
    e.preventDefault();
    setSearchBox(
      <SearchBox handleCloseClick={handleCloseClick} />
    );
  };

  function handleCloseClick(e) {
    e.preventDefault();
    setSearchBox(null);
  };

  return (
    <StyledHeader>
      <StyledWrap>
        {/* 로고 */}
        <StyledH1>
          <a href="/">
            <img src={logo} alt="HP" />
          </a>
        </StyledH1>
        <StyledNav>
          <li>노트북</li>
          <li>데스크탑</li>
          <li>프린트</li>
          <li>잉크&토너</li>
          <li>모니터</li>
          <li>액세서리</li>
          <li>주요안내</li>
        </StyledNav>
        {/* 검색 */}
        <StyledButton onClick={handleSearchClick}>
          <img src={search} alt="검색" />
        </StyledButton>
        {/* 메뉴 */}
        <StyledMenu style={{ marginLeft: 30 }} onClick={handleMenuClick}>
          <img src={menu} alt="메뉴" />
        </StyledMenu>
        </StyledWrap>
        {searchBox}
        <SideNav height={navHeight} />
    </StyledHeader>
  );
};

export default Header;

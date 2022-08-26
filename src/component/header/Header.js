import React, { useState } from "react";
import styled from "styled-components";
// import SideNav from './SideNav';
import SearchBox from "./SearchBox";
// images
import logo from "../../assets/HP_log_white.svg";
import search from "../../assets/search.svg";
import category from "../../assets/category.svg";


const StyledHeader = styled("header")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 414px;
  padding: 0 24px;
  height: 60px;
  background-color: #111;
  transform: translateX(-50%);
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

const Header = () => {
  const [searchBox, setSearchBox] = useState(null)

  function handleMenuClick(e) {
    e.preventDefault();
  }

  function handleSearchClick(e) {
    e.preventDefault()
    console.log(e)
    setSearchBox(
      <SearchBox handleCloseClick={handleCloseClick} />
    )
  }

  function handleCloseClick(e) {
    e.preventDefault()
    setSearchBox(null)
  }

  return (
    <StyledHeader>
      {/* 로고 */}
      <StyledH1>
        <a href="/">
          <img src={logo} alt="HP" />
        </a>
      </StyledH1>
      {/* 검색 */}
      <StyledButton onClick={handleSearchClick}>
        <img src={search} alt="검색" />
      </StyledButton>
      {/* 메뉴 */}
      <StyledButton style={{ marginLeft: 30 }} onClick={handleMenuClick}>
        <img src={category} alt="메뉴" />
      </StyledButton>
      {searchBox}
    </StyledHeader>
  );
};

export default Header;

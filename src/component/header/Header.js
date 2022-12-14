import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SideNav from "./SideNav";

// images
import logo from "../../assets/HP_log_white.svg";
import search from "../../assets/search.svg";
import category from "../../assets/category.svg";
import closeBtn from "../../assets/close.svg";

const StyledWrap = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 60px;

  @media ${(props) => props.theme.desktop} {
    margin: 0 auto;
    padding: 0;
    width: 90%;
    max-width: 1400px;
  }
`;

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

  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

const StyledNav = styled("ul")`
  display: none;
  margin-right: 20px;
  height: 100%;
  line-height: 60px;
  color: #fff;

  li {
    position: relative;
    margin: 0 15px;
    height: 100%;
    cursor: pointer;

    :not(.link) {
      color: #ccc;
    }

    ::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 10px;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #fff;
      transform: translateX(-50%);
      transition: width 0.3s;
    }

    :hover::after {
      width: 100%;
    }
  }

  @media ${(props) => props.theme.desktop} {
    display: flex;
  }
`;

const Header = () => {
  const [navHeight, setNavHeight] = useState("0px");
  const [menu, setMenu] = useState(category);
  const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  function handleMenuClick(e) {
    e.preventDefault();
    if (menu === category) {
      console.log("snffl");
      setMenu(closeBtn);
      setNavHeight("360px");
    } else {
      setMenu(category);
      setNavHeight("0px");
    }
  }

  function handleMenuRemove() {
    setMenu(category);
    setNavHeight("0px");
  }

  const menuBtn = useRef();

  useEffect(function handleMenuFocusOut() {
    const target = menuBtn.current;
    target.addEventListener(
      isIos === true ? "mouseout" : "blur",
      handleMenuRemove
    );

    return () => {
      target.removeEventListener(
        isIos === true ? "mouseout" : "blur",
        handleMenuRemove
      );
    };
  });

  return (
    <StyledHeader>
      <StyledWrap>
        {/* ?????? */}
        <StyledH1>
          <Link to="/hp-app-react">
            <img src={logo} alt="HP" />
          </Link>
        </StyledH1>
        <StyledNav>
          <Link to="/sustainability">
            <li className="link">??????????????????</li>
          </Link>
          <li>?????????</li>
          <li>????????????</li>
          <li>?????????</li>
          <li>??????&??????</li>
          <li>????????????</li>
        </StyledNav>
        {/* ?????? */}
        <Link to="/hp-app-react/serch">
          <StyledButton>
            <img src={search} alt="??????" />
          </StyledButton>
        </Link>
        {/* ?????? */}
        <StyledMenu
          ref={menuBtn}
          style={{ marginLeft: 30 }}
          onClick={handleMenuClick}
        >
          <img src={menu} alt="??????" />
        </StyledMenu>
      </StyledWrap>
      <SideNav height={navHeight} />
    </StyledHeader>
  );
};

export default Header;

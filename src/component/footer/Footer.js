import React from "react";
import styled from "styled-components";

// layout
import FooterMenu from "./FooterMenu";
import FooterSns from "./FooterSns";

import dhLogo from "../../assets/DH_logo.svg";
import dhLogoWhite from "../../assets/DH_logo_w.svg";

const StyledFooter = styled("footer")`
  padding: 0 24px 80px;
  text-align: center;

  @media ${(props) => props.theme.desktop} {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 0 80px;
  }
`;

const StyledCopy = styled("p")`
  font-size: 12px;
  color: #999;
`;

const StyledLink = styled("a")`
  display: inline-block;
  margin: 0 auto 30px;
  padding: 0 20px 0 50px;
  height: 60px;
  line-height: 60px;
  background: url(${dhLogo}) no-repeat 20px 50% / 10%;
  border: 1px solid #ccc;
  border-radius: 10px;

  :hover {
    background-color: #0091cf;
    background-image: url(${dhLogoWhite});
    border-color: #0091cf;
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterMenu />
      <FooterSns />

      <StyledLink href="https://shape2ee.github.io/Portfolio" target="_blank">
        {/* <img src={dhlogo} alt="도형 포트폴리오 사이트 가기" /> */}
        포트폴리오 바로가기
      </StyledLink>
      <StyledCopy>© Copyright 2022 HP Development Company, LP</StyledCopy>
    </StyledFooter>
  );
};

export default Footer;

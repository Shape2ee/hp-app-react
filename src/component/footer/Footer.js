import React from 'react';
import styled from 'styled-components';

// layout
import FooterMenu from './FooterMenu'
import FooterSns from './FooterSns';

import dhlogo from '../../assets/DH_logo.svg'

const StyledFooter = styled("footer")`
  padding: 0 24px 80px;
`;

const StyledCopy = styled("p")`
  text-align: center;
  font-size: 12px;
  color: #999;
`

const StyledLink = styled("a")`
  display: block;
  margin: 0 auto 30px;
  width: 46px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    vertical-align: top;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterMenu />
      <FooterSns />
      
      <StyledLink href="https://shape2ee.github.io/Portfolio" target="_blank">
        <img src={dhlogo} alt="도형 포트폴리오 사이트 가기" />
      </StyledLink>
      <StyledCopy>© Copyright 2022 HP Development Company, LP</StyledCopy>
    </StyledFooter>
  );
};

export default Footer;
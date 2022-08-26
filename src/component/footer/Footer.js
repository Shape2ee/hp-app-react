import React from 'react';
import styled from 'styled-components';

// layout
import FooterMenu from './FooterMenu'
import FooterSns from './FooterSns';

const StyledFooter = styled("footer")`
  padding: 0 24px 80px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterMenu />
      <FooterSns />
    </StyledFooter>
  );
};

export default Footer;
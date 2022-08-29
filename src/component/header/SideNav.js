import React from 'react';
import styled from 'styled-components';
import SideNavList from './SideNavList';

// images

const StyledSide = styled("div")`
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: ${(props) => props.height};
  background-color: #111;
  transition: height 0.5s;
`

const SideNav = ({height}) => {
  return (
    <StyledSide height={height}>
      <SideNavList />
    </StyledSide>
  );
};

export default SideNav;
import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled("div")`
  position: relative;
  width: 100%;
  height: 700px;
  background-color: #ccc;
`;

const StyledTextBox = styled("div")`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
`

const Visual = () => {
  return (
  <StyledBanner>
    <StyledTextBox>
      <h2>We’re taking action, today</h2>
    </StyledTextBox> 
  </StyledBanner>
  );
};

export default Visual;
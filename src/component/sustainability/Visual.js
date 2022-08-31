import React from 'react';
import styled from 'styled-components';
import mainImage from '../../assets/images/subPage/visual.png'

const StyledBanner = styled("div")`
  position: relative;
  width: 100%;
  height: 700px;
  background: url(${mainImage}) no-repeat 50% / cover;
`;

const StyledTextBox = styled("div")`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;

  h2 {
    font-size: 56px;
    font-weight: 700;
    color: #fff;
  
    .block {
      display: block;
    }

    @media ${props => props.theme.desktop} {
      font-size: 100px;
    }
  }
`

const Visual = () => {
  return (
  <StyledBanner>S
    <StyledTextBox>
      <h2>We’re taking<span className="block">action, today</span></h2>
    </StyledTextBox> 
  </StyledBanner>
  );
};

export default Visual;
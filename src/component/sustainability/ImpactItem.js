import React from 'react';
import styled from 'styled-components';

const StyledBox = styled("div")`
  margin-bottom: 40px;
  width: 50%;
  text-align: center;

  h3 {
    margin-top: 10px;
    line-height: 22px;
  }

  .block {
    display: block;
  }

  @media ${props => props.theme.desktop} {
    width: 25%;
  }
`

const ImpactItem = ({src, title}) => {
  return (
    <StyledBox>
      <img src={src} alt='ico1'/>    
      {title}
    </StyledBox>
  );
};

export default ImpactItem;
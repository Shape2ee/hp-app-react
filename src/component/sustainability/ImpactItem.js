import React from 'react';
import styled from 'styled-components';

const StyledBox = styled("div")`
  margin: 0 10px 40px;
  padding: 40px 20px;
  width: calc(50% - 20px);
  text-align: center;
  background-color: #fefefe;
  border-radius: 20px;
  box-shadow: 0 10px 16px rgba(0,0,0,0.1);
  transition: box-shadow 0.5s;

  h3 {
    margin-top: 10px;
    line-height: 22px;
  }

  .block {
    display: block;
  }

  :hover {
    box-shadow: 0 10px 16px rgba(0,0,0,0.3);
  }

  @media ${props => props.theme.desktop} {
    width: calc(25% - 20px);
    margin-bottom: 0;
  }
`

const ImpactItem = ({src, title}) => {
  return (
    <StyledBox>
      <img src={src} alt={title}/>    
      {title}
    </StyledBox>
  );
};

export default ImpactItem;
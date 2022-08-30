import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled("h2")`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.color ? props.color : "black"};

  @media ${props => props.theme.desktop} {
    font-size: 40px;
  }
`;

const Title = ({title, color}) => {
  return (
    <StyledTitle color={color}>
      {title}
    </StyledTitle>
  );
};

export default Title;
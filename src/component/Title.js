import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled("h2")`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.color ? props.color : "black"};
`;

const Title = ({title, color}) => {
  return (
    <StyledTitle color={color}>
      {title}
    </StyledTitle>
  );
};

export default Title;
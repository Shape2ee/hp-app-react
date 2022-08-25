import React from 'react';
import styled from 'styled-components';

const StyledButton = styled("button")`
  margin-top: 30px;
  padding: 0 20px;
  height: 40px;
  background-color: ${(props) => props.bg};
  border-radius: 20px;
  color: ${(props) => props.text ? props.text : "black" };
  line-height: 40px;
  font-size: 14px;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;

  :hover {
    opacity: 0.8;
  }
`;

const Button = ({title, bg, text}) => {
  return (
    <StyledButton bg={bg} text={text}>{title}</StyledButton>
  );
};

export default Button;
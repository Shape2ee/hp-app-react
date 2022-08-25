import React from "react";
import styled from "styled-components";
import Title from "../Title";
import search from "../../assets/search_bk.svg";

const StyledSection = styled("section")`
  padding: 80px 24px;
`;

const StyledInputBox = styled("div")`
  position: relative;
  margin: 40px auto;
`;

const StyledInput = styled("input")`
  width: 100%;
  height: 50px;
  background: #f2f5f7 url();
  border: none;
  border-radius: 25px;
  text-indent: 50px;

  :active,
  :focus {
    outline: none;
  }

  :active + button,
  :focus + button {
    opacity: 1;
  }

  ::placeholder {
    font-size: 16px;
    color: #000;
    opacity: 0.5;
  }
`;

const StyledButton = styled("button")`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  opacity: 0.5;
`;

const Search = () => {
  return (
    <StyledSection>
      <Title title={"원하시는 제품이 있으신가요?"} />
      <StyledInputBox>
        <StyledInput type="text" placeholder="찾으시는 제품을 입력해주세요" />
        <StyledButton type="button">
          <img src={search} alt="검색" />
        </StyledButton>
      </StyledInputBox>
    </StyledSection>
  );
};

export default Search;

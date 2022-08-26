import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledSection = styled("section")`
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
  }
`;

const StyledTextBox = styled("div")`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
  color: #fff;

  h2 {
    margin-bottom: 20px;
    font-size: 18px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;

    .block {
      display: block;
    }
  }
`;

const Employment = () => {
  return (
    <StyledSection>
      <StyledTextBox>
        <h2>채용</h2>
        <h3>
          함께 성장할<span className="block">인재를 찾습니다</span>
        </h3>
        <Button title={"더 알아보기"} bg={"white"} />
      </StyledTextBox>
      <img
        src="https://via.placeholder.com/390x250/555/767676?text=banner"
        alt="채용"
      />
    </StyledSection>
  );
};

export default Employment;

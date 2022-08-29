import React from "react";
import styled from "styled-components";
import Button from "./Button";

import banner from "../assets/images/middleBanner.png";

const StyledSection = styled("section")`
  position: relative;
  padding: 80px 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
  }

  @media ${props => props.theme.desktop} {
    overflow: hidden;
    margin: 120px auto;
    padding: 0;
    width: 90%;
    height: 400px;
    max-width: 1400px;
    border-radius: 30px;

    img {
      object-position: 0 70%;
    }
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

  @media ${props => props.theme.desktop} {
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;


    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 46px;
      line-height: 54px;
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
        src={banner}
        alt="채용"
      />
    </StyledSection>
  );
};

export default Employment;

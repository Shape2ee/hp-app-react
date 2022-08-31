import React from "react";
import styled from "styled-components";
import ImgBox from "../ImgBox";
import Button from "../Button";

const StyledTextBox = styled("div")`
  margin-top: 30px;
  padding-bottom: 60px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    margin-top: 10px;
    line-height: 22px;
    color: #555;
  }
`

const StoryItem = ({data}) => {
  const { title, src, text } = data;
  
  return (
    <div>
      <ImgBox src={src}/>
      <StyledTextBox>
        <h3>{title}</h3>
        <p>
          {text}
        </p>
        <Button title={"자세히 보기"} bg={"black"} text={"white"}/>
      </StyledTextBox>
    </div>
  );
};

export default StoryItem;

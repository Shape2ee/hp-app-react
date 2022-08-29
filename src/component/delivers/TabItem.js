import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImgBox from "../ImgBox";
import Button from "../Button";

const StyledBox = styled("div")`
  color: #fff;

  h3 {
    margin: 40px 0 20px;
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: #ccc;
  }
`;

const TabItem = ({ src, alt, title, subTitle }) => {
  const [height, setHeight] = useState("");

  function handleSizeChange() {
    if (window.innerWidth >= 768) {
      setHeight("600px");
    } else {
      setHeight("");
    }
  }

  useEffect(function sizeCheck() {
    window.addEventListener("resize", handleSizeChange);
    window.addEventListener("load", handleSizeChange);
    handleSizeChange();

    return () => {
      window.removeEventListener("resize", handleSizeChange);
      window.removeEventListener("load", handleSizeChange);
    };
  });

  return (
    <StyledBox>
      <ImgBox src={src} alt={alt} height={height} />
      <div>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <Button title={"더 알아보기"} />
      </div>
    </StyledBox>
  );
};

export default TabItem;

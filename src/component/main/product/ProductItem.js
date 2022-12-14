import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ImgBox from "../../ImgBox";

const StyledItem = styled("li")`
  opacity: 0;
  position: relative;
  margin-bottom: 20px;
  height: 250px;
  transform: translateY(50%);
  transition: 1s;

  @media ${props => props.theme.desktop} {
    margin: 0 10px 20px;
  }
`;

const StyledH3 = styled("h3")`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ProductItem = ({ src, title }) => {
  const [createClass, setCreateClass] = useState({});

  function handleItemScroll() {
    const clientHeight = element.current.clientHeight + 500;

    if (window.scrollY > element.current.offsetTop - clientHeight) {
      setCreateClass({
        transform: "translateY(0)",
        opacity: "1",
      });
    } else {
      setCreateClass({});
    }
  }

  useEffect(() => {
    function fadeUpCheck() {
      window.addEventListener("scroll", handleItemScroll);
    }
    fadeUpCheck();

    return () => {
      window.removeEventListener("scroll", handleItemScroll);
    }
  });

  const element = useRef();

  

  return (
    <StyledItem ref={element} style={{ ...createClass }}>
      <ImgBox src={src} alt={title} />
      <StyledH3>{title}</StyledH3>
    </StyledItem>
  );
};

export default ProductItem;

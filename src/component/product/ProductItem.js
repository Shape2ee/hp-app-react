import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';

const StyledItem = styled("li")`
  opacity: 0;
  position: relative;
  margin-bottom: 20px;
  transform: translateY(50%);
  transition: 1s;
`

const StyledH3 = styled("h3")`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
`

const ProductItem = ({src, title}) => {

  const [ createClass, setCreateClass ] = useState({});

  useEffect(() => {
    window.addEventListener("scroll", handleItemScroll)
  })
  
  const element = useRef();

  function handleItemScroll() {
    const clientHeight = element.current.clientHeight + 500;

    if(window.scrollY > element.current.offsetTop - clientHeight) {
      setCreateClass(
        {
          transform: "translateY(0)",
          opacity:"1"
        }
      )
    } else {
      setCreateClass({})
    }
  }

  return (
    <StyledItem ref={element} style={{...createClass}} >
      <ImgBox src={src} alt={title} />
        <StyledH3>{title}</StyledH3>
    </StyledItem>
  );
};

export default ProductItem;
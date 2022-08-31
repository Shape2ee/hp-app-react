import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';
import Button from '../Button';

const StyledCard = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s;

  :last-child {
    margin-bottom: 0;
  }

  &.on {
    opacity: 1;
    transform: translateY(0px);
  }

  @media ${props => props.theme.desktop} {
    width: calc(33.333% - 20px);
    /* margin-right: 20px; */
    margin-bottom: 0;
  }
`

const StyledTextBox = styled("div")`
  order: 1;

  p {
    color: #555;
    line-height: 26px;
  }
`

const StyledTitle = styled("h3")`
  margin: 30px 0 16px;
  font-size: 24px;
  font-weight: 700;
`

const CardItem = ({title, text, src}) => {
  const swiper = useRef();

  useEffect(
    function handleSwiperUpdate() {
      window.addEventListener("scroll", handleScrollUp);
      handleScrollUp()

      return () => {
        window.removeEventListener("scroll", handleScrollUp);
      }
    }
  )

  function handleScrollUp() {
    const target = swiper.current;
    const start = target.offsetTop - target.offsetHeight;
    console.log(start)

    if(window.scrollY >= start) {
      target.classList.add("on");
    } else {
      target.classList.remove("on");
    }
  }

  return (
    <StyledCard ref={swiper}>
      <StyledTextBox>
        <StyledTitle>{title}</StyledTitle>
        <p>{text}</p>
        <Button title={"자세히 보기"} bg={"black"} text={"white"}/>
      </StyledTextBox>
      <ImgBox src={src} alt={title}/>
    </StyledCard>
  );
};

export default CardItem;
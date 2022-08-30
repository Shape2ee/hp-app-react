import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const StyledSwiper = styled(Swiper)`
  overflow: visible;
  width: 90%;
  max-width: 1400px;
  height: 300px;

  .swiper-slide {
    transform: scale(0.8);
    /* width: 30%; */
    background-color: #555;
    opacity: 0.5;
    transition: transform 0.3s, opacity 0.3s ;
  }

  .swiper-slide-active {
    transform: scale(1);
    opacity: 1;
  }
`

const StyledWrap = styled("div")`
  position: relative;
  overflow: hidden;
  /* background-color: #f1f1f1; */
`

const ImpactStory = () => {
  return (
    <StyledWrap>
      <StyledShadowBox left={"0"} />
      <StyledShadowBox right={"0"} />
      <StyledSwiper
        loop={true}
        slidesPerView={1}
        // spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </StyledSwiper>
    </StyledWrap>
  );
};

export default ImpactStory;

const StyledShadowBox = styled("div")`
  position: absolute;
  top:0;
  left: ${props => props.left ? props.left : "auto"};
  right: ${props => props.right ? props.right : "auto"};
  width: 300px;
  height: 100%;
  background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 99;
`
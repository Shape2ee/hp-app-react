import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ImgBox from "./ImgBox";
import Title from "./Title";


// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const StyledSection = styled("section")`
  overflow: hidden;
  padding: 80px 24px;
`;

const StyledTextBox = styled("div")`
  text-align: center;
`;

const StyledText = styled("p")`
  font-size: 16px;
  line-height: 22px;
  color: #555;
`;

const StyledSwiper = styled(Swiper)`
  overflow: visible;
  width: 100%;
  margin-top: 60px;

  .swiper-pagination {
    bottom: 0;
    /* bottom: -20px; */
    --swiper-theme-color: #000;
  }
`;

const StyledFigure = styled("figure")`
  display: flex;
  flex-direction: column;

  figcaption {
    margin: 20px 0 40px;
    width: 100%;
    text-align: center;
  }
`;

const TodayEvent = () => {
  SwiperCore.use(Pagination);

  return (
    <StyledSection>
      <StyledTextBox>
        <Title title={"오늘의 추천"} />
        <StyledText>
          HP는 지금껏 세상이 보지 못한 위대한 기술의 대가들을 모아 디지털
          라이프를 혁신하고 재창조하기 위해 노력하고 있습니다.
        </StyledText>
        <Button title={"자세히보기"} bg={"black"} text={"white"} />
      </StyledTextBox>

      <StyledSwiper
        spaceBetween={24}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <a href="#">
            <StyledFigure>
              <ImgBox src={"https://via.placeholder.com/400x300/ddd/fff?text=img1"} alt={"img1"} />
              <figcaption>Hello World</figcaption>
            </StyledFigure>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <StyledFigure>
              <ImgBox src={"https://via.placeholder.com/400x300/ddd/fff?text=img2"} alt={"img1"} />
              <figcaption>Hello World</figcaption>
            </StyledFigure>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <StyledFigure>
              <ImgBox src={"https://via.placeholder.com/400x300/ddd/fff?text=img3"} alt={"img1"} />
              <figcaption>Hello World</figcaption>
            </StyledFigure>
          </a>
        </SwiperSlide>

      </StyledSwiper>
    </StyledSection>
  );
};

export default TodayEvent;
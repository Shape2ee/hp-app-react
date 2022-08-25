import React from "react";
import styled from "styled-components";
import Button from "./Button";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const StyledSection = styled("section")`
  overflow: hidden;
  padding: 80px 24px;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
`;

const StyledTextBox = styled("div")`
  text-align: center;
`;

const StyledTitle = styled("h2")`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 700;
`;

const StyledText = styled("p")`
  font-size: 16px;
  line-height: 22px;
  color: #555;
`;

const StyledSwiper = styled(Swiper)`
  overflow: visible;
  margin-top: 60px;
  width: 100%;

  .swiper-pagination {
    bottom: 0;
    /* bottom: -20px; */
  }
`;

const StyledFigure = styled("figure")`
  display: flex;
  flex-direction: column;

  caption {
    margin: 20px 0 40px;
    width: 100%;
    text-align: center;
  }
`;

const StyledImgBox = styled("div")`
  overflow: hidden;
  border-radius: 20px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TodayEvent = () => {
  SwiperCore.use(Pagination);

  return (
    <StyledSection>
      <StyledTextBox>
        <StyledTitle>오늘의 추천</StyledTitle>
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
              <StyledImgBox>
                <img
                  src="https://via.placeholder.com/400x200/ddd/fff?text=img1"
                  alt="이미지1"
                />
              </StyledImgBox>
              <caption>Hello World</caption>
            </StyledFigure>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <StyledFigure>
              <StyledImgBox>
                <img
                  src="https://via.placeholder.com/400x200/ddd/fff?text=img1"
                  alt="이미지1"
                />
              </StyledImgBox>
              <caption>Hello World</caption>
            </StyledFigure>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <StyledFigure>
              <StyledImgBox>
                <img
                  src="https://via.placeholder.com/400x200/ddd/fff?text=img1"
                  alt="이미지1"
                />
              </StyledImgBox>
              <caption>Hello World</caption>
            </StyledFigure>
          </a>
        </SwiperSlide>
      </StyledSwiper>
    </StyledSection>
  );
};

export default TodayEvent;
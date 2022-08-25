import React from 'react';
import styled from 'styled-components';
import ImgBox from './ImgBox';
import Button from './Button';
import Title from './Title';
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const StyledSection = styled("section")`
overflow: hidden;
  margin: 80px 0;
  padding: 0 24px;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
`;

const StyledSwiper = styled(Swiper)`
  overflow: visible;
  width: 100%;
  margin-top: 48px;

  .swiper-pagination {
    bottom: 0;
    --swiper-theme-color: #000;
  }
`
const StyledItem = styled("div")`
  padding-bottom: 40px;
`

const StyledTextBox = styled("div")`
  margin-top: 20px;

  h3 {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    line-height: 22px;
    color: #555;
  }
`

const Sustainable = () => {
  SwiperCore.use(Pagination);

  return (
    <StyledSection>
      <Title title={"지속 가능한 영향력"}/>
      <StyledSwiper
        spaceBetween={24}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <a href="#">
            <StyledItem>
              <ImgBox src={"https://via.placeholder.com/400x300/ddd/fff?text=img1"} alt={"img1"} />
              <StyledTextBox>
                <h3>기후 행동</h3>
                <p>책임 있는 산림 관리부터 재생 가능 에너지 및 자재 재사용에 이르기까지, 온실 가스(GHG) 배출량 제로라는 중요한 목표를 달성하는 방법은 다음과 같습니다.</p>
              </StyledTextBox>
              <Button title={"더 알아보기"} bg={"black"} text={"white"}/>
            </StyledItem>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <div>
              <ImgBox src={"https://via.placeholder.com/400x300/ddd/fff?text=img1"} alt={"img1"} />
              <StyledTextBox>
                <h3>기후 행동</h3>
                <p>책임 있는 산림 관리부터 재생 가능 에너지 및 자재 재사용에 이르기까지, 온실 가스(GHG) 배출량 제로라는 중요한 목표를 달성하는 방법은 다음과 같습니다.</p>
              </StyledTextBox>
              <Button title={"더 알아보기"} bg={"black"} text={"white"}/>
            </div>
          </a>
        </SwiperSlide>
      </StyledSwiper>
    </StyledSection>
  );
};

export default Sustainable;
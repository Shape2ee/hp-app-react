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

// images
import img1 from "../assets/images/today1.jpg"
import img2 from "../assets/images/today2.jpg"
import img3 from "../assets/images/today3.jpg"
import img4 from "../assets/images/today4.jpg"
import img5 from "../assets/images/today5.jpg"

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
    font-size: 24px;
    line-height: 30px;
    .block {
      display: block;
    }
  }
`;

const TodayEvent = () => {
  SwiperCore.use(Pagination);
  const slideData = [
    {
      title: (
        <figcaption>
          <p>하이퍼엑스 게이밍<span className="block">패키지 특가</span></p>
        </figcaption>
      ),
      link:"#",
      imgUrl: img1,
    },
    {
      title: (
        <figcaption>
          <p>게이밍<span className="block">노트북 추천</span></p>
        </figcaption>
      ),
      link:"#",
      imgUrl: img2,
    },
    {
      title: (
        <figcaption>
          <p>레이저젯 프린터<span className="block">구매 혜택</span></p>
        </figcaption>
      ),
      link:"#",
      imgUrl: img3,
    },
    {
      title: (
        <figcaption>
          <p>대화면 노트북으로<span className="block">생산성 증대</span></p>
        </figcaption>
      ),
      link:"#",
      imgUrl: img4,
    },
    {
      title: (
        <figcaption>
          <p>프리미엄 노트북 및<span className="block">Z북 워크스테이션</span></p>
        </figcaption>
      ),
      link:"#",
      imgUrl: img5,
    }
  ]

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
        {slideData.map( (item, idx) => (
          <SwiperSlide key={idx}>
            <a href={item.link}>
              <StyledFigure>
                <ImgBox src={item.imgUrl} alt={item.title} />
                {item.title}
              </StyledFigure>
            </a>
          </SwiperSlide>
        ))}

      </StyledSwiper>
    </StyledSection>
  );
};

export default TodayEvent;
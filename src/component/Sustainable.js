import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgBox from './ImgBox';
import Button from './Button';
import Title from './Title';
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// images
import climate from "../assets/images/climate.png"
import human from "../assets/images/human.png"
import digital from "../assets/images/digital.png"


const StyledSection = styled("section")`
  overflow: hidden;
  margin: 80px 0;
  padding: 0 24px;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;

  @media ${props => props.theme.desktop} {
    width: 90%;
    max-width: 1400px;
    margin: 120px auto;
    padding: 0;
  }

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

  @media ${props => props.theme.desktop} {
    margin-top: 30px;
    width: 50%;

    h3 {
      margin-bottom: 20px;
      font-size: 32px;
    }
  }
`

const Sustainable = () => {
  const [height, setHeight] = useState("");

  function handleSizeChange() {
    if(window.innerWidth >= 768 ) {
      setHeight("400px")
    } else {
      setHeight("")
    }
  }

  useEffect(
    function sizeCheck() {
      window.addEventListener("resize", handleSizeChange);
      window.addEventListener("load", handleSizeChange);
      handleSizeChange()

      return () => {
        window.removeEventListener("resize", handleSizeChange);
        window.removeEventListener("load", handleSizeChange);
      }
    }
  )
  
  SwiperCore.use(Pagination);

  const slideData = [
    {
      title:"기후 행동",
      link: "#",
      imgUrl: climate,
      text: "책임 있는 산림 관리부터 재생 가능 에너지 및 자재 재사용에 이르기까지, 온실 가스(GHG) 배출량 제로라는 중요한 목표를 달성하는 방법은 다음과 같습니다.",
    },
    {
      title:"인권",
      link: "#",
      imgUrl: human,
      text: "IT 공급망 강화는 공급  업체 인력의 필수 작업자 및 관리 기술을 개선하는 것으로 시작됩니다. 우리가 그들을 위한 역량 강화 프로그램을 개발하는 방법을 알아보십시오.",
    },
    {
      title:"디지털 자산",
      link: "#",
      imgUrl: digital,
      text: "내일의 변화의 주체는 오늘 레벨업을 하고 있습니다. HP LIFE 및 더 많은 교육 이니셔티브를 통해 이러한 기회를 창출하도록 돕고 있습니다.",
    },
  ]

  return (
    <StyledSection>
      <Title title={"지속 가능한 영향력"}/>
      <StyledSwiper
        spaceBetween={24}
        pagination={{ clickable: true }}
      >
        {slideData.map( (item, idx) => (
          <SwiperSlide key={idx}>
              <StyledItem>
                <ImgBox src={item.imgUrl} alt={"img1"} height={height}/>
                <StyledTextBox>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Button title={"더 알아보기"} bg={"black"} text={"white"}/>
                </StyledTextBox>
              </StyledItem>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledSection>
  );
};

export default Sustainable;
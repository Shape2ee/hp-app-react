import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// images
import banner1 from "../assets/images/banner1.png"
import banner2 from "../assets/images/banner2.png"
import banner3 from "../assets/images/banner3.png"
import pcBanner1 from "../assets/images/banner1_pc.png"
import pcBanner2 from "../assets/images/banner2_pc.png"
import pcBanner3 from "../assets/images/banner3_pc.png"

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 640px;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;

  .slideItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: no-repeat 50% / cover;

    @media ${props => props.theme.desktop} {
      align-items: flex-start;
    }
  }

  .swiper-pagination {
    bottom: 40px;
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-theme-color: #fff;
  }
`;

const StyledTextBox = styled("div")`
  margin-top: 100px;
  text-align: center;
  color: #fff;

  @media ${props => props.theme.desktop} {
    text-align: left;
    margin-top: 200px;
    margin-left: 15vw;
  }
`;

const StyledTitle = styled("h2")`
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 700;

  @media ${props => props.theme.dektop} {
    font-size: 28px;
  }
`

const StyledText = styled("p")`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;

  .block {
    display: block;
  }

  @media ${props => props.theme.desktop} {
    font-size: 46px;
    line-height: 56px;
    margin: 20px 0;
  }
`

const BigBanner = () => {
  SwiperCore.use(Pagination);

  const slideData = [
    {
      id: 1,
      title: "HyperX",
      subTitle1: "서라운드 사운드와",
      subTitle2: "저음 조절 기능으로 진화",
      bg: banner1,
    },
    {
      id: 2,
      title: "OMEN",
      subTitle1: "실력만이",
      subTitle2: "너를 증명한다",
      bg: banner2,
    },
    {
      id: 3,
      title: "Z by HP",
      subTitle1: "고성능 노트북, 데스크탑",
      subTitle2: "많은 작업도 초고속 처리!",
      bg: banner3,
    },
  ];

  const [bgImg, setBgImg] = useState([...slideData]);

  function handleBgChange() {
    const copyList = [...slideData]
    const pcImages = [ pcBanner1, pcBanner2, pcBanner3]
    
    if(window.innerWidth >= 768) {
      copyList.forEach( (item, idx) => {
        item.bg = pcImages[idx]
      })
      setBgImg([...copyList])
    } else {
      setBgImg([...slideData])
    }
  }
  
  useEffect( () => {
    function handleImgUpdate() {
      window.addEventListener("resize", handleBgChange)
      window.addEventListener("load", handleBgChange)
    }
    handleImgUpdate()

    return () => {
      window.removeEventListener("resize", handleBgChange)
      window.removeEventListener("load", handleBgChange)
    }
  }
    
  )

  return (
    <StyledSwiper
      effect={"fade"}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, EffectFade, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {slideData.map((item, idx) => (
        <SwiperSlide
          className="slideItem"
          key={item.id}
          style={{
            backgroundImage: `url(${bgImg[idx].bg})`
          }}
        >
          <StyledTextBox>
            <StyledTitle>{item.title}</StyledTitle>
            <StyledText>
              {item.subTitle1}
              <span className="block">{item.subTitle2}</span>
            </StyledText>
            <Button title={"더 알아보기"} bg={"white"} />
          </StyledTextBox>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default BigBanner;


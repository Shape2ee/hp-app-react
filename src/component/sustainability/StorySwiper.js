import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StoryItem from "./StoryItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import story1 from '../../assets/images/subPage/story_1.png'
import story2 from '../../assets/images/subPage/story_2.png'
import story3 from '../../assets/images/subPage/story_3.png'
import story4 from '../../assets/images/subPage/story_4.png'

const StyledSwiper = styled(Swiper)`
  margin-top: 40px;
  transform: translateY(100px);
  opacity: 0;
  transition: all 1s;

  .swiper-pagination {
    bottom: 0;
    --swiper-theme-color: #000
  }

  &.on {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImpactStory = () => {

  const data = [
    {
      title: "세상을 구하는 소녀들을 만나다",
      text: "우승자는 혁신에 박차를 가하고 환경 및 사회적 영향을 미치는 독창적인 자체 개발 솔루션을 찾기 위한 첫번때 도전에서 밝혔습니다.",
      src: story1,
    },
    {
      title: "식목일 및 그 이후를 위해 Dr.Jane Goodall과 협력",
      text: "생태학자이자 환경 보호론자인 그녀의 열정과 목소리를 지구에서 가장 소중한 자원 중 하나를 심고 보호하기 위한 풀뿌리 노력인 Jane's Green Hope로 돌립니다.",
      src: story2,
    },
    {
      title: "2021년 지속 가능한 영향 보고서",
      text: "작년에 HP는 일회용 플라스틱의 상당한 감소, 재활용 플라스틱 혁신의 발전을 보고했습니다.HP는 기후 행동, 디지털 형평성 인권에 관한 목표를 향해 전진합니다.",
      src: story3,
    },
    {
      title: "삶을 개선하는 기술에 대한 평등한 접근을 위해 싸우는 7개의 비영리 단체",
      text: "HP와 Aspen Institute는 작업을 확장하기 위해 자금과 지원을 받을 비영리 단체를 발표합니다.",
      src: story4,
    },
  ]

  
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

    if(window.scrollY >= start) {
      target.classList.add("on");
    } else {
      target.classList.remove("on");
    }
  }


  return (
    <StyledSwiper
      ref={swiper}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
          <StoryItem data={data[idx]}/>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default ImpactStory;

import React from 'react';
import styled from 'styled-components';
import Button from './Button';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 640px;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;

  .slideItem {
    display:flex;
    flex-direction: column;
    align-items: center;
    background: no-repeat 50% / cover;
  }

  .swiper-pagination {
    bottom: 40px;
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-theme-color: #fff;
  }
`

const StyledTextBox = styled("div")`
  margin-top: 80px;
  text-align: center;
  color: #fff;

  h2 {
    margin-bottom: 14px;
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  }

  .block {
    display: block;
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
      bg: "https://via.placeholder.com/400x600/555/ddd?text=img1"
    },
    {
      id: 2,
      title: "HyperX",
      subTitle1: "실력만이",
      subTitle2: "너를 증명한다",
      bg: "https://via.placeholder.com/400x600/555/ddd?text=img2"
    },
    {
      id: 3,
      title: "HyperX",
      subTitle1: "서라운드 사운드와",
      subTitle2: "저음 조절 기능으로 진화",
      bg: "https://via.placeholder.com/400x600/555/ddd?text=img3"
    },
  ]

  return (
    <StyledSwiper
      spaceBetween={20}
      pagination={{ clickable: true }}
    >
      { slideData.map((item) => (

        <SwiperSlide className='slideItem' key={item.id} style={{backgroundImage:`url(${item.bg})`}}>
          <StyledTextBox>
            <h2>{item.title}</h2>
            <p>{item.subTitle1}<span className='block'>{item.subTitle2}</span></p>
          </StyledTextBox>
          <Button title={"더 알아보기"} bg={"white"} />
        </SwiperSlide>

      ))}
    </StyledSwiper>
  );
};

export default BigBanner;
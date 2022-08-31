import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

import img1 from '../../assets/images/subPage/card_1.png'
import img2 from '../../assets/images/subPage/card_2.png'
import img3 from '../../assets/images/subPage/card_3.png'

const StyledWrap = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  /* opacity: 0; */
  /* transition: all 1s; */

  @media ${props => props.theme.desktop} {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 60px;
  }
`

const Card = () => {

  const cardData = [
    {
      title: "기후환경",
      text: "책임 있는 산림 관리부터 재생 가능 에너지 및 자재 재사용에 이르기까지 온실 가스(GHG) 배출량 제로라는 중요한 목표를 달성하는 방법은 다음과 같습니다.",
      src: img1,
    },
    {
      title: "인권",
      text: "IT 공급망 강화는 공급  업체 인력의 필수 작업자 및 관리 기술을 개선하는 것으로 시작됩니다. 우리가 그들을 위한 역량 강화 프로그램을 개발하는 방법을 알아보십시오.",
      src: img2,
    },
    {
      title: "디지털 자산",
      text: "내일의 변화의 주체는 오늘 레벨업을 하고 있습니다. HP LIFE 및 더 많은 교육 이니셔티브를 통해 이러한 기회를 창출하도록 돕고 있습니다.",
      src: img3,
    },
  ]

 
  return (
    <StyledWrap>
      {cardData.map((item, idx) => (
        <CardItem key={idx} title={item.title} text={item.text} src={item.src}/>
      ))}
    </StyledWrap>
  );
};

export default Card;
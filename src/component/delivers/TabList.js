import React from 'react';
import styled from 'styled-components';
import TabItem from './TabItem';

// images
import tabImg1 from "../../assets/images/tab_img1.png"
import tabImg2 from "../../assets/images/tab_img2.png"
import tabImg3 from "../../assets/images/tab_img3.png"
import tabImg4 from "../../assets/images/tab_img4.png"

const StyledTabList = styled("ul")`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  margin: 20px 0 50px;
  color: #fff;
  font-size: 14px;

  li {
    position: relative;
    padding: 20px 0;
    cursor: pointer;
    color: #999;
  }

  li.active {
    color: #fff;
  }

  li::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      display: block;
      width: 0;
      height: 2px;
      background-color: #fff;
      transform: translateX(-50%);
      transition: width 0.3s;
  }

  li.active::after {
    width:100%;
  }
`

const TabList = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleTabClick(index) {
    setActiveIndex(index)
  }

  const tabArr = [
    {
      tabTitle: (
        <li key="tab1" className={activeIndex === 0 ? "active" : ""} onClick={() => handleTabClick(0)}>100% 정품</li>
      ),
      tabContent: (
        <TabItem
          src={tabImg1}
          alt={"img1"}
          title={"100% 오리지널 정품"}
          subTitle={"HP 공식 온라인 스토어는 100% 정품만을 판매하므로 안심하고 쇼핑할 수 있습니다."}
        />
      )
    },
    {
      tabTitle: (
        <li key="tab2" className={activeIndex === 1 ? "active" : ""} onClick={() => handleTabClick(1)}>무료배송</li>
      ),
      tabContent: (
        <TabItem
          src={tabImg2}
          alt={"img2"}
          title={"무료배송, 당일배송"}
          subTitle={"결제 후 2일 이내 배송되며, 배송비는 무료입니다."}
        />
      )
    },
    {
      tabTitle: (
        <li key="tab3" className={activeIndex === 2 ? "active" : ""} onClick={() => handleTabClick(2)}>회원혜택</li>
      ),
      tabContent: (
        <TabItem
          src={tabImg3}
          alt={"img3"}
          title={"회원혜택"}
          subTitle={"회원가입하시면 기본 3%, 최대 25만원 할인 받을 수 있는 쿠폰을 드립니다."}
        />
      )
    },
    {
      tabTitle: (
        <li key="tab4" className={activeIndex === 3 ? "active" : ""} onClick={() => handleTabClick(3)}>독점프로모션</li>
      ),
      tabContent: (
        <TabItem
          src={tabImg4}
          alt={"img1"}
          title={"독점 프로모션"}
          subTitle={"다양한 PC, 프린터 등을 쇼핑하십시오. 공식 온라인 스토어에서만 구매 가능합니다."}
        />
      )
    },
  ]

  return (
    <>
      <StyledTabList>
        {tabArr.map((item, idx) => {
          return item.tabTitle
        })}
      </StyledTabList>
      <div>
        {tabArr[activeIndex].tabContent}
      </div>
    </>
  );
};

export default TabList;
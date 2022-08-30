import React, { useState } from "react";
import styled from "styled-components";

import downArrow from "../../assets/down_arrow.svg";
const StyledMenu = styled("ul")`
  border-top: 1px solid #ccc;
  text-align: left;

  > li {
    /* display: flex; */
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    /* height: 40px; */
    cursor: pointer;

    ::after {
      content: "";
      position: absolute;
      top: 30px;
      right: 0;
      display: block;
      width: 20px;
      height: 20px;
      background: url(${downArrow}) no-repeat 50% / contain;
    }

    ul {
      display: none;
      margin-top: 20px;
    }

    li {
      padding: 20px;
      color: #555;
      cursor: pointer;
    }

    li:hover {
      text-decoration: underline;
    }
  }

  li.active::after {
    transform: rotate(180deg);
  }

  li.active ul {
    display: block;
  }

  @media ${(props) => props.theme.desktop} {
    display: flex;
    flex-direction: row;

    > li {
      width: 25%;
      font-size: 20px;
      cursor: default;

      ::after {
        display: none;
      }

      ul {
        display: block;
      }

      li {
        padding: 10px 0;
        font-size: 14px;
      }
    }
  }
`;

const FooterTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuList = [
    {
      title: (
        <li
          key="1"
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleInfoClick(0)}
        >
          회사소개
          <ul>
            <li>회사소개</li>
            <li>HP에 문의</li>
            <li>직업</li>
            <li>투자자 관계</li>
            <li>지속가능영향</li>
            <li>프레스 센터</li>
            <li>차고</li>
          </ul>
        </li>
      ),
    },
    {
      title: (
        <li
          key="2"
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleInfoClick(1)}
        >
          구매방법
          <ul>
            <li>온라인 쇼핑</li>
            <li>HP 담당자에게 전화</li>
            <li>리셀러 찾기</li>
            <li>엔터프라이즈스토어</li>
            <li>공공 부문 구매</li>
          </ul>
        </li>
      ),
    },
    {
      title: (
        <li
          key="3"
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleInfoClick(2)}
        >
          서비스
          <ul>
            <li>드라이버 다운로드</li>
            <li>지원 및 문제해결</li>
            <li>지역 사회</li>
            <li>제품 등록</li>
            <li>수리상태 확인</li>
            <li>교육 및 인증</li>
            <li>사기 경보</li>
            <li>보안센터</li>
          </ul>
        </li>
      ),
    },
    {
      title: (
        <li
          key="4"
          className={activeIndex === 3 ? "active" : ""}
          onClick={() => handleInfoClick(3)}
        >
          HP파트너
          <ul>
            <li>HP Amplify 파트너 프로그램</li>
            <li>HP 파트너 포털</li>
            <li>개발자</li>
          </ul>
        </li>
      ),
    },
  ];

  function handleInfoClick(idx) {
    if (activeIndex === idx) {
      setActiveIndex(null);
      return;
    }
    setActiveIndex(idx);
  }

  return <StyledMenu>{menuList.map((item) => item.title)}</StyledMenu>;
};

export default FooterTab;

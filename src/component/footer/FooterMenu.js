import React, { useState } from 'react';
import styled from 'styled-components';

import downArrow from "../../assets/down_arrow.svg"
const StyledMenu = styled("ul")`
  border-top: 1px solid #ccc;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    cursor: pointer;
    
    ::after {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      background: url(${downArrow}) no-repeat 50% / contain;
    }

    :hover {
      text-decoration: underline;
    }
  }
`;

const FooterTab = () => {
 

  const menuList = [ 
    {
      title: "회사소개",
      list: (
        <ul>
          <li>회사소개</li>
          <li>HP에 문의</li>
          <li>직업</li>
          <li>투자자 관계</li>
          <li>지속가능영향</li>
          <li>프레스 센터</li>
          <li>차고</li>
        </ul>
      )
    },
    {
      title: "구매방법",
      list: (
        <ul>
          <li>온라인 쇼핑</li>
          <li>HP 담당자에게 전화</li>
          <li>리셀러 찾기</li>
          <li>엔터프라이즈스토어</li>
          <li>공공 부문 구매</li>
        </ul>
      )
    },
    {
      title: "서비스",
      list: [ "드라이버 다운로드", "지원 및 문제해결", "지역 사회", "제품 등록", "수리상태 확인", "교육 및 인증","사기 경보", "보안센터" ]
      
    },
    {
      title: "HP파트너",
      list: [ "HP Amplify 파트너 프로그램", "HP 파트너 포털", "개발자" ]
    },
  ]

  return (
    <StyledMenu>
      {menuList.map( (item, idx) => (
        <li key={idx}>{item.title}
        </li>
        
      ))}
    </StyledMenu>
  );
};

export default FooterTab;
import React from "react";
import styled from "styled-components";
import ImpactItem from "./ImpactItem";

// images
import ico1 from "../../assets/images/subPage/ico1.png";
import ico2 from "../../assets/images/subPage/ico2.png";
import ico3 from "../../assets/images/subPage/ico3.png";
import ico4 from "../../assets/images/subPage/ico4.png";

const StyledDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

const ImpactList = () => {
  const data = [
    {
      title: (
        <h3>
          2,740그루의<span className="block">나무를 심었습니다.</span>
        </h3>
      ),
      src: ico1,
    },
    {
      title: (
        <h3>
          22,968명의<span className="block">학습자 활성화.</span>
        </h3>
      ),
      src: ico2,
    },
    {
      title: (
        <h3>
          352톤의 소모품 및<span className="block">하드웨어 재활용.</span>
        </h3>
      ),
      src: ico3,
    },
    {
      title: (
        <h3>
          다양한<span className="block">공급업체와 함께.</span>
        </h3>
      ),
      src: ico4,
    },
  ];

  return (
    <StyledDiv>
      {data.map((item, idx) => (
        <ImpactItem key={idx} src={item.src} title={item.title} />
      ))}
    </StyledDiv>
  );
};

export default ImpactList;

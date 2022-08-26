import React from "react";
import styled from "styled-components";
import Title from "../Title";
import ProductList from "./ProductList";

// images
import product1 from "../../assets/images/product1.png"
import product2 from "../../assets/images/product2.png"
import product3 from "../../assets/images/product3.png"
import product4 from "../../assets/images/product4.png"
import product5 from "../../assets/images/product5.png"

const StyledBox = styled("div")`
  margin: 80px 0;
  padding: 0 24px;
`;
const Product = () => {
  const contentArr = [
    {
      id: "item1",
      title: "노트북",
      imgUrl: product1,
    },
    {
      id: "item2",
      title: "데스크탑",
      imgUrl: product2,
    },
    {
      id: "item3",
      title: "프린트",
      imgUrl: product3,
    },
    {
      id: "item4",
      title: "잉크&토너",
      imgUrl: product4,
    },
    {
      id: "item5",
      title: "액세서리",
      imgUrl: product5,
    },
  ];

  return (
    <StyledBox>
      <Title title={"주요 제품"} />
      <ProductList data={contentArr} />
    </StyledBox>
  );
};

export default Product;

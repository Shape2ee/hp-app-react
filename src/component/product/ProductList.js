import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const StyledListBox = styled("ul")`
  margin-top: 40px;
`;

const ProductList = ({ data }) => {
  const contentArr = [
    {
      id: "item1",
      title: "노트북",
    },
    {
      id: "item2",
      title: "데스크탑",
    },
    {
      id: "item3",
      title: "프린트",
    },
    {
      id: "item4",
      title: "잉크&토너",
    },
    {
      id: "item5",
      title: "액세서리",
    },
    {
      id: "item6",
      title: "케어팩",
    },
  ];

  return (
    <StyledListBox>
      {data.map((item, idx) => (
        <ProductItem
          key={contentArr[idx].id}
          title={contentArr[idx].title}
          src={item.webformatURL}
        />
      ))}
    </StyledListBox>
  );
};

export default ProductList;

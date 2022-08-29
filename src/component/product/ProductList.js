import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const StyledListBox = styled("ul")`
  margin-top: 40px;

  @media ${props => props.theme.desktop} {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;

const ProductList = ({ data }) => {
  
  return (
    <StyledListBox>
      {data.map((item) => (
        <ProductItem
          key={item.id}
          title={item.title}
          src={item.imgUrl}
        />
      ))}
    </StyledListBox>
  );
};

export default ProductList;

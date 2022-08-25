import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import ProductList from './ProductList';


const StyledBox = styled("div")`
  margin: 80px 0;
  padding: 0 24px;
`
const Product = () => {
  return (
    <StyledBox>
      <Title title={"주요 제품"} />
      <ProductList />
    </StyledBox>
  );
};

export default Product;
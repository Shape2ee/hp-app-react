import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const StyledListBox = styled("ul")`
  margin-top: 40px;
`

const ProductList = () => {
  const contentArr = [
    {
      id:"item1",
      title: "노트북",
      src: "https://via.placeholder.com/390x250/555/999?text=img1"
    },
    {
      id:"item2",
      title: "데스크탑",
      src: "https://via.placeholder.com/390x250/555/999?text=img1"
    },
    {
      id:"item3",
      title: "프린트",
      src: "https://via.placeholder.com/390x250/555/999?text=img1"
    },
    {
      id:"item4",
      title: "잉크&토너",
      src: "https://via.placeholder.com/390x250/555/999?text=img1"
    },
    {
      id:"item5",
      title: "액세서리",
      src: "https://via.placeholder.com/390x250/555/999?text=img1"
    },
    {
      id:"item6",
      title: "케어팩",
      src: "https://via.placeholder.com/390x250/555/999?text=img1"
    },
  ]

  return (
    <StyledListBox>
      {contentArr.map( item => (
        <ProductItem key={item.id} title={item.title} src={item.src} />
      ))}
    </StyledListBox>
  );
};

export default ProductList;
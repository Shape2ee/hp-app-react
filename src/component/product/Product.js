import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../Title";
import ProductList from "./ProductList";
import axios from "axios";

const StyledBox = styled("div")`
  margin: 80px 0;
  padding: 0 24px;
`;
const Product = () => {
  const [imgData, setImgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "17498131-60c8163ebf480582b8b8ecb47";
    const url =
      "https://pixabay.com/api/?key=" +
      API_KEY +
      "&q=yellow+flowers&image_type=photo&per_page=6";
    axios
      .get(url)
      .then((res) => {
        setImgData(res.data.hits);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setImgData([]);
        setLoading(true);
        setError("api 주소를 확인해 보세요");
      });
  }, []);

  return (
    <StyledBox>
      <Title title={"주요 제품"} />
      <ProductList data={imgData} />
    </StyledBox>
  );
};

export default Product;

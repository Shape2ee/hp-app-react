import React from "react";
import styled from "styled-components";
import Bigbanner from "./main/BigBanner";
import TodayEvent from "./main/TodayEvent";
import Sustainable from "./main/Sustainable";
import Deliverse from "./main/delivers/Delivers";
import Product from "./main/product/Product";
import Employment from "./main/Employment";
import Search from "./main/search/Search";

const StyledMain = styled("main")`
  margin-top: 60px;
`;

const Main = () => {
  return (
    <StyledMain>
      <Bigbanner />
      <TodayEvent />
      <Sustainable />
      <Deliverse />
      <Product />
      <Employment />
      <Search />
    </StyledMain>
  );
};

export default Main;

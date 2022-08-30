import React from 'react';
import styled from 'styled-components';
import Bigbanner from './BigBanner'
import TodayEvent from './TodayEvent'
import Sustainable from './Sustainable'
import Deliverse from './delivers/Delivers'
import Product from './product/Product'
import Employment from './Employment'
import Search from './search/Search'

const StyledMain = styled("main")`
  margin-top: 60px;
`

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
import React from "react";
import { Reset } from "styled-reset";

// layout
import Header from "./component/header/Header";
import BigBanner from "./component/BigBanner";
import TodayEvent from "./component/TodayEvent";
import Sustainable from "./component/Sustainable";
import Delivers from "./component/delivers/Delivers";
import Product from "./component/product/Product";
import Employment from "./component/Employment";
import Search from "./component/search/Search";
import Footer from "./component/footer/Footer";


function App() {
  return (
    <div className="App">
      <Reset />
      <Header />
      <main>
        <BigBanner />
        <TodayEvent />
        <Sustainable />
        <Delivers />
        <Product />
        <Employment />
        <Search />
      </main>
      <Footer />
    </div>
  );
}

export default App;

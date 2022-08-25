import React from "react";
import { Reset } from "styled-reset";

// layout
import Header from "./component/Header";
import BigBanner from "./component/BigBanner";
import TodayEvent from "./component/TodayEvent";
import Sustainable from "./component/Sustainable";
import Delivers from "./component/delivers/Delivers";
import Product from "./component/product/Product";
import News from "./component/news/News";

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
        <News />

      </main>
    </div>
  );
}

export default App;

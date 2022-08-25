import React from "react";
import { Reset } from "styled-reset";

// layout
import Header from "./component/Header";
import BigBanner from "./component/BigBanner";
import TodayEvent from "./component/TodayEvent";

function App() {
  return (
    <div className="App">
      <Reset />
      <Header />
      <BigBanner />
      <TodayEvent />
    </div>
  );
}

export default App;

import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./component/theme";

// layout
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

// page
import Main from "./component/main/Main";
import Sustainability from "./component/sustainability/Sustainability";

function App() {
  return (
    <div className="App">
      <Reset />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sustainability" element={<Sustainability />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

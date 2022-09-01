import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SearchHead from "./SearchHead";
import SearchImgData from "./SearchImgData";

const StyledContainer = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fff;
  z-index: 9999;
`;

const SerchPage = () => {
  const [imgData, setImgData] = useState([]);
  const [value, setValue] = useState("");
  const [display, setDisplay] = useState("none");

  function handleFormSubmit(e) {
    e.preventDefault();
    createImgList(value);
    setDisplay("block");
    setValue("");
  }

  function handleTextChange(e) {
    setValue(e.target.value);
  }

  // img api
  function createImgList(value) {
    if (value === "") {
      return;
    }

    console.log(value);
    const API_KEY = "17498131-60c8163ebf480582b8b8ecb47";
    const request = encodeURIComponent(value.trim());

    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${request}&image_type=photo&per_page=10`;
    axios
      .get(url)
      .then((response) => {
        setImgData(response.data.hits);
      })
      .catch((error) => {
        setImgData([]);
      });
  }

  function handleResetClick(e) {
    e.preventDefault();
    setImgData([]);
    setDisplay("none");
  }

  return (
    <StyledContainer>
      <div style={{ backgroundColor: "#fff", paddingBottom: "100px" }}>
        <div style={{ borderBottom: "1px solid #ccc" }}>
          <SearchHead
            handleFormSubmit={handleFormSubmit}
            handleTextChange={handleTextChange}
            value={value}
          />
        </div>
        <SearchImgData
          handleResetClick={handleResetClick}
          imgData={imgData}
          display={display}
        />
      </div>
    </StyledContainer>
  );
};

export default SerchPage;

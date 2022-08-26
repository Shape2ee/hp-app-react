import React, { useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import SearchList from "./SearchList";
// icon
import search from "../../assets/search_bk.svg";

const StyledFrom = styled("form")`
  position: relative;
  margin: 40px auto 0;
`;

const StyledInput = styled("input")`
  width: 100%;
  height: 50px;
  background: #f2f5f7 url();
  border: none;
  border-radius: 25px;
  text-indent: 20px;

  :active,
  :focus {
    outline: none;
  }

  :active + button,
  :focus + button {
    opacity: 1;
  }

  ::placeholder {
    font-size: 16px;
    color: #000;
    opacity: 0.5;
  }
`;

const StyledSubmit = styled("button")`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: transparent;
  opacity: 0.5;
`;

const StyledReset = styled("button")`
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  width: 100px;
  height: 40px;
  background-color: #000;
  border-radius: 20px;
  color: #fff;

  :hover {
    opacity: 0.8;
  }

`

const SearchForm = () => {
  const [ value, setValue ] = useState("")
  
  function handleInputChange(e) {
    setValue(e.target.value);    
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    createImgList(value)
    setValue("")
  }

  // img api
  const [imgData, setImgData] = useState([]);

  function createImgList(value) {
    if(value === "") {
      return
    }

    console.log(value)
    const API_KEY = "17498131-60c8163ebf480582b8b8ecb47";
    const request = encodeURIComponent(value.trim())

    const url =
      `https://pixabay.com/api/?key=${API_KEY}&q=${request}&image_type=photo&per_page=6`;
    axios
      .get(url)
      .then((response) => {
        setImgData(response.data.hits);
      })
      .catch((error) => {
        setImgData([]);
      });
  };

  function handleResetClick() {
    setImgData([])

  }

  return (
    <>
      <StyledFrom onSubmit={handleFormSubmit}>
        <StyledInput type="text" placeholder="찾으시는 제품을 입력해주세요" onChange={handleInputChange} value={value} />
        <StyledSubmit type="submit">
          <img src={search} alt="검색" />
        </StyledSubmit>
      </StyledFrom>
      
      <SearchList imgData={imgData} />
      <StyledReset type="reset" onClick={handleResetClick}>초기화</StyledReset>
    </>
  );
};

export default SearchForm;
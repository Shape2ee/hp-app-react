import React from 'react';
import styled from 'styled-components';
import SearchList from "../main/search/SearchList";

const StyledWrap = styled("div")`
  width: 100%;
  padding: 0 24px;

  @media ${props => props.theme.desktop} {
    margin: 0 auto;
    padding: 0;
    width: 90%;
    max-width: 1400px;
  }
`

const StyledReset = styled("button")`
  display: ${props => props.display ? props.display : "none"};
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
const SearchImgData = ({imgData, handleResetClick, display }) => {
  return (
    <StyledWrap>
      <SearchList imgData={imgData}/>
      <StyledReset type="reset" onClick={handleResetClick} display={display}>초기화</StyledReset>
    </StyledWrap>
  );
};

export default SearchImgData;
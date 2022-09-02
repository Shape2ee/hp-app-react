import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.svg";
import SearchHeadForm from "./SearchHeadForm";

const StyledWrap = styled("div")`
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 70px;

  @media ${props => props.theme.desktop} {
    margin: 0 auto;
    padding: 0;
    width: 90%;
    max-width: 1400px;
  }
`

const StyledButton = styled("button")`
  width: 20px;
  height: 20px;
  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SearchHead = ({handleFormSubmit, handleTextChange, value}) => {
  const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1)
  }
  return (
    <StyledWrap>
      <StyledButton onClick={handleBackClick}>
        <img src={back} alt="close" />
      </StyledButton>
      <SearchHeadForm handleFormSubmit={handleFormSubmit} value={value} handleTextChange={handleTextChange}/>
    </StyledWrap>
  );
};

export default SearchHead;
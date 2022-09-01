import React from 'react';
import styled from 'styled-components';
import search from "../../assets/search_bk.svg";


const StyledFrom = styled("form")`
  width: calc(100% - 40px);

  input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
    text-indent: 20px;
    background-color: #f2f5f7;
    font-size: 16px;

    :focus,
    :active {
      outline: 2px dashed #ccc;
    }
    
    :focus + button,
    :active + button {
      opacity: 1;
    }
  }


`;

const StyledButton = styled("button")`
  width: 20px;
  height: 20px;
  background-color: transparent;
  position: absolute;
  top: 50%;
  right: 44px;
  transform: translateY(-50%);
  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${props => props.theme.desktop} {
    right: 20px;
  }
`;

const SearchHeadForm = ({handleFormSubmit, value, handleTextChange}) => {
  return (
    <StyledFrom onSubmit={handleFormSubmit}>
      <input type="text" value={value} placeholder="검색어를 입력해주세요" onChange={handleTextChange} />
      <StyledButton>
        <img src={search} alt="검색" />
      </StyledButton>
    </StyledFrom>
  );
};

export default SearchHeadForm;
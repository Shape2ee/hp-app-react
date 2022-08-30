import React from 'react';
import styled from 'styled-components';

import back from "../../assets/back.svg";
import search from "../../assets/search_bk.svg";

const StyledSearch = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 9999;
`;

const StyledDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 24px;
  height: 70px;

  input {
    width: calc(100% - 40px);
    height: 50px;
    border-radius: 25px;
    border: none;
    background-color: #f2f5f7;
    text-indent: 20px;
    font-size: 16px;

    :focus + button.search,
    :active + button.search {
      opacity: 1;
    }
  }

  button.search {
    position: absolute;
    top: 50%;
    right: 44px;
    transform: translateY(-50%);
    opacity: 0.5;
  }

  @media ${props => props.theme.desktop} {
    width: 90%;
    height: 100px;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

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


const SearchBox = ({handleCloseClick}) => {
  
  return (
    <StyledSearch>
      <div style={{borderBottom:"1px solid #ccc"}}>
        <StyledDiv>
          <StyledButton onClick={handleCloseClick}>
            <img src={back} alt="close" />
          </StyledButton>
          <input type="text" placeholder="검색어를 입력해주세요"/>
          <StyledButton className='search'>
            <img src={search} alt="검색" />
          </StyledButton>
        </StyledDiv>
      </div>
    </StyledSearch>
  );
};

export default SearchBox;
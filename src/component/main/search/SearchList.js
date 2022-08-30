import React from "react";
import styled from "styled-components";

const StyledBox = styled("ul")`
  overflow: hidden;
  display: grid;
  margin: 40px 0;
  gap: 40px;
  grid-template-columns: 1fr;
  width: 100%;

  li {
    overflow: hidden;
    width: 100%;
    height: 250px;
    border-radius: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${(props) => props.theme.desktop} {
    gap: 20px;
    grid-template-columns: 1fr 1fr;

    li {
      height: auto;
    }
  }
`;

const SearchList = ({ imgData }) => {
  return (
    <StyledBox>
      {imgData.map((item, idx) => (
        <li key={idx}>
          <img src={item.webformatURL} alt={`img${idx}`} />
        </li>
      ))}
    </StyledBox>
  );
};

export default SearchList;

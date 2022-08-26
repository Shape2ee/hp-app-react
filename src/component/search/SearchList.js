import React from 'react';
import styled from 'styled-components';

const StyledBox = styled("ul")`
  overflow: hidden;
  margin: 20px 0;
  width: 100%;


  li {
    overflow: hidden;
    margin: 40px 0;
    width: 100%;
    height: 250px;
    border-radius: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const SearchList = ({imgData}) => {
  return (
    <StyledBox>
      {
        imgData.map( (item, idx) => (
          <li key={idx}>
            <img src={item.webformatURL} alt={`img${idx}`} />
          </li>
        ))
      }
    </StyledBox>
  )
};

export default SearchList;
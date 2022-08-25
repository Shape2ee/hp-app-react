import React from 'react';
import styled from 'styled-components';

const StyledImgBox = styled("div")`
  overflow: hidden;
  border-radius: 20px;
  /* height: 200px; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
  }
`;

const ImgBox = ({src, alt}) => {
  return (
    <StyledImgBox>
      <img src={src} alt={alt} />
    </StyledImgBox>
  );
};

export default ImgBox;
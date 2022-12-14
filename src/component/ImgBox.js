import React from "react";
import styled from "styled-components";

const StyledImgBox = styled("div")`
  overflow: hidden;
  height: ${props => props.height ? props.height : "100%"};
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
  }
`;

const ImgBox = ({ height, src, alt }) => {
  return (
    <StyledImgBox height={height}>
      <img src={src} alt={alt} />
    </StyledImgBox>
  );
};

export default ImgBox;

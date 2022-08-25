import React from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';
import Button from '../Button';


const StyledBox = styled("div")`
  color: #fff;

  h3 {
    margin: 40px 0 20px;
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: #ccc;
  }
`

const TabItem = ({src, alt, title, subTitle}) => {
  return (
    <StyledBox>
      <ImgBox src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <Button title={"더 알아보기"}/>
    </StyledBox>
  );
};

export default TabItem;
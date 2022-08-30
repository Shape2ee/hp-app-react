import React from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';
import Button from '../Button';

const StyledCard = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  width: 100%;
  height: 100%;

  @media ${props => props.theme.desktop} {
    width: calc(33.333% - 20px);
    /* margin-right: 20px; */
    margin-bottom: 0;
  }
`

const StyledTextBox = styled("div")`
  order: 1;

  p {
    color: #555;
    line-height: 26px;
  }
`

const StyledTitle = styled("h3")`
  margin: 30px 0 16px;
  font-size: 24px;
  font-weight: 700;
`

const CardItem = ({title, text, src}) => {
  
  return (
    <StyledCard>
      <StyledTextBox>
        <StyledTitle>{title}</StyledTitle>
        <p>{text}</p>
        <Button title={"자세히 보기"} bg={"black"} text={"white"}/>
      </StyledTextBox>
      <ImgBox src={src} alt={title}/>
    </StyledCard>
  );
};

export default CardItem;
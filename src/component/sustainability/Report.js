import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

import img from '../../assets/images/subPage/img1.jpg'

const StyledSection = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0; 
  padding: 100px 24px;
  background: url(${img}) no-repeat 50% / cover;

  @media ${props => props.theme.desktop} {
    margin: 100px 0;

    padding: 150px 0;
  }
`;

const StyledWrap = styled("div")`
  padding: 40px 100px;
  width: 90%;
  max-width: 1400px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);

  h2 {
    font-size: 32px;
  }

  p {
    margin: 20px 0;
    line-height: 26px;
    color: #555;
  }

  .block {
    display: block;
  }
`;  


const Report = () => {
  return (
    <StyledSection>
      <StyledWrap>
        <h2>HP 보고서</h2>
        <p>HP 2021 지속 가능한 영향 보고서가 여기에 있습니다.<span className='block'>지금 확인하세요.</span></p>
        <Button title={"보고서 다운로드"} bg={"black"} text={"white"} />
      </StyledWrap>
    </StyledSection>
  );
};

export default Report;
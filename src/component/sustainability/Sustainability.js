import React from 'react';
import styled from 'styled-components';

// layout
import Title from '../Title';
import Visual from './Visual';
import ImpactList from './ImpactList';
import Card from './Card';
import Report from './Report';
import StorySwiper from './StorySwiper';

const StyledSection = styled("section")`
  padding: 80px 24px;
  width: 100%;

  @media ${props => props.theme.desktop} {
    padding: 100px 0;
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const Sustainability = () => {
  return (
    <main style={{overflow:"hidden"}}>
      <Visual />
      {/* section1 */}
      <StyledSection>
        <ImpactList />
      </StyledSection>
      {/* section2 */}
      <StyledSection>
        <Title title={"Impact every day"}/>
        <Card />
      </StyledSection>
      {/* section3 */}
      <Report />
      <StyledSection>
        <Title title={"Impact Story"}/>
        <StorySwiper />
      </StyledSection>
    </main>
  );
};

export default Sustainability;

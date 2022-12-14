import React from "react";
import styled from "styled-components";
import Title from "../../Title";
import SearchForm from "./SearchForm";

const StyledSection = styled("section")`
  padding: 80px 24px;

  @media ${props => props.theme.desktop} {
    width: 90%;
    max-width: 1400px;
    margin: 120px auto;
    padding: 0;
  }
`;


const Search = () => {
  
  return (
    <StyledSection>
      <Title title={"원하시는 제품이 있으신가요?"} />
      <SearchForm />
    </StyledSection>
  );
};

export default Search;
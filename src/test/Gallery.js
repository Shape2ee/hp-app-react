import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import GalleryList from "./GalleryList";
import GallerySearch from "./GallerySearch";

const Container = styled.div`
  width: ${(props) => props.width};
  margin: 20 auto;
`;

const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://pixabay.com/api/?key=29239330-861310eaa10b0f35694d09704&q=yellow+flowers&image_type=photo&per_page=5";
    axios
      .get(url)
      .then((response) => {
        setData(response.data.hits);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setData([]);
        setLoading(true);
        setError("api 주소를 확인해 보세요");
      });
  }, []);

  return (
    <Container width="1200px">
      <GallerySearch />
      <hr />
      <GalleryList data={data} />
    </Container>
  );
};

export default Gallery;

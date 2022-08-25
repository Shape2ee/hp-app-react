import React from "react";
import GalleryItem from "./GalleryItem";

const GalleryList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GalleryList;

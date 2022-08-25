import React from "react";

const GalleryItem = ({ item }) => {
  const { user, views, downloads, likes, webformatURL, tags } = item;
  return (
    <div>
      <img src={webformatURL} alt={tags} />
      <h2>{user}</h2>
      <ul>
        <li>조회수 : {views}</li>
        <li>다운로드 : {downloads}</li>
        <li>좋아요 : {likes} </li>
      </ul>
      <p>{tags}</p>
    </div>
  );
};

export default GalleryItem;

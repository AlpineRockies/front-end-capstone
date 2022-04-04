import React, { useState, useEffect, useContext } from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function ImageGallery(props) {
  const [count, setCount] = useState(0)
  let galleryThumbnails;
  let mainImage;
  if (props.styles.results !== undefined) {
   galleryThumbnails = props.styles.results.map((image, index) => <img className="thumbnailGallery" key={index} src={image.photos[0].thumbnail_url} />);
    mainImage = <img className="mainImage" key={props.styles.results[0].product_id} src={props.styles.results[count].photos[0].url} />;
  }
  return (
    <div className="ov-imageContainer">
      <div className="ov-galleryThumbnails">
        <FaArrowUp className="ov-up"/>
        {galleryThumbnails}
        <FaArrowDown className="ov-down"/>
        </div>
      <div className="ov-galleryMain" />
      <FaArrowLeft className="ov-Left"/>
      {mainImage}
      <FaArrowRight className="ov-Right"/>
      </div>
  );
}

export default ImageGallery;

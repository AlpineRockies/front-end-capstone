import React from 'react';

function ImageGallery(props) {
  let galleryThumbnails;
  let mainImage;
  if (props.styles.results !== undefined) {
   galleryThumbnails = props.styles.results.map((image, index) => <img className="thumbnailGallery" key={index} src={image.photos[0].thumbnail_url} />);
    mainImage = <img className="mainImage" key={props.styles.results[0].product_id} src={props.styles.results[0].photos[0].url} />;
  }
  return (
    <div className="ov-imageContainer">
      <div className="ov-galleryThumbnails">{galleryThumbnails}</div>
      <div className="ov-galleryMain" />{mainImage}</div>
  );
}

export default ImageGallery;

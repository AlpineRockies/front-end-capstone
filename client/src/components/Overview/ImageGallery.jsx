import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function ImageGallery(props) {
  let loadingOrImage;
  if (props.styles.results !== undefined) {
    loadingOrImage = props.styles.results.map((image) => <img className="largePicture" id={image.style_id} src={image.photos[0].url} />);
  }
  return (
    <div>
      <div>Hello World</div>
      <p>{loadingOrImage}</p>

    </div>
  );
}

export default ImageGallery;

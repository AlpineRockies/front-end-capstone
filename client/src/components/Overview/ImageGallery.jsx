import React from 'react';

function ImageGallery(props) {
  let loadingOrImage;
  if (props.styles.results !== undefined) {
    loadingOrImage = <img className="largePicture" src={props.styles.results[0].photos[0].url} />;
  }
  return (
    <div>
      <div>Hello World</div>
      <p>{loadingOrImage}</p>

    </div>
  );
}

export default ImageGallery;

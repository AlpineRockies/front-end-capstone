import React from 'react';

function StyleSelector(props) {
  console.log('hello ', props.styles.results);
  let loadingOrImage;
  if (props.styles.results !== undefined) {
    loadingOrImage = props.styles.results.map((image) => <span><img className="thumbnails" id={image.style_id} src={image.photos[0].thumbnail_url} /></span>);
  }

  return (
    <div>
      <p>{loadingOrImage}</p>
    </div>
  );
}

export default StyleSelector;

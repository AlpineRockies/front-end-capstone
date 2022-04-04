import React from 'react';

function StyleSelector(props) {
  console.log('hello ', props.styles.results);
  let stylesThumbnail;
  if (props.styles.results !== undefined) {
    stylesThumbnail = props.styles.results.map((image, index) => <span><img className="thumbnails" key={index} src={image.photos[0].thumbnail_url} /></span>);
  }

  return (
    <div>
      <p>{stylesThumbnail}</p>
    </div>
  );
}

export default StyleSelector;

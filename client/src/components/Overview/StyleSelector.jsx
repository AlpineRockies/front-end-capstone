import React from 'react';

function StyleSelector(props) {
  console.log('hello ', props.styles.results);
  let loadingOrImage;
  if(props.styles.results !== undefined){
  loadingOrImage = <img className ="thumbnails" src={props.styles.results[0].photos[0].thumbnail_url}/>
}
  return (
    <div>
      <div>Hello World</div>
      <p>{loadingOrImage}</p>
    </div>
  );
}

export default StyleSelector;

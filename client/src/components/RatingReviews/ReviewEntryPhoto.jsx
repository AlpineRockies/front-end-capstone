import React, { useState } from 'react';

function ReviewEntryPhoto({ photos }) {
  //console.log('arr photos', photos);
  const [photoModal, setPhotoModal] = useState(false);

  const imgThumb = {
    height: '60px',
    width: '60px',
    borderRadius: '50px',
    padding: '10px',
    flex: '1 20%',
  };

  const imgExpand = {
    borderRadius: '10px',
    maxHeight: '600px',
    maxWidth: '800px',
    margin: 'auto',
    backdropFilter: 'blur( 2.5px )',
  };

  return (
    <div className="RR-entry-photo">
      <form>
        {photos.map((eachPic) =>
          <label key={eachPic.id}>
            <img src={eachPic.url} style={imgThumb} />
          </label>
        )}
      </form>
    </div>
  );
}

export default ReviewEntryPhoto;

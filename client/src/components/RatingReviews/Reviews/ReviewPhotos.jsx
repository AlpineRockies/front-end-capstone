import React from 'react';
import ReviewEntryPhoto from './ReviewEntryPhoto';

function ReviewPhotos({ photos }) {
  return (

    <div className='RR-review-photos-map'>
      {photos.map((eachPhoto) => <ReviewEntryPhoto key={eachPhoto.id} photo={eachPhoto.url} />)}
    </div>
  );
}

export default ReviewPhotos;

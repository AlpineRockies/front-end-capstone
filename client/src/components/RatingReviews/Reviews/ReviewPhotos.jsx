import React from 'react';
import ReviewEntryPhoto from './ReviewEntryPhoto';
import { PhotoWrapper } from '../Style/RatingReviewStyle'

function ReviewPhotos({ photos }) {
  return (

    <PhotoWrapper>
      {photos.map((eachPhoto) => <ReviewEntryPhoto key={eachPhoto.id} photo={eachPhoto.url} />)}
    </PhotoWrapper>
  );
}

export default ReviewPhotos;

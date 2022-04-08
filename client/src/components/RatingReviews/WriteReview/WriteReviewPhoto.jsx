import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WriteReviewPhoto({
  photoRating,
  setPhotoRating,
  showUploadPhoto,
  setShowUploadPhoto,
}) {
  const [uploaded, setUploaded] = useState(0);

  useEffect(() => {

  }, []);

  const handleImgInput = (event) => {
    setPhotoRating([...photoRating, event.target.files]);
  };

  return (
    <div>
      {showUploadPhoto ? (
        <div>
          <input
          type='file'
          multiple accept='image/*'
          onChange={handleImgInput}
          />
        </div>
      ) : null}
    </div>
  );
}

export default WriteReviewPhoto;

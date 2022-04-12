import React, { useState, useEffect } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from 'firebase/storage';
import { storage } from '../../../Firebase/indexFirebase';
import { PhotoWrapper, ThumbnailImg } from '../Style/RatingReviewStyle';

function WriteReviewPhoto({ photoRating, setPhotoRating }) {
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [showUploadButton, setShowUploadButton] = useState(true);
  const [imageUpload, setImageUpload] = useState(null);
  const imagesListRef = ref(storage, 'images/');

  useEffect(() => {
    handleUploadButton();
    if (!imageUpload) {
      return;
    }
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setPhotoRating([...photoRating, url]);
      });
    });
  }, [imageUpload]);

  const handleImgInput = (event) => {
    setImageUpload(event.target.files[0]);
  };

  const handleUploadButton = () => {
    if (photoRating.length >= 4) {
      setShowUploadButton(false);
    }
  };

  return (
    <div>
      <button
        className="RR-wr-upload-photo"
        type="button"
        onClick={() => setShowUploadPhoto(true)}
      >
        Upload Photos
      </button>
      {showUploadPhoto ? (
        <div>
          {showUploadButton && <input type="file" onChange={handleImgInput} />}
          {photoRating.map((imgURL) => (
            <label key={imgURL}>
              <PhotoWrapper>
                <ThumbnailImg src={imgURL} alt="imgSrc" />
              </PhotoWrapper>
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default WriteReviewPhoto;

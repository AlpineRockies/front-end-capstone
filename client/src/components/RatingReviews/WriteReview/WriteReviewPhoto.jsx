import React, { useState, useEffect } from 'react';

function WriteReviewPhoto({
  photoRating,
  setPhotoRating,
  showUploadPhoto,
  setShowUploadPhoto,
}) {
  const [imageArray, setImageArray] = useState([]);
  const [showUploadButton, setShowUploadButton] = useState(true);

  useEffect(() => {
    handleUploadButton();
    if (imageArray.length < 1) {
      return;
    }
    imageArray.map((image) => setPhotoRating([...photoRating, URL.createObjectURL(image)]));
  }, [imageArray]);

  const handleImgInput = (event) => {
    setImageArray([...event.target.files]);
  };

  const handleUploadButton = () => {
    if (photoRating.length >= 4) {
      setShowUploadButton(false);
    }
  };

  const imgThumb = {
    height: '60px',
    width: '60px',
    borderRadius: '50px',
    padding: '10px',
    flex: '1 20%',
  };

  return (
    <div>
      {showUploadPhoto ? (
        <div>
          {showUploadButton && (
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImgInput}
            />
          )}
          {photoRating.map((imgSrc) => (
            <label key={imgSrc}>
              <img src={imgSrc} alt='imgSrc' style={imgThumb} />
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default WriteReviewPhoto;

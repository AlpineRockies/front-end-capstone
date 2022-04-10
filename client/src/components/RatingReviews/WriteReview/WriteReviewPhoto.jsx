import React, { useState, useEffect, useRef } from 'react';
import _ from 'underscore';
import { ThumbnailImg } from '../Style/RatingReviewStyle'

function WriteReviewPhoto({ photoRating, setPhotoRating }) {
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [imageArray, setImageArray] = useState([]);

  const handleImgInput = (event) => {
    const imageUrl = event.target.value;
    if (imageUrl && imageUrl.length) {
      setPhotoRating((url) => [...url, imageUrl]);
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
          {_.range(1, 6).map((inputURL) => (
            <input
              key={inputURL}
              type="url"
              placeholder={'Image URL ' + inputURL}
              onChange={handleImgInput}
            />
          ))}
          {photoRating.map((img) => (
            <label key={img}>
              <ThumbnailImg src={img} alt="imgSrc" />
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default WriteReviewPhoto;


// import React, { useState, useEffect } from 'react';
// import { ThumbnailImg } from '../Style/RatingReviewStyle'

// function WriteReviewPhoto({ photoRating, setPhotoRating }) {
//   const [showUploadPhoto, setShowUploadPhoto] = useState(false);
//   const [imageArray, setImageArray] = useState([]);
//   const [showUploadButton, setShowUploadButton] = useState(true);
// console.log(photoRating);

//   useEffect(() => {
//     handleUploadButton();
//     if (imageArray.length < 1) {
//       return;
//     }
//     imageArray.map((image) =>
//       setPhotoRating([...photoRating, URL.createObjectURL(image)])
//     );
//   }, [imageArray]);

//   const handleImgInput = (event) => {
//     setImageArray([...event.target.files]);
//   };

//   const handleUploadButton = () => {
//     if (photoRating.length >= 4) {
//       setShowUploadButton(false);
//     }
//   };

//   return (
//     <div>
//       <button
//         className="RR-wr-upload-photo"
//         type="button"
//         onClick={() => setShowUploadPhoto(true)}
//       >
//         Upload Photos
//       </button>
//       {showUploadPhoto ? (
//         <div>
//           {showUploadButton && (
//             <input
//               type="file"
//               multiple
//               accept="image/*"
//               onChange={handleImgInput}
//             />
//           )}
//           {photoRating.map((imgSrc) => (
//             <label key={imgSrc}>
//               <ThumbnailImg src={imgSrc} alt="imgSrc" />
//             </label>
//           ))}

//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default WriteReviewPhoto;

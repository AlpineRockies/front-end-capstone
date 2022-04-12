// import React, { useState, useEffect, useRef } from 'react';
// import _ from 'underscore';
// import { ThumbnailImg } from '../Style/RatingReviewStyle'

// function WriteReviewPhoto({ photoRating, setPhotoRating }) {
//   const [showUploadPhoto, setShowUploadPhoto] = useState(false);
//   const [imageArray, setImageArray] = useState([]);

//   const handleImgInput = (event) => {
//     const imageUrl = event.target.value;
//     if (imageUrl && imageUrl.length) {
//       setPhotoRating((url) => [...url, imageUrl]);
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
//           {_.range(1, 6).map((inputURL) => (
//             <input
//               key={inputURL}
//               type="url"
//               placeholder={'Image URL ' + inputURL}
//               onChange={handleImgInput}
//             />
//           ))}
//           {photoRating.map((img) => (
//             <label key={img}>
//               <ThumbnailImg src={img} alt="imgSrc" />
//             </label>
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default WriteReviewPhoto;

// import React, { useState, useEffect } from 'react';
// import { ThumbnailImg } from '../Style/RatingReviewStyle';

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

import React, { useState, useEffect } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from 'firebase/storage';
import { storage } from './indexFirebase.js';
import { ThumbnailImg } from '../Style/RatingReviewStyle';

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
              <ThumbnailImg src={imgURL} alt="imgSrc" />
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default WriteReviewPhoto;

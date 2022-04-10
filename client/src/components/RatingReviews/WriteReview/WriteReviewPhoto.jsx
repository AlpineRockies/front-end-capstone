import React, { useState, useEffect, useRef } from 'react';
import _ from 'underscore';

function WriteReviewPhoto({ photoRating, setPhotoRating }) {
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [imageArray, setImageArray] = useState([]);

  const handleImgInput = (event) => {
    const imageUrl = event.target.value;
    if (imageUrl && imageUrl.length) {
      setPhotoRating((url) => [...url, imageUrl]);
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
              <img src={img} alt="imgSrc" style={imgThumb} />
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default WriteReviewPhoto;


// import React, { useState, useEffect, useRef } from 'react';

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

//   const imgThumb = {
//     height: '60px',
//     width: '60px',
//     borderRadius: '50px',
//     padding: '10px',
//     flex: '1 20%',
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
//               <img src={imgSrc} alt="imgSrc" style={imgThumb} />
//             </label>
//           ))}

//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default WriteReviewPhoto;

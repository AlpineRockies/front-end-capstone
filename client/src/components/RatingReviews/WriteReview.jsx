import React, { useState } from 'react';
import axios from 'axios';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
import WriteReviewCharacteristic from './WriteReviewCharacteristic';
import WriteReviewStar from './WriteReviewStar';

function WriteReview({
  showWriteReview,
  setShowWriteReview,
  productId,
  metaData,
}) {

  const [starRating, setStarRating] = useState(0);
  const [summaryRating, setSummaryRating] = useState(null);
  const [bodyRating, setBodyRating] = useState(null);
  const [recommendRating, setRecommendRating] = useState(null);
  const [nameRating, setNameRating] = useState(null);
  const [emailRating, setEmailRating] = useState(null);
  const [photoRating, setPhotoRating] = useState([]);
  const [characteristicRating, setCharacteristicRating] = useState(null);

  const query = {
    product_id: productId,
    rating: starRating,
    summary: summaryRating,
    body: bodyRating,
    recommend: recommendRating,
    name: nameRating,
    email: emailRating,
    photos: photoRating,
    characteristics: characteristicRating,
  };

  const handleReviewInputSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: '/reviews',
      data: query,
    })
      .then((response) => {
        console.log('review post', response);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const handleStar = (star) => {
    setStarRating(star);
  };

  const handleCharacteristic = (characteristics) => {
    setCharacteristicRating(characteristics);
  };

  return (
    <div className="RR-wr-form">
      {showWriteReview ? (
        <form onSubmit={handleReviewInputSubmit}>
          <h4>Write Your Review</h4>
          <div className="RR-wr-exit">
            <button
              className="RR-wr-exit-button"
              type="button"
              onClick={() => setShowWriteReview(false)}
            >
              X
            </button>
          </div>

          <div className="RR-wr-content">
            <div className="RR-wr-stars">
              <WriteReviewStar handleStar={handleStar} />
            </div>
            <div className="RR-wr-recommend">
              <span>Would you recommend?</span>
              <label>
                <HiThumbUp onClick={() => setRecommendRating(true)} />
              </label>
              <label>
                <HiThumbDown onClick={() => setRecommendRating(false)} />
              </label>
            </div>
            <div className="RR-wr-characteristic">
              <WriteReviewCharacteristic
                handleCharacteristic={handleCharacteristic}
                metaData={metaData}
              />
            </div>
            <div className="RR-wr-name">
              <input
                placeholder="Name"
                type="text"
                name="name"
                onChange={(event) => setNameRating(event.target.value)}
              />
            </div>
            <div className="RR-wr-email">
              <input
                placeholder="Email"
                type="text"
                name="email"
                onChange={(event) => setEmailRating(event.target.value)}
              />
            </div>
            <div className="RR-wr-summary">
              <input
                placeholder="Summary"
                type="text"
                name="summary"
                maxLength="60"
                onChange={(event) => setSummaryRating(event.target.value)}
              />
            </div>
            <div className="RR-wr-body">
              <input
                placeholder="Review"
                type="text"
                name="body"
                maxLength="250"
                onChange={(event) => setBodyRating(event.target.value)}
              />
            </div>
            <div className="RR-wr-photo">
              <input
                placeholder="Link to photos"
                type="text"
                name="photo"
                onChange={(event) =>
                  setPhotoRating([...photoRating, event.target.value])
                }
              />
            </div>
            // inner break for content
          </div>

          <button className="RR-wr-submit-button" type="submit">
            Submit Review
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default WriteReview;

import React, { useState } from 'react';
import axios from 'axios';
import { escapeValue } from 'Utilities';
import WriteReviewCharacteristic from './WriteReviewCharacteristic';
import WriteReviewStar from './WriteReviewStar';
import WriteReviewPhoto from './WriteReviewPhoto';
import { StyledOverlay, StyledModal, CloseButton } from '../Style/RatingReviewStyle';

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
      .then(() => setShowWriteReview(false))
      .catch((err) => {
        console.log('err in RR POST', err);
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
        <StyledOverlay>
          <StyledModal>
            <form onSubmit={handleReviewInputSubmit}>
              <h4>Write Your Review</h4>
                <CloseButton
                  type="button"
                  onClick={() => setShowWriteReview(false)}
                >
                  X
                </CloseButton>
              <div className="RR-wr-content">
                <div className="RR-wr-stars">
                  <WriteReviewStar handleStar={handleStar} />
                </div>
                <div className="RR-wr-recommend">
                  <span>Would you recommend?</span>
                  <label>
                    <input
                      type="radio"
                      value="yes"
                      name="recommend"
                      onClick={() => setRecommendRating(true)}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="no"
                      name="recommend"
                      onClick={() => setRecommendRating(false)}
                    />
                    No
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
                    placeholder="Example: jackson11!"
                    type="text"
                    name="name"
                    onChange={(event) =>
                      setNameRating(escapeValue(event.target.value))
                    }
                  />
                </div>
                <div className="RR-wr-email">
                  <input
                    placeholder="Example: jackson11@email.com"
                    type="text"
                    name="email"
                    onChange={(event) =>
                      setEmailRating(escapeValue(event.target.value))
                    }
                  />
                </div>
                <div className="RR-wr-summary">
                  <input
                    placeholder="Summary"
                    type="text"
                    name="Example: Best purchase ever!"
                    maxLength="60"
                    onChange={(event) =>
                      setSummaryRating(escapeValue(event.target.value))
                    }
                  />
                </div>
                <div className="RR-wr-body">
                  <input
                    placeholder="Why did you like the product or not?"
                    type="text"
                    name="body"
                    maxLength="1000"
                    onChange={(event) =>
                      setBodyRating(escapeValue(event.target.value))
                    }
                  />
                </div>
                <div className="RR-wr-photo">
                  <WriteReviewPhoto
                    photoRating={photoRating}
                    setPhotoRating={setPhotoRating}
                  />
                </div>
              </div>
              <button className="RR-wr-submit-button" type="submit">
                Submit Review
              </button>
            </form>
          </StyledModal>
        </StyledOverlay>
      ) : null}
    </div>
  );
}

export default WriteReview;

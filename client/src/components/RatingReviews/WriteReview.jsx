import React, { useState } from 'react';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import WriteReviewCharacteristic from './WriteReviewCharacteristic.jsx'

function WriteReview({ showWriteReview, setShowWriteReview, productId }) {
  const [reviewInputData, setReviewInputData] = useState([]);
  const [starRating, setStarRating] = useState(0);
  const [recommend, setRecommend] = useState(null);

  const handleReivewInput = (event) => {
    console.log('in onchange write', event.target.value);
  };

  const handleReviewInputSubmit = (event) => {
    event.preventDefault();
    console.log('hit in handle submit');

    setShowWriteReview(false);
  };

  const handleStarCharacteristic = (star) => {
    if (star === 1) {
      return 'Poor';
    } else if (star === 2) {
      return 'Fair';
    } else if (star === 3) {
      return 'Average';
    } else if (star === 4) {
      return 'Good';
    } else if (star === 5) {
      return 'Great'
    } else {
      '';
    }
  };

  return (
    <div className='RR-wr-form'>
      {showWriteReview ? (
        <form>
          <h4>Write Your Review</h4>
          <div className='RR-wr-exit'>
            <button
              className='RR-wr-exit-button'
              type='button'
              onClick={() => setShowWriteReview(false)}
            >
              X
            </button>
          </div>

          <div className='RR-wr-content'>

            <div className='RR-wr-stars'>
              {[...Array(5)].map((star, count) => {
                count++;
                return (
                  <label key={count}>
                    <FaStar
                      value={count}
                      onClick={() => setStarRating(count)}
                    />
                  </label>
                );
              })}
              <div className='RR-wr-star-characteristic'>{handleStarCharacteristic(starRating)}</div>
            </div>

            <div className='RR-wr-recommend'>
              <span>Would you recommend?</span>
                <label><HiThumbUp onClick={() => setRecommend(true)} /></label>
                <label><HiThumbDown onClick={() => setRecommend(false)} /></label>
            </div>


            <div className='RR-wr-characteristic'>
              <WriteReviewCharacteristic />
            </div>

            <div className='RR-wr-name'>
              <input
                placeholder='Name'
                type='text'
                onChange={(event) => handleReivewInput(event)}
              />
            </div>
            <div className='RR-wr-email'>
              <input
                placeholder='Email'
                type='text'
                onChange={(event) => handleReivewInput(event)}
              />
            </div>
            <div className='RR-wr-summary'>
              <input
                placeholder='Summary'
                type='text'
                onChange={(event) => handleReivewInput(event)}
              />
            </div>
            <div className='RR-wr-review'>
              <input
                placeholder='Review'
                type='text'
                onChange={(event) => handleReivewInput(event)}
              />
            </div>



          </div>

          <button
            className='RR-wr-submit-button'
            type='button'
            onClick={handleReviewInputSubmit}
          >
            Submit Review
          </button>

        </form>
      ) : null}
    </div>
  );
}

export default WriteReview;
